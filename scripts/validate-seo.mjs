#!/usr/bin/env node
/**
 * Post-build SEO validator.
 * Scans every pre-rendered HTML file in dist/ and validates:
 *   - exactly one <link rel="canonical">
 *   - canonical path matches the file's route
 *   - og:url matches the canonical
 *   - <html lang> matches the URL language prefix (/es/ → es, otherwise en)
 *   - hreflang alternates present and self-referencing correctly
 *
 * Emits:
 *   dist/seo-report.json   — machine-readable findings
 *   dist/seo-report.html   — human-readable report (open in browser)
 *
 * Exits 0 always (report is the deliverable). Pass --strict to fail on errors.
 */
import { readdirSync, statSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";

const DIST = "dist";
const BASE_URL = "https://chichenitzatravel.com";
const STRICT = process.argv.includes("--strict");

if (!existsSync(DIST)) {
  console.error(`[seo-validator] ${DIST}/ not found. Run the build first.`);
  process.exit(1);
}

/** Recursively collect .html files under dist/ */
function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const s = statSync(full);
    if (s.isDirectory()) out.push(...walk(full));
    else if (entry.endsWith(".html")) out.push(full);
  }
  return out;
}

/** Convert dist/es/tours/index.html → /es/tours, dist/index.html → / */
function fileToRoute(file) {
  let rel = relative(DIST, file).split(sep).join("/");
  rel = rel.replace(/index\.html$/, "").replace(/\.html$/, "");
  if (!rel.startsWith("/")) rel = "/" + rel;
  if (rel.length > 1 && rel.endsWith("/")) rel = rel.slice(0, -1);
  return rel || "/";
}

function expectedLang(route) {
  return route === "/es" || route.startsWith("/es/") ? "es" : "en";
}

/** Strip BASE_URL and trailing slash for comparison */
function normalizeUrl(u) {
  if (!u) return null;
  let p = u.startsWith(BASE_URL) ? u.slice(BASE_URL.length) : u;
  if (!p.startsWith("/")) p = "/" + p;
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p;
}

const files = walk(DIST).sort();
const results = [];
let totalErrors = 0;
let totalWarnings = 0;

