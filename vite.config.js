import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer';
import  { autoComplete, Plugin as importToCDN } from 'vite-plugin-cdn-import'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), visualizer(),
    importToCDN({
      prodUrl: `/{path}`,
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: 'https://cdn.jsdelivr.net/npm/vue@3.2.25/dist/vue.global.prod.js'
      },
      {
          name: 'element-plus',
          var: 'ElementPlus',
          path: `https://unpkg.com/element-plus@2.2.30/dist/index.full.js`,
          css: 'https://unpkg.com/element-plus/dist/index.css'
      },
      {
          name: '@smallwei/avue',
          var: 'AVUE',
          path: 'https://cdn.jsdelivr.net/npm/@smallwei/avue@3.2.20'
      },
        {
          name:"avue-form-design-3",
          var:"AvueFormDesign",
          path:"cdn/avue-form-design-3/lib/index.umd.js"
        },
      ]
  }),
  ],
  base:'./',
  resolve: {
    alias: {
    // 关键代码
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
  }
})
