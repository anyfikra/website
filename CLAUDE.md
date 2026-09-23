# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server (localhost:3000)
pnpm build      # Production build
pnpm lint       # ESLint via next lint
```

Deploy: `vercel --prod` (temporarily remove `.git/` folder if you hit a team access error — see README).

## Architecture

This is a **Next.js 14 App Router** site for AnyFikra, an indie app studio. It serves as the marketing website for multiple mobile apps, each with its own sub-section.

### Routing

Each app gets a route group under `app/`:
- `app/[app-name]/page.tsx` — main landing page
- `app/[app-name]/privacy/page.tsx` — privacy policy
- `app/[app-name]/contact/page.tsx` — contact/support page

Current apps: `delulu-jar`, `ducky-bank`

The `middleware.ts` rewrites subdomain requests (e.g. `ducky-bank.anyfikra.com`) to the corresponding route prefix, so subdomain and path-based routing both work.

### Shared Components

All reusable UI lives in `components/`:

| Component | Purpose |
|---|---|
| `PageShell` | Dark bg layout with configurable gradient "orbs" (decorative blur circles) |
| `AppFooter` | Footer with Privacy Policy + Contact links; accepts accent color class |
| `StoreButton` | App Store / Google Play badge using `simple-icons` SVG paths |
| `SectionDivider` | Titled divider with accent color variant |
| `FeatureCard` | Icon + title + description card with accent border |
| `FeatureCheckItem` | Checkmark list item with colored check |
| `HowItWorksStep` | Numbered step card for "how it works" sections |
| `BackHeader` | Back navigation header for sub-pages |

### Per-App Page Pattern

Each app landing page follows the same structure:
1. Define `ORBS` array (color/size/position config for `PageShell`)
2. Define data arrays (`HOW_IT_WORKS`, `FEATURES`, etc.) as constants at module level
3. Render with `PageShell` → hero section → feature grid → how-it-works → `AppFooter`

Each app has its own accent color (rose = DeluluJar, amber = DuckyBank). Pass this color through `accentColor` props on components and `accentHoverClass` on `AppFooter`.

### Styling

- **Tailwind CSS** with a dark theme — `bg-neutral-900` base, `neutral-50/100` text
- Custom font: **Syne** (`font-syne`) for headings/labels; Inter for body
- Custom animations in `tailwind.config.ts`: `animate-slide-up`, `animate-slide-up-delay`, `animate-slide-up-delay-2`, `animate-fade-in`
- The home page (`app/page.tsx`) uses `"use client"` with `useState`/`useEffect` for mount animations — app sub-pages are server components

### Static Assets

App icons live in `/static/` (served directly): `icon-delulu-jar.png`, `icon-ducky-bank.png`. Reference them as `/static/filename.png`.

### Adding a New App

1. Create `app/[app-name]/page.tsx`, `privacy/page.tsx`, `contact/page.tsx`
2. Add icon to `static/`
3. Add subdomain rewrite to `middleware.ts`
4. Add card to the homepage `app/page.tsx` "Current Projects" grid
