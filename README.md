# Building IT — Marketing Site

The marketing website for **Building IT**, a managed-website service for local service
businesses (roofers, HVAC, plumbers, electricians, and similar trades) near Kankakee, Illinois.

Built with [Astro](https://astro.build) as a fully static site — zero client-side framework
runtime, self-hosted fonts, and hand-written vanilla JS for the handful of interactive bits
(mobile nav, FAQ accordion, scroll reveal, scroll-spy, the contact form).

## Tech stack

- **[Astro](https://astro.build)** — static site generator, outputs plain HTML/CSS/JS
- **TypeScript** — used in `.astro` component frontmatter and client scripts
- **[@fontsource-variable/inter](https://fontsource.org)** — self-hosted variable Inter font
  (upright + italic), no third-party font requests at runtime
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** —
  generates `sitemap-index.xml` at build time
- **Prettier** (+ `prettier-plugin-astro`) — consistent formatting
- **sharp** — used only to regenerate the favicon/OG raster images from source SVGs

No UI framework (React/Vue/etc.) is used — every page is static HTML with small, scoped
`<script>` tags for interactivity.

## Project structure

```
├── public/                  Static assets served as-is (favicons, robots.txt, OG image, manifest)
├── scripts/
│   └── gen-images.mjs       Regenerates favicon + OG raster images from the source SVGs
├── src/
│   ├── components/          One Astro component per page section (Hero, Pricing, Faq, ...)
│   ├── data/
│   │   └── site.ts          Single source of truth for all site copy & contact info
│   ├── layouts/
│   │   └── BaseLayout.astro Document shell: <head> meta/SEO/structured data, fonts, global script
│   ├── pages/
│   │   └── index.astro      Assembles the one-page layout from the section components
│   └── styles/
│       └── global.css       The full design system (tokens, typography, components, responsive rules)
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

### Editing content

Almost all copy — phone number, email, FAQ questions, pricing features, problem/solution lists,
industries served — lives in **`src/data/site.ts`**. Edit the data there and it flows through
every component that uses it; you shouldn't need to touch component markup for a copy change.

## Getting started

Requires **Node.js 22.12+** (see `.nvmrc`).

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

## Available scripts

| Command                | Action                                                             |
| ---------------------- | ------------------------------------------------------------------ |
| `npm run dev`          | Start the local dev server with hot reload                         |
| `npm run build`        | Type-check (`astro check`) then build the static site to `dist/`   |
| `npm run preview`      | Serve the built `dist/` output locally, to sanity-check a build    |
| `npm run check`        | Run Astro's type checker on its own                                |
| `npm run format`       | Format the whole project with Prettier                             |
| `npm run format:check` | Check formatting without writing changes (useful in CI)            |
| `npm run gen:images`   | Regenerate `public/*.png` favicons + OG image from the source SVGs |

## Before going live

A few things are intentionally left as placeholders/TODOs and should be addressed before this
goes to production for real:

1. **Form submission.** The "Start My Website" form (`src/components/StartForm.astro`) currently
   only validates and shows a client-side confirmation message — it does not send the lead
   anywhere. Wire it up to a real endpoint (a serverless function, [Formspree](https://formspree.io),
   or similar) before launch so submissions actually reach `brendanpawlak@buildmyit.com`.
2. **Domain.** `astro.config.mjs` and the SEO defaults in `BaseLayout.astro` assume the production
   site lives at `https://buildmyit.com`. Update the `site` value if that changes.
3. **OG image.** `public/og-image.svg` is the source of truth for `public/og-image.png` (used for
   social share previews). Edit the SVG and run `npm run gen:images` to regenerate the PNG.

## Deployment

This builds to a plain static `dist/` folder, so it can be deployed to any static host:

- **Netlify / Vercel / Cloudflare Pages** — connect the repo, build command `npm run build`,
  publish directory `dist`. All three auto-detect Astro.
- **GitHub Pages** — build with `npm run build` and publish the `dist/` folder (e.g. via the
  `actions/deploy-pages` action).
- **Any static file host** — run `npm run build` and upload the contents of `dist/`.

No environment variables, server runtime, or database are required — it's fully static.

## Accessibility & SEO notes

- Semantic landmarks (`header`, `nav`, `main`, `footer`), a single `<h1>`, and a logical heading
  hierarchy throughout.
- A "Skip to content" link, visible focus states on every interactive element, and the FAQ
  accordion is fully keyboard-operable with correct `aria-expanded`/`aria-controls` wiring.
- Respects `prefers-reduced-motion` for the scroll-reveal and background animations.
- Per-page `<title>`/description, canonical URL, Open Graph + Twitter card tags, and
  `ProfessionalService` JSON-LD structured data are set in `BaseLayout.astro`.
- `robots.txt` and an auto-generated `sitemap-index.xml` are included in the build output.
