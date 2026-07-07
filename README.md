# Rox Auto Parts — Company Website (Next.js)

Marketing site for ROX International Corporation, a Taiwanese auto-parts trading company (since 1976). Statically pre-rendered (SSG) with full i18n routing — every page ships complete HTML for SEO.

## Tech stack

- Next.js 15 (pages router, SSG) + TypeScript (strict)
- Tailwind CSS (single styling system; UI hand-rolled, no component library)
- next-i18next (English / Español via /es routes)
- next-themes (light/dark, persisted, system-aware)
- Swiper 11, EmailJS

Node >= 20.9 (`.nvmrc` = 22).

## Development

```bash
nvm use
npm install
cp .env.example .env.local   # fill in EmailJS credentials
npm run dev
npm run build                # typecheck + SSG build
```

## Branches & deployment (Vercel)

- `style/frosted-glass` — airy frosted-glass look: pastel backdrop, translucent blurred white surfaces
- `style/glassmorphism` — dark-first glassmorphism: vivid gradient mesh, glass cards, neon accents

Both share the same layout/components; the look is driven by `styles/theme.css` + `components/BackgroundDecor.tsx`.

On Vercel every pushed branch gets its own Preview Deployment URL for side-by-side review. After choosing one, merge it into `main` and update `SITE_URL` in `lib/site.ts` plus `public/robots.txt` / `public/sitemap.xml` if the domain changes. Remember to set the three `NEXT_PUBLIC_EMAIL_*` env vars in Vercel.

## SEO

Per-page title/description/canonical/Open Graph, hreflang alternates (en/es), JSON-LD Organization schema, `sitemap.xml`, `robots.txt`, lowercase routes with 301s from the old capitalized URLs.
