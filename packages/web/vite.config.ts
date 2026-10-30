import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import assetOptimizerPlugin from "./vite/__plugins/asset-optimizer-plugin";

const webDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    // All env files live at the repo root — keep Vite's own env loading there too,
    // so packages/web/.env* files can never shadow the root .env.
    plugins: [
      react(),
      tailwind(),
      assetOptimizerPlugin(),
    ],
    build: {
      rollupOptions: {
        input: {
          main: resolve(webDir, "index.html"),
          farmacologiaEsporte: resolve(webDir, "farmacologia-no-esporte.html"),
          portaria344: resolve(webDir, "portaria-344-98.html"),
          mentoriaSantaLuziaLagoaSanta: resolve(webDir, "mentoria-santa-luzia-lagoa-santa.html"),
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(webDir, "./src/web"),
      },
    },
    server: {
      port: 4200,
      strictPort: true,
      allowedHosts: true,
      hmr: { overlay: false },
    },
});
