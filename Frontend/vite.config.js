import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5000, // Replace 3001 with your desired port
  },
  plugins: [react()],
  proxy: {
    '/api':'localhost:3000'
  }
})
