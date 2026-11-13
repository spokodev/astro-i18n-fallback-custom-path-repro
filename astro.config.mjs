import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', { path: 'french', codes: ['fr', 'fr-CA'] }],
    fallback: { es: 'french' },
  },
});
