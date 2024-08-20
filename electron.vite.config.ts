import { resolve } from 'path';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        // '@renderer': resolve(__dirname, './src/renderer/src'),
        '@components': resolve(__dirname, './src/renderer/src/components'),
        '@utils': resolve(__dirname, './src/renderer/src/utils'),
        '@contexts': resolve(__dirname, './src/renderer/src/contexts'),
        '@hooks': resolve(__dirname, './src/renderer/src/hooks')
      }
    },
    plugins: [react()]
  }
});