for (const file of files) {
  const html = readFileSync(file, "utf8");
  const route = fileToRoute(file);
  const expLang = expectedLang(route);
  const errors = [];
  const warnings = [];

  // <html lang="...">
  const htmlLang = html.match(/<html[^>]*\slang=["']([^"']+)["']/i)?.[1] ?? null;
  if (!htmlLang) errors.push("Missing <html lang> attribute");
  else if (htmlLang !== expLang)
    errors.push(`<html lang="${htmlLang}"> but route language is "${expLang}"`);

  // canonical
  const canonicalMatches = [...html.matchAll(/<link[^>]+rel=["']canonical["'][^>]*>/gi)];
  if (canonicalMatches.length === 0) errors.push("Missing canonical link");
  else if (canonicalMatches.length > 1)
    errors.push(`Found ${canonicalMatches.length} canonical links (expected 1)`);

  const canonicalHref = canonicalMatches[0]?.[0].match(/href=["']([^"']+)["']/i)?.[1] ?? null;
  const canonicalPath = normalizeUrl(canonicalHref);
  if (canonicalHref && canonicalPath !== route)
    errors.push(`Canonical "${canonicalPath}" does not match route "${route}"`);

  // og:url
  const ogUrlMatches = [...html.matchAll(/<meta[^>]+property=["']og:url["'][^>]*>/gi)];
  if (ogUrlMatches.length > 1)
    warnings.push(`Found ${ogUrlMatches.length} og:url tags (expected 1)`);
  const ogUrl = ogUrlMatches[0]?.[0].match(/content=["']([^"']+)["']/i)?.[1] ?? null;
  const ogPath = normalizeUrl(ogUrl);
  if (ogUrl && ogPath !== route)
    errors.push(`og:url "${ogPath}" does not match route "${route}"`);

  // og:locale should match lang
  const ogLocale = html.match(/<meta[^>]+property=["']og:locale["'][^>]*content=["']([^"']+)["']/i)?.[1] ?? null;
  if (ogLocale) {
    const expLocale = expLang === "es" ? "es_MX" : "en_US";
    if (ogLocale !== expLocale)
      warnings.push(`og:locale "${ogLocale}" expected "${expLocale}"`);
  }

  // hreflang
  const hreflangs = [...html.matchAll(/<link[^>]+hreflang=["']([^"']+)["'][^>]*href=["']([^"']+)["']/gi)]
    .map(m => ({ lang: m[1], href: m[2] }));
  const hasEn = hreflangs.some(h => h.lang === "en");
  const hasEs = hreflangs.some(h => h.lang === "es");
  const hasDefault = hreflangs.some(h => h.lang === "x-default");
  if (!hasEn) warnings.push("Missing hreflang=en");
  if (!hasEs) warnings.push("Missing hreflang=es");
  if (!hasDefault) warnings.push("Missing hreflang=x-default");

  // self-referencing hreflang must include this route
  const selfHreflang = hreflangs.find(h => h.lang === expLang);
  if (selfHreflang && normalizeUrl(selfHreflang.href) !== route)
    errors.push(`hreflang="${expLang}" "${normalizeUrl(selfHreflang.href)}" does not match route "${route}"`);

  // robots noindex check on non-404 pages
  const robots = html.match(/<meta[^>]+name=["']robots["'][^>]*content=["']([^"']+)["']/i)?.[1] ?? null;
  if (route !== "/404" && robots && /noindex/i.test(robots))
    warnings.push(`Page is noindex (robots="${robots}")`);

  // ---- JSON-LD schema validation ----
  const jsonLdBlocks = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const schemaTypes = [];
  const schemaDetails = [];
  let parseErrors = 0;

  jsonLdBlocks.forEach((m, i) => {
    const raw = m[1].trim();
    if (!raw) {
      errors.push(`JSON-LD block #${i + 1} is empty`);
      parseErrors++;
      return;
    }
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (e) {
      errors.push(`JSON-LD block #${i + 1} parse error: ${e.message}`);
      parseErrors++;
      return;
    }
    const items = Array.isArray(parsed) ? parsed : [parsed];
    items.forEach((item, j) => {
      if (!item || typeof item !== "object") {
        warnings.push(`JSON-LD block #${i + 1}[${j}] is not an object`);
        return;
      }
      if (!item["@context"]) warnings.push(`JSON-LD block #${i + 1}[${j}] missing @context`);
      const type = item["@type"];
      if (!type) {
        warnings.push(`JSON-LD block #${i + 1}[${j}] missing @type`);
        return;
      }
      const types = Array.isArray(type) ? type : [type];
      types.forEach(t => schemaTypes.push(t));
      schemaDetails.push({ type: types.join(","), keys: Object.keys(item).length });

      // Per-type required field checks
      if (types.includes("FAQPage")) {
        const me = item.mainEntity;
        if (!Array.isArray(me) || me.length === 0)
          errors.push(`FAQPage missing mainEntity questions`);
        else {
          const bad = me.find(q => !q?.name || !q?.acceptedAnswer?.text);
          if (bad) errors.push(`FAQPage has Question without name/acceptedAnswer.text`);
        }
      }
      if (types.includes("Product")) {
        if (!item.name) errors.push(`Product schema missing name`);
        if (!item.offers) warnings.push(`Product schema missing offers`);
        if (item.aggregateRating) {
          const ar = item.aggregateRating;
          if (!ar.ratingValue || !ar.reviewCount)
            errors.push(`Product.aggregateRating missing ratingValue/reviewCount`);
        }
      }
      if (types.includes("AggregateRating")) {
        if (!item.ratingValue || !item.reviewCount)
          errors.push(`AggregateRating missing ratingValue/reviewCount`);
      }
      if (types.includes("Review")) {
        if (!item.reviewRating || !item.author)
          errors.push(`Review missing reviewRating/author`);
      }
      if (types.includes("BreadcrumbList")) {
        if (!Array.isArray(item.itemListElement) || item.itemListElement.length === 0)
          errors.push(`BreadcrumbList missing itemListElement`);
      }
      if (types.includes("ItemList")) {
        if (!Array.isArray(item.itemListElement) || item.itemListElement.length === 0)
          warnings.push(`ItemList has no itemListElement`);
      }
      if (types.includes("Article")) {
        if (!item.headline) errors.push(`Article missing headline`);
        if (!item.author) warnings.push(`Article missing author`);
        if (!item.datePublished) warnings.push(`Article missing datePublished`);
      }
      if (types.includes("Offer") || (item.offers && typeof item.offers === "object")) {
        const off = types.includes("Offer") ? item : item.offers;
        const offers = Array.isArray(off) ? off : [off];
        offers.forEach(o => {
          if (o && o.price !== undefined && !o.priceCurrency)
            warnings.push(`Offer has price but no priceCurrency`);
        });
      }
    });
  });

  if (jsonLdBlocks.length === 0 && route !== "/404") {
    warnings.push("No JSON-LD schema found on page");
  }

  // Route-based expected-schema heuristics
  const expectSchema = (typeName, msg) => {
    if (!schemaTypes.includes(typeName))
      warnings.push(`Expected ${typeName} schema (${msg})`);
  };
  if (route === "/" || route === "/es") {
    expectSchema("WebSite", "homepage");
    if (!schemaTypes.some(t => ["Organization", "TravelAgency", "LocalBusiness"].includes(t)))
      warnings.push("Expected Organization/TravelAgency schema (homepage)");
    expectSchema("FAQPage", "homepage has FAQ section");
  }
  if (/^\/(es\/)?tours\/[^/]+$/.test(route) && !route.endsWith("/tours")) {
    expectSchema("Product", "tour detail page");
  }
  if (/^\/(es\/)?combo-tours\/[^/]+$/.test(route)) {
    if (!schemaTypes.some(t => ["TouristTrip", "Product"].includes(t)))
      warnings.push("Expected TouristTrip/Product schema (combo tour page)");
  }
  if (/^\/(es\/)?guide\/[^/]+$/.test(route)) {
    expectSchema("Article", "guide article page");
  }
  if (/^\/(es\/)?blog\/[^/]+$/.test(route)) {
    if (!schemaTypes.some(t => ["Article", "BlogPosting"].includes(t)))
      warnings.push("Expected Article/BlogPosting schema (blog post)");
  }
  if (/^\/(es\/)?practical\/contact$/.test(route)) {
    expectSchema("ContactPage", "contact page");
  }
  if (/^\/(es\/)?practical\/faq$/.test(route)) {
    expectSchema("FAQPage", "FAQ page");
  }
  if (/^\/(es\/)?tours-from\/[^/]+$/.test(route)) {
    if (!schemaTypes.some(t => ["TouristDestination", "ItemList"].includes(t)))
      warnings.push("Expected TouristDestination/ItemList schema (tours-from page)");
  }

  totalErrors += errors.length;
  totalWarnings += warnings.length;

  results.push({
    file: relative(DIST, file).split(sep).join("/"),
    route,
    expectedLang: expLang,
    htmlLang,
    canonical: canonicalPath,
    canonicalCount: canonicalMatches.length,
    ogUrl: ogPath,
    ogLocale,
    hreflangs,
    robots,
    jsonLdCount: jsonLdBlocks.length,
    jsonLdParseErrors: parseErrors,
    schemaTypes,
    schemaDetails,
    errors,
    warnings,
    status: errors.length ? "fail" : warnings.length ? "warn" : "pass",
  });
}

const summary = {
  generatedAt: new Date().toISOString(),
  totalPages: results.length,
  passed: results.filter(r => r.status === "pass").length,
  warned: results.filter(r => r.status === "warn").length,
  failed: results.filter(r => r.status === "fail").length,
  totalErrors,
  totalWarnings,
};

// JSON report
writeFileSync(
  join(DIST, "seo-report.json"),
  JSON.stringify({ summary, results }, null, 2),
);

// HTML report
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const statusBadge = (s) => {
  const color = s === "pass" ? "#10B981" : s === "warn" ? "#DAA520" : "#DC2626";
  return `<span style="background:${color};color:#fff;padding:2px 8px;border-radius:4px;font-size:12px;font-weight:600">${s.toUpperCase()}</span>`;
};

const rows = results
  .sort((a, b) => (a.status === b.status ? a.route.localeCompare(b.route) : a.status === "fail" ? -1 : b.status === "fail" ? 1 : a.status === "warn" ? -1 : 1))
  .map(r => `
    <tr>
      <td>${statusBadge(r.status)}</td>
      <td><code>${esc(r.route)}</code></td>
      <td>${esc(r.htmlLang)} / ${esc(r.expectedLang)}</td>
      <td><code>${esc(r.canonical)}</code>${r.canonicalCount !== 1 ? ` <strong style="color:#DC2626">(${r.canonicalCount})</strong>` : ""}</td>
      <td><code>${esc(r.ogUrl)}</code></td>
      <td>
        ${r.errors.length ? `<ul style="margin:0;padding-left:18px;color:#DC2626">${r.errors.map(e => `<li>${esc(e)}</li>`).join("")}</ul>` : ""}
        ${r.warnings.length ? `<ul style="margin:0;padding-left:18px;color:#B45309">${r.warnings.map(w => `<li>${esc(w)}</li>`).join("")}</ul>` : ""}
      </td>
    </tr>`).join("");

const reportHtml = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>SEO Validation Report</title>
<style>
  body{font-family:-apple-system,Segoe UI,Roboto,sans-serif;margin:0;padding:24px;background:#F4E4C1;color:#3E2723}
  h1{margin:0 0 4px}
  .meta{color:#6b5b4a;margin-bottom:16px;font-size:14px}
  .cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-bottom:24px}
  .card{background:#fff;border-radius:8px;padding:16px;box-shadow:0 1px 3px rgba(0,0,0,.08)}
  .card .n{font-size:28px;font-weight:700}
  .card .l{font-size:12px;color:#6b5b4a;text-transform:uppercase;letter-spacing:.5px}
  table{width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.08)}
  th,td{text-align:left;padding:10px 12px;border-bottom:1px solid #eee;font-size:13px;vertical-align:top}
  th{background:#3E2723;color:#fff;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.5px}
  code{background:#F4E4C1;padding:1px 5px;border-radius:3px;font-size:12px}
  tr:hover td{background:#fafafa}
</style></head><body>
<h1>SEO Validation Report</h1>
<div class="meta">Generated ${esc(summary.generatedAt)}</div>
<div class="cards">
  <div class="card"><div class="n">${summary.totalPages}</div><div class="l">Pages</div></div>
  <div class="card"><div class="n" style="color:#10B981">${summary.passed}</div><div class="l">Passed</div></div>
  <div class="card"><div class="n" style="color:#DAA520">${summary.warned}</div><div class="l">Warnings</div></div>
  <div class="card"><div class="n" style="color:#DC2626">${summary.failed}</div><div class="l">Failed</div></div>
  <div class="card"><div class="n">${summary.totalErrors}</div><div class="l">Errors</div></div>
  <div class="card"><div class="n">${summary.totalWarnings}</div><div class="l">Warnings</div></div>
</div>
<table>
  <thead><tr><th>Status</th><th>Route</th><th>Lang (actual/expected)</th><th>Canonical</th><th>og:url</th><th>Issues</th></tr></thead>
  <tbody>${rows}</tbody>
</table>
</body></html>`;

writeFileSync(join(DIST, "seo-report.html"), reportHtml);

console.log(`\n[seo-validator] ${summary.totalPages} pages — ${summary.passed} pass, ${summary.warned} warn, ${summary.failed} fail`);
console.log(`[seo-validator] Reports: ${DIST}/seo-report.json  ${DIST}/seo-report.html`);

if (STRICT && summary.failed > 0) {
  console.error(`[seo-validator] STRICT mode: failing build (${summary.failed} pages with errors)`);
  process.exit(1);
}
