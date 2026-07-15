# Kyoto Region

Premium esports organization website — Japanese minimalism meets competitive brand craft. Built as a client-validation prototype with polished demo content.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lenis smooth scroll
- Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm start` — serve production build
- `npm run lint` — ESLint

## Routes

| Path | Page |
|------|------|
| `/` | Home — cinematic hero, stats, achievements, news |
| `/about` | Mission, vision, timeline |
| `/results` | Tournaments & trophies |
| `/roster` | Player cards |
| `/roster/[slug]` | Player profiles |
| `/staff` | Org staff by department |
| `/recruitment` | Application hub |
| `/community` | Discord & fan engagement |
| `/events` | Match / tournament schedule |
| `/news` | Blog + filters |
| `/news/[slug]` | Article |
| `/partners` | Sponsors / partners / affiliates |
| `/contact` | Channels + form (prototype) |

## Content

Demo data lives in `src/data/`. Swap modules when real roster, results, and assets arrive — UI stays intact.

## Design tokens

- Background `#050505`
- Surface `#111111`
- Accent `#FF4F8B` / deep `#D81B60`
- Display: Space Grotesk · Body: Geist
