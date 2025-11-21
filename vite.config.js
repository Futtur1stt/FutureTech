import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  base: '/FutureTech/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        news: './news.html',
        blog: './blog.html',
        podcasts: './podcasts.html',
        resources: './resources.html',
        contact: './contact.html',
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
})
