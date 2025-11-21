import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/FutureTech',
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
      '@': path.resolve(__dirname, './'),
    },
  },
})
