import { defineConfig } from 'vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        appPrivacy: resolve(__dirname, 'appprivacypolicy.html'),
        personalInfoList: resolve(__dirname, 'info.html'),
        sdkList: resolve(__dirname, 'sanfang.html'),
        terms: resolve(__dirname, 'termsofservice.html'),
        privacy: resolve(__dirname, 'privacypolicy.html'),
      },
    },
  },
});
