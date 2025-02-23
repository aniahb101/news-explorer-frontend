import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/news-explorer-frontend/", // 👈 Must match your GitHub repo name exactly!
  plugins: [react()],
  server: {
    port: 3000,
  },
});
