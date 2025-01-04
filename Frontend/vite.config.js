import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // server: {
  //   port: 5000, // Replace 3001 with your desired port
  // },
  plugins: [react()],
  server: {
    proxy: {
        '/api': {
            target: 'http://localhost:5000',
            changeOrigin: true,
        },
    },
  }
})
