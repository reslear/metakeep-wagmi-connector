import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { resolve } from 'node:path'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    }),
    nodePolyfills(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@reslear/metakeep-wagmi-connector': resolve('../src/index.ts'),
      metakeep: resolve('../node_modules/metakeep/lib/index.js'),
    },
  },
})
