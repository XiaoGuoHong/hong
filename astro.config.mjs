// @ts-check
import { defineConfig } from 'astro/config';

// Deployed at the domain root (Cloudflare Pages, or GitHub Pages on a user
// site / custom domain). For a GitHub *project* site, set:
//   site: 'https://<user>.github.io',
//   base: '/hong',
// Internal links already go through import.meta.env.BASE_URL.
const site = process.env.SITE || undefined;

export default defineConfig({
  ...(site ? { site } : {}),
  compressHTML: true,
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: 'light',
    },
  },
});
