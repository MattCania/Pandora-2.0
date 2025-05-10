import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 1137,
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  plugins: [react(), tailwindcss()],
});
