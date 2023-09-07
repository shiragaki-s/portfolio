import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@/", replacement: `${__dirname}/src/` }],
  },
  test: {
    globals: true,
    exclude: [...configDefaults.exclude, "**/tests/**"],
  },
});
