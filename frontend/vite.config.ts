import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3200,
    host: "0.0.0.0",
    watch: {
      usePolling: true, // â† Agregar esto
    },
    proxy: {
      "/api": {
        target: "http://backend:8200",
        changeOrigin: true,
      },
    },
  },
});
