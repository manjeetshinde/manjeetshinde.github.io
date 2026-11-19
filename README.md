# Manjeet Shinde

A static portfolio for [manjeetshinde.github.io](https://manjeetshinde.github.io).

## Develop

Use Node.js 24.

```sh
npm ci
npm run dev
```

Edit `src/lib/projects.ts` to update the work index and the featured projects.

## Build and publish

```sh
npm audit --audit-level=high
npm run build
python3 -m http.server 4173 --directory out
```

Open `http://localhost:4173` to preview the exported HTML. The GitHub Pages
workflow builds on pull requests and publishes `out/` from `main` after the
repository’s Pages source is set to GitHub Actions.

Instrument Serif is bundled under the [SIL Open Font License](public/fonts/OFL.txt).
