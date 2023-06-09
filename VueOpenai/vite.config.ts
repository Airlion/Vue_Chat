import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router']
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ]
  ,
  server: {
    // proxy: {
    //   '/api': 'http://testapi.xuexiluxian.cn'
    // }
  },
  define: {
    'process.env': {},
  },
  resolve: {
    //配置路径别名
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})