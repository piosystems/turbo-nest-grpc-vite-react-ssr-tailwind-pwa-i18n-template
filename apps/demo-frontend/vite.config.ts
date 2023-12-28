import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src/custom-sw',
      filename: 'my-sw.ts'
    })
  ],
  server: {
    proxy: {
      '/v1': {
        target: 'http://localhost:3000',
        changeOrigin: true
      },
      '/v2': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
})

