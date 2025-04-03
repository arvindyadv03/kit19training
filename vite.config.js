import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Optional, set your preferred port
  },
  build: {
    outDir: 'dist',
  },
  base: '/', // Ensure the base path is correct
});
