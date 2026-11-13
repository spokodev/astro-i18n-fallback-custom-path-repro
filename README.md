# Astro i18n: fallback to a locale with a custom path

```sh
npm ci
npm run build
```

The build fails while rendering `/es/about` with `i18nNoLocaleFoundInPath`.

`astro.config.mjs` falls back from `es` to the locale `{ path: 'french', codes: ['fr', 'fr-CA'] }`.
With `fallback: { es: 'en' }` the build succeeds and `/es/about/` redirects to `/about/`.
