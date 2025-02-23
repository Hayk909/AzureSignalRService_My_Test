import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@types': path.resolve(__dirname, 'src/types'),
      // You may add you aliases if need
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/scss/mixins" as *;
          @use "@/assets/scss/variables" as *;
          @use "sass:color";
        `,
      },
    },
  },
  server: {
    port: 5000,
  },
});
