# manjeetshinde.github.io

Personal website of Manjeet Shinde — software developer and founder of
[Procillage](https://procillage.com). Live at
<https://manjeetshinde.github.io>.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router, static export)
- [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com) 4 (CSS-first configuration in
  `src/app/globals.css` — no `tailwind.config` file)
- [TypeScript](https://www.typescriptlang.org) in strict mode
- No client components, no animation or UI libraries — server-rendered HTML
  and CSS only

## Toolchain

- **Package manager:** [Bun](https://bun.com), pinned to `bun@1.4.2` via the
  `packageManager` field. `bun.lock` is the single authoritative lockfile.
- **Runtime:** Bun (it bundles its own JavaScriptCore runtime; no separate
  Node.js install is required to develop or build this site).

## Commands

```bash
bun install              # install dependencies
bun run dev              # dev server at http://localhost:3000
bun run build            # production build → static export in out/
bun run lint             # ESLint (flat config, eslint-config-next)
bun run typecheck        # tsc --noEmit
bun run audit            # dependency security audit (bun audit)
```

## Static export & GitHub Pages

`next.config.ts` sets `output: "export"` with `trailingSlash: true`; the
production build emits plain HTML into `out/`. This repository is a GitHub
**user** site (`manjeetshinde.github.io`), which Pages serves from the domain
root — so no `basePath`/`assetPrefix` is configured and all URLs are
root-relative.

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):
Bun installs with a frozen lockfile, builds, and `actions/deploy-pages`
publishes `out/` through the GitHub Pages Actions environment.

Architectural constraints:

- Static export only — no server actions, API routes, middleware, ISR, or
  runtime data. Anything dynamic belongs client-side, and this site needs
  none of it.
- `sitemap.ts`/`robots.ts` carry `export const dynamic = "force-static"`
  (required for metadata routes under `output: "export"`).
- Images are `unoptimized` (no image optimization service on Pages); assets
  in `public/` are pre-sized for their render dimensions.

## Structure

```
src/
├── app/
│   ├── layout.tsx        # fonts, metadata, header/footer shell
│   ├── page.tsx          # home — hero, selected work, now
│   ├── work/page.tsx     # full project index
│   ├── not-found.tsx     # 404
│   ├── sitemap.ts
│   └── robots.ts
├── components/           # site-header, site-footer, work-row
└── lib/                  # site.ts (canonical URLs), projects.ts (typed data)
```

## Security notes

`package.json` `overrides` pins a few transitive lint-toolchain packages
(`brace-expansion`, `flatted`, `picomatch`, `minimatch`, `@humanfs/node`) to
patched versions; `bun audit` runs clean.
