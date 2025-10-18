import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Generate sourcemaps for better debugging in production
    sourcemap: true,
    // Optimize chunks
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    // Minify for smaller bundle size
    minify: 'terser',
    // Set target for better browser compatibility
    target: 'es2015',
  },
  // Base URL for deployment (adjust if deploying to subdirectory)
  base: '/',
  // Enable CSS code splitting
  css: {
    devSourcemap: true,
  },
  // Preview server configuration
  preview: {
    port: 4173,
    host: true,
  },
  // Development server configuration
  server: {
    port: 5173,
    host: true,
  },
})
