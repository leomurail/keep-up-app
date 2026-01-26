import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), tailwindcss()],
    envPrefix: ['VITE_', 'APP_'],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      host: true,
      port: Number(env.APP_PORT) || 3000,
      allowedHosts: [env.APP_DOMAIN || ""],
    },
  }
})
