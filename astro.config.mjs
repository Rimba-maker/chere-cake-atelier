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
    plugins: [tailwindcss()],
  },
});
