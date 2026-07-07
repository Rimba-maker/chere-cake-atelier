import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rimba-maker.github.io',
  base: '/chere-cake-atelier',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
