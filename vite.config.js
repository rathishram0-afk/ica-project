import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite Configuration for International Cube Academy (ICA) Prototype
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3005,
    strictPort: false,
    host: true,
    open: false
  }
})
