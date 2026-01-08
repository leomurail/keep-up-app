import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    port: Number(process.env.APP_PORT) || 3000,
    allowedHosts: ["app.keep-up.traefik.me"],
},
})
