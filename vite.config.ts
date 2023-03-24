import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import UnoCSS from 'unocss/vite';
import { presetAttributify, presetUno, presetIcons } from 'unocss';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      // {
      //   find: 'vue-i18n',
      //   replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
      // },
      // /@/xxxx => src/xxxx
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/',
      },
      // /#/xxxx => types/xxxx
      {
        find: /\/#\//,
        replacement: pathResolve('types') + '/',
      },
    ],
  },
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS({
      presets: [
        presetAttributify({
          /* preset options */
        }),
        presetUno(),
        // ...custom presets
        presetIcons(),
      ],
    }),
  ],
  // 添加库模式配置
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'ScrappyUI',
      fileName: 'scrappy-ui',
      // 导出模块格式
      formats: ['es', 'umd', 'iife'],
    },
  },
});
