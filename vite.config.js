import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        portfolio: resolve(process.cwd(), "index.html"),
        jessicaEgypt: resolve(
          process.cwd(),
          "projekty/jessica-egypt/index.html"
        ),
      },
    },
  },
});