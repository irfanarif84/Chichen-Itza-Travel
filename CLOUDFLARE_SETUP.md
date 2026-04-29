# Cloudflare Pages — Required Redirect Rules

These redirects cannot be set in `public/_redirects` and must be configured
manually in the Cloudflare dashboard under **Pages > your-project > Settings > Redirects**
OR under your domain's **Cloudflare Rules**.

## Rules to add:

1. `http://chichenitzatravel.com/*` → `https://chichenitzatravel.com/$1` (301)
2. `https://www.chichenitzatravel.com/*` → `https://chichenitzatravel.com/$1` (301)
3. `http://www.chichenitzatravel.com/*` → `https://chichenitzatravel.com/$1` (301)

## DNS Settings:
- A record: `chichenitzatravel.com` → Cloudflare Pages (proxied)
- CNAME: `www` → `chichenitzatravel.com` (proxied)
- SSL mode: Full (strict)

## Notes:
- `public/_redirects` is for SPA fallback only (`/* /index.html 200`).
- These canonical redirects are critical for SEO to consolidate link equity
  on the bare-domain HTTPS version.
