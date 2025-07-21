import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: 'client', // Your app is in the client folder
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'), // 👈 Fix the alias
    },
  },
  plugins: [react()],
  build: {
    outDir: '../dist', // Output to root-level dist
    emptyOutDir: true,
  },
  preview: {
    port: 4173,
    open: true,
  },
})
