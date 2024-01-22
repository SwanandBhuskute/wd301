import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import env from '@vitejs/plugin-env';

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), env()],
  server: {
    proxy: {
      '/api': {
        target: 'https://wd301-api.pupilfirst.school',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      // "/api": "http://localhost:5173",
    },
  },
  plugins: [react()],
})
