# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server (Next.js)
pnpm build      # Production build
pnpm lint       # ESLint via next lint
vercel --prod   # Deploy to production
```

> **Deployment note:** If Vercel errors with "Git author must have access to the team", temporarily remove the `.git` folder before running `vercel --prod`.

## Architecture

This is a **Next.js 14 App Router** site (TypeScript + Tailwind CSS) serving as the marketing/landing site for AnyFikra's mobile apps.

### Routing pattern

Each app gets its own directory under `app/` — currently `delulu-jar/`, `ducky-bank/`, `genie-laugh/`, and `storage-squeeze/`. The root `app/page.tsx` is the main homepage listing all apps.

### Subdomain routing via middleware

[middleware.ts](middleware.ts) rewrites subdomain requests to the matching app route. For example, `delulu-jar.anyfikra.com/*` is internally rewritten to `/delulu-jar/*`. Any new app with subdomain access needs a rule added here.

### Page structure

Every app page follows the same pattern:
- `"use client"` with a `mounted` state for CSS-based entrance animations (opacity + translateY on mount)
- Fixed-position blurred gradient orbs for background atmosphere
- Sections: header with back-nav → hero → features grid → CTA (App Store link) → footer
- Inline `style={{ fontFamily: "'Syne', sans-serif" }}` for display headings (Syne is loaded via Google Fonts CDN, not via `next/font`)

### Styling conventions

- Dark theme only: `bg-neutral-900` base, `text-neutral-50/300/400` text hierarchy
- Tailwind utility classes throughout; no CSS modules or styled-components
- Per-app accent color (rose = DeluluJar, amber = DuckyBank, cyan = Genie Laugh)
- Hover states use `group` + `group-hover:` pattern on card wrappers
- Transition durations use `duration-400` (custom) and `duration-300`/`duration-700`

### Static assets

App icons live in `static/` (not `public/`). They are referenced as `/static/<filename>` in `<img>` tags. The `public/` folder contains only `app-ads.txt` (AdMob verification).

### AdSense

The Google AdSense script is loaded globally in [app/layout.tsx](app/layout.tsx) via `next/script` with the publisher ID `ca-pub-2578516293530627`.
