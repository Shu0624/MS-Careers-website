import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        battleplan: resolve(__dirname, 'battleplan.html'),
        universities: resolve(__dirname, 'universities.html'),
        scholarships: resolve(__dirname, 'scholarships.html'),
        finance: resolve(__dirname, 'finance.html'),
        application: resolve(__dirname, 'application.html'),
      },
    },
  },
})
