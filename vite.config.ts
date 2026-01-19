
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // 防止浏览器中因找不到 process.env 而报错
    'process.env': {} 
  }
});
