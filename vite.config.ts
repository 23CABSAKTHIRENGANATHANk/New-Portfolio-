import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

const isVercel = process.env.VERCEL;

export default defineConfig({
  plugins: [
    !isVercel && cloudflare({ viteEnvironment: { name: "ssr" } }),
    tanstackStart({
      prerender: {
        routes: ['/'],
        crawlLinks: false,
        enabled: true,
      }
    }),
    tailwindcss(),
    react(),
    tsconfigPaths(),
  ],
});
