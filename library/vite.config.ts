import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'index.ts',
      name: 'vue3-responsive-menu',
      fileName: (format) => `vue3-responsive-menu.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        assetFileNames: 'vue3-responsive-menu.[ext]',
      },
    },
    sourcemap: true,
    outDir: '../lib',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url))
    }
  }
})
