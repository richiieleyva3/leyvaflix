/* eslint-disable no-unused-vars */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
/*
export default defineConfig({
  plugins: [react()],
})
  */

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: { // Configura un proxy para tu backend si lo estás usando
      '/api': {
        target: 'http://localhost:3000', // Reemplaza con la URL de tu backend
        changeOrigin: true,
        configure: (proxy, options) => {
          proxy.on('proxyRes', (proxyRes, req, res) => {
            const setCookieHeader = proxyRes.headers['set-cookie'];
            if (setCookieHeader) {
              const modifiedSetCookieHeader = setCookieHeader.map(cookie =>
                cookie.replace(/; SameSite=Lax/gi, '; SameSite=None; Secure')
              );
              proxyRes.headers['set-cookie'] = modifiedSetCookieHeader;
            }
          });
        },
      },
    },
  },
});