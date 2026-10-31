# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server (localhost:3000)
pnpm build      # Production build (stop `pnpm dev` first: both write to .next)
pnpm lint       # ESLint via next lint (not configured yet: it prompts for setup)
```

Deploy: `vercel --prod` (temporarily remove `.git/` folder if you hit a team access error — see README).

## Architecture

This is a **Next.js 14 App Router** site for AnyFikra, a one-person studio ("fikra" is Moroccan Darija for "idea"). The homepage is a bento grid of every project, and each project has its own page here. Everything is a server component except `Logo`, `ThemeToggle` and `TrackedLink`.

### Projects data

`lib/projects.ts` is the single source of truth. `PROJECTS` drives the homepage bento (order = display order). Each project's `tile` sets its size (`full`, `half` or `third` of a row): keep the rows adding up to 6 columns, in order, so the grid has no holes. Each project's `details` object fills its page at `app/<slug>/page.tsx`, which renders `<ProjectPage slug="..." backdrop={...} />`. Every project page has the same layout (icon, name and subtitle, links, Description, Built with, Screenshots); only the backdrop behind the top differs, and it comes from `components/backdrops/`. Keep the layout shared and put anything unique in the backdrop.

Pages: `bourseiq`, `keepen`, `macinroid`, `react-native-here-explore`, `delulu-jar`, `ducky-bank` (plus `ducky-bank/privacy` and `ducky-bank/contact`). `app/about/page.tsx` is the about page, linked from the word "my" in the homepage hero. DeluluJar's legal pages live on delulujar.com; `next.config.js` and `middleware.ts` redirect the old paths there.

`middleware.ts` rewrites subdomain requests (e.g. `ducky-bank.anyfikra.com`) to the matching route prefix. Paths that already carry the prefix, `/static/*` and the root metadata files (`/icon.svg`, `/apple-icon.png`, `/opengraph-image`) are left alone.

### Components

| Component | Purpose |
|---|---|
| `Logo` | Client component. `Mark` (the bulb logo, `currentColor` outline; it brightens as the mouse gets near) and `Wordmark` ("anyfikra" with a diamond tittle) |
| `SiteHeader` / `SiteFooter` | Shared on every page |
| `ProjectTile` | One homepage bento tile. Portrait shots sit at the tile's bottom edge and are cut off by it; projects with `landscapeShots` show two overlapping windows instead. `full` tiles put the text beside the shots and add the `summary` |
| `ProjectPage` | A project's page: the shared layout around its `backdrop`. `details.tech` lists the released version's stack only. `details.darkScreenshots`, when present, swap in with the theme via `.only-light` / `.only-dark` |
| `TechIcon` | Icon for a name in `details.tech`: a `simple-icons` logo, or a `lucide-react` glyph when there's no logo. A new technology needs an entry here |
| `backdrops/*` | One touch per project: `PriceLine`, `Ocean`, `MacDesktop`, `RouteDemo` (the map and its transport buttons), `NoteJar`, `DuckWave`. Styled in `backdrops/backdrops.css`, where colors use `light-dark()` and each project sets its section title color (`--title`, `--title-band`) |
| `DocPage` | Long-form layout (privacy policies, support/FAQ) with numbered sections and a sticky table of contents. `DocSummary` is its highlighted summary card |
| `ProjectIcon` | Rounded app icon |
| `ProjectLinkAnchor` | Outbound project link, labelled by kind ("Website", "App Store"...); store and website clicks send a GA `store_click` event (`store`: ios / android / web) |
| `TrackedLink` | Client component: an `<a>` that sends a GA event on click |

### Design system

- **Colors** ("chalk & saffron": neutral white/ink, one saffron accent, no warm or brown tints) are CSS variables in `app/globals.css`, exposed as Tailwind colors: `canvas` (page), `raised` (cards), `ink` (text), `mute` (secondary text), `rule` (hairlines), `spark` (saffron accent), `coal` (always-dark text for spark backgrounds). Theme is light / dark / system: `ThemeToggle` (footer) sets `data-theme` on `<html>` and saves it in `localStorage`; with no attribute, `prefers-color-scheme` decides. `THEME_SCRIPT` (`lib/theme.ts`, inlined in the layout's `<head>`) applies a saved choice before first paint. Dark token values live in `globals.css` twice (media query and `[data-theme="dark"]`); keep them in sync. Don't add `dark:` variants, adjust the variables instead. Saffron is too pale for text on white, so never use `text-spark` in light mode.
- **Fonts** (`next/font` in `app/layout.tsx`): Fraunces (`font-display`) for headings, Hanken Grotesk (`font-sans`) for body, JetBrains Mono (`font-mono`) for metadata labels, Reem Kufi (`font-kufi`) for Arabic, Caveat (`--font-hand`) only for DeluluJar's notes. `.font-display` is always semibold at full softness with slightly tight tracking (base rule in `globals.css`); large headlines add `tracking-[-0.035em]`. Emphasise display text with a real `<em>` italic, optionally `.marker`.
- **Utilities** in `globals.css`: `.wrap` (page container), `.marker` (key word of a headline: a highlighter band in light mode, saffron text in dark; tuned to Fraunces), `.link` (underline that turns spark on hover), `.doc` (prose styles for `DocPage` content), `.bulb-glass` / `.bulb-halo` (logo glow, driven by the `--glow` variable `Mark` sets), `.tile` / `.tile-warm` (a bento tile's wash of its `--accent`; warm accents are muted in dark mode so they don't turn brown), `.tile-title` (a tile's title on hover: a band of its `--accent`, or a solid bar under the word in dark mode).
- **Motion**: `motion-safe:animate-rise` for entrances; stagger with `motion-safe:[animation-delay:…]`.
- Horizontal rules go on an element inside `.wrap`, not on the `.wrap` element itself, so they align with the content edge.

### Brand assets

- Logo: a light bulb, a fikra switching on. Source of truth is `components/Logo.tsx`. The static copies (`app/icon.svg`, `app/apple-icon.png`, `app/opengraph-image.tsx`) show the bulb lit, and repeat the path, so change them together.
- `app/icon.svg` (favicon), `app/apple-icon.png` (180px, full-bleed) and `app/opengraph-image.tsx` (share image, renders with the static `assets/fonts/Fraunces-SemiBold*.woff` files, at optical size 144 and full softness) use Next's metadata file conventions.

### Static assets

Served from `/static/` (Next's deprecated `static/` dir, still working). Index icons are 256px copies in `static/icons/<slug>.png|svg`; the full-size originals `static/icon-*.png` are kept. Screenshots are `static/<slug>/01–04.webp` (BourseIQ's folder is `bourse-iq`); Macinroid's are `browse.webp` and `transfer.webp`, with transparent corners.

### Adding a new project

1. Add an entry to `PROJECTS` in `lib/projects.ts` (with its `accent`, `tile` and `shots`), a 256px icon to `static/icons/` and screenshots to `static/<slug>/`.
2. Fill in `details` (including `screenshotAlts`, one description per screenshot, and `screenshotSize` in pixels; homepage tiles use `alt=""` because the title link already names them), add any new technologies to `TechIcon`, give it a backdrop and title colors in `components/backdrops/`, create `app/<slug>/page.tsx` rendering `ProjectPage`, and add a subdomain rewrite to `middleware.ts` if it gets one.

### Analytics

Google Analytics loads only when `NEXT_PUBLIC_GA_ID` is set (Vercel Production env only).
