#!/usr/bin/env node
/**
 * Build-time SEO validator.
 *
 * Scans every pre-rendered HTML file in dist/ and verifies that:
 *   1. <link rel="canonical"> exists and points to the same path as the file.
 *   2. <meta property="og:url"> matches the canonical.
 *   3. The language of the URL (/es/... vs /...) matches the file location.
 *   4. <html lang="..."> matches the URL language.
 *
 * Exits with code 1 if any issues are found so CI fails the build.
 */
import { readFileSync, statSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const DIST = "dist";
const BASE_URL = "https://chichenitzatravel.com";

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else if (entry.isFile() && entry.name.endsWith(".html")) out.push(p);
  }
  return out;
}

function htmlToExpectedPath(file) {
  // dist/index.html              -> /
  // dist/es.html or dist/es/index.html -> /es
  // dist/tours/index.html        -> /tours
  // dist/guide/foo.html          -> /guide/foo
  let rel = relative(DIST, file).split(sep).join("/");
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) rel = rel.slice(0, -"/index.html".length);
  else if (rel.endsWith(".html")) rel = rel.slice(0, -".html".length);
  return "/" + rel;
}

function pick(html, regex) {
  const m = html.match(regex);
  return m ? m[1].trim() : null;
}

function getCanonical(html) {
  return pick(
    html,
    /<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i,
  ) || pick(
    html,
    /<link[^>]+href=["']([^"']+)["'][^>]*rel=["']canonical["']/i,
  );
}

function getOgUrl(html) {
  return pick(
    html,
    /<meta[^>]+property=["']og:url["'][^>]*content=["']([^"']+)["']/i,
  ) || pick(
    html,
    /<meta[^>]+content=["']([^"']+)["'][^>]*property=["']og:url["']/i,
  );
}

function getHtmlLang(html) {
  return pick(html, /<html[^>]*\blang=["']([^"']+)["']/i);
}

function langOfPath(p) {
  return p === "/es" || p.startsWith("/es/") ? "es" : "en";
}

function normalize(url) {
  if (!url) return url;
  // Strip trailing slash except for the root.
  if (url.length > 1 && url.endsWith("/")) return url.slice(0, -1);
  return url;
}

(async () => {
  let files;
  try {
    statSync(DIST);
    files = await walk(DIST);
  } catch {
    console.error(`✗ ${DIST}/ not found. Run \`bun run build\` first.`);
    process.exit(1);
  }

  const issues = [];
  let checked = 0;

  for (const file of files) {
    const html = readFileSync(file, "utf8");
    const expectedPath = htmlToExpectedPath(file);
    const expectedLang = langOfPath(expectedPath);
    const expectedUrl = normalize(BASE_URL + expectedPath);

    // Skip the 404 page — it intentionally renders for unknown routes.
    if (expectedPath === "/404") continue;

    checked++;

    const canonical = normalize(getCanonical(html));
    const ogUrl = normalize(getOgUrl(html));
    const htmlLang = getHtmlLang(html);

    const fileIssues = [];

    if (!canonical) fileIssues.push("missing <link rel=canonical>");
    else if (canonical !== expectedUrl)
      fileIssues.push(`canonical "${canonical}" ≠ expected "${expectedUrl}"`);

    if (!ogUrl) fileIssues.push("missing og:url");
    else if (ogUrl !== expectedUrl)
      fileIssues.push(`og:url "${ogUrl}" ≠ expected "${expectedUrl}"`);

    if (canonical) {
      const canonicalPath = canonical.replace(BASE_URL, "") || "/";
      if (langOfPath(canonicalPath) !== expectedLang)
        fileIssues.push(
          `canonical language "${langOfPath(canonicalPath)}" ≠ url language "${expectedLang}"`,
        );
    }

    if (htmlLang) {
      const tag = htmlLang.toLowerCase().slice(0, 2);
      if (tag !== expectedLang)
        fileIssues.push(
          `<html lang="${htmlLang}"> ≠ url language "${expectedLang}"`,
        );
    }

    // Detect duplicate canonical tags (a real bug we've hit before).
    const canonicalCount = (
      html.match(/<link[^>]+rel=["']canonical["']/gi) || []
    ).length;
    if (canonicalCount > 1)
      fileIssues.push(`${canonicalCount} canonical tags (expected 1)`);

    if (fileIssues.length) {
      issues.push({ file: relative(".", file), expectedPath, fileIssues });
    }
  }

  if (issues.length === 0) {
    console.log(`✓ SEO validator: ${checked} pages OK`);
    process.exit(0);
  }

  console.error(`\n✗ SEO validator: ${issues.length}/${checked} pages have issues\n`);
  for (const { file, expectedPath, fileIssues } of issues) {
    console.error(`  ${file}  (route ${expectedPath})`);
    for (const i of fileIssues) console.error(`    - ${i}`);
  }
  console.error("");
  process.exit(1);
})();
