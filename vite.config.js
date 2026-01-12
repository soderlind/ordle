import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    preact(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'logo.png', 'og.jpg', 'twitter.jpg'],
      manifest: {
        name: 'Ordle 🇳🇴',
        short_name: 'Ordle',
        start_url: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#121212',
        theme_color: '#4caf50',
        icons: [
          {
            src: '/logo.png',
            type: 'image/png',
            sizes: '512x512',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,json}'],
      },
    }),
  ],
  build: {
    outDir: 'build',
  },
});
