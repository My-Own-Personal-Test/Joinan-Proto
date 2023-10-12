import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ['./src/components/*/**'],
      dts: true,
    }),
    AutoImport({
      dts: true,
      dirs: [
        './src/composables/*/**',
        './src/lib',
        './src/stores/*/**',
      ],
      imports: [
        'vue',
        'vue-router',
        'pinia',
        '@vueuse/core',
      ],
      vueTemplate: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
