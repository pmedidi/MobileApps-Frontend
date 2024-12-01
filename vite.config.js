import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteGlobPlugin from 'vite-plugin-glob';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    ViteGlobPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        short_name: 'MyApp',
        name: 'My Progressive Web App',
        icons: [
          {
            src: '/android-chrome-512x512.png', // Replace with the actual path to your icon
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png', // Replace with the actual path to your icon
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        start_url: '/',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
      },
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
