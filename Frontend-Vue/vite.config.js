import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  root: "./",
  server: {
    open: "/pages/index.html",
  },
  plugins: [vue()],
});
