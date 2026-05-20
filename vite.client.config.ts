import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// Client-only Vite config for static builds (legacy/optional; not used by the current Vercel build)
export default defineConfig({
  plugins: [TanStackRouterVite(), tailwindcss(), react(), tsconfigPaths()],
  build: {
    outDir: 'dist/client',
    assetsDir: 'assets',
    rollupOptions: {
      input: ['./index.html'],
    },
  },
});
