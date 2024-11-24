import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteGlobPlugin from 'vite-plugin-glob'

export default defineConfig({
  plugins: [react(), ViteGlobPlugin()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
})
