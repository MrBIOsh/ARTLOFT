import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html'
import autoprefixer from 'autoprefixer';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/varibles.scss";`
      }
    },
    postcss: {
      plugins: [
        autoprefixer({})
      ]
    }
  },
  server: {
    open: './index.html',
    port: 3000,
  },
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      /**
       * After writing entry here, you will not need to add script tags in `index.html`, the original tags need to be deleted
       * @default src/main.ts
       */
      entry: 'src/main.jsx',
      /**
       * If you want to store `index.html` in the specified folder, you can modify it, otherwise no configuration is required
       * @default index.html
       */
      template: 'index.html',

      /**
       * Data that needs to be injected into the index.html ejs template
       */
      inject: {
        data: {
          title: 'index',
          injectScript: `<script src="./inject.js"></script>`,
        },
        tags: [
          {
            injectTo: 'body-prepend',
            tag: 'div',
            attrs: {
              id: 'tag',
            },
          },
        ],
      },
    }),
  ],
  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        assetFileNames: ({name}) => {
          let outputDir = null;
          let ext = name.substring(name.lastIndexOf(".") + 1);
          if (['woff2','woff','ttf'].includes(ext)) {
            outputDir = "fonts";
          } else if (['jpg','jpeg','png','gif','webp','svg', 'ico'].includes(ext)) {
            outputDir = "img";
          } else if ('css'.includes(ext)) {
            outputDir = "css"
          }

          return `assets/${outputDir}/[name]-[hash].[ext]`;
        },
        entryFileNames: "js/[name]-[hash].js",
      }
    }
  },
})
