import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

// Client-only Vite config for static builds (used by Vercel)
export default defineConfig({
  plugins: [tailwindcss(), react(), tsconfigPaths()],
  build: {
    outDir: 'dist/client',
    assetsDir: 'assets',
    rollupOptions: {
      input: ['./spa-index.html'],
    },
  },
});
