import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// base is only prefixed in GitHub Actions builds, so localhost keeps serving at "/"
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://rimba-maker.github.io',
  base: isGithubActions ? '/chere-cake-atelier' : '/',
  integrations: [react()],
  vite: {
    // Production prebundles from check/build must not replace React's dev runtime.
    cacheDir: process.argv.includes('dev')
      ? 'node_modules/.vite-development'
      : 'node_modules/.vite-production',
    plugins: [tailwindcss()],
  },
});
