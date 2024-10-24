import { HstVue } from '@histoire/plugin-vue'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('uds-'),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        quietDeps: true,
        silenceDeprecations: ['import'],
      },
    },
  },
  build: {
    minify: false, // Disable minification
    rollupOptions: {
      output: {
        entryFileNames: '[name].js', // No hash for JS files
        chunkFileNames: '[name].js', // No hash for chunk files
        assetFileNames: '[name].[ext]', // No hash for CSS and other assets
      },
    },
  },
  histoire: {
    plugins: [HstVue()],
    setupFile: './src/histoire.setup.ts',
  },
})
