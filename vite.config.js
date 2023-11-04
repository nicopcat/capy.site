import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer';
import  { autoComplete, Plugin as importToCDN } from 'vite-plugin-cdn-import'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), visualizer(),
    importToCDN({
      prodUrl: `/cdn/{path}`,
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: 'vue/dist/vue.global.prod.js'
      },
      {
          name: 'element-plus',
          var: 'ElementPlus',
          path: `element-plus/dist/index.full.min.js`,
          css: 'element-plus/dist/index.css'
      },
      {
          name: '@smallwei/avue',
          var: 'AVUE',
          path: 'avue/lib/avue.min.js'
      },
        {
          name:"avue-form-design-3",
          var:"AvueFormDesign",
          path:"avue-form-design-3/lib/index.umd.js"
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
    port: 8080,
  }
})
