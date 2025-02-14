import path from 'path';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from "vite-plugin-singlefile";
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
