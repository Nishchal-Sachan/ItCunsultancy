import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or your framework plugin

export default defineConfig({
  root: 'client', // 👈 Tells Vite to start from /client
  plugins: [react()],
  build: {
    outDir: '../dist', // ⬅️ Optional: places built files in root-level /dist
    emptyOutDir: true
  },
  preview: {
    port: 4173,
    open: true
  }
})
