import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    hmr: {
      overlay: false, // 에러 오버레이 비활성화로 성능 향상
    },
    host: true, // 네트워크 접근 허용
    port: 3000,
    watch: {
      usePolling: false, // 파일 시스템 이벤트 사용 (더 빠름)
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@vapor-ui/core',
      '@vapor-ui/icons',
      'swiper',
    ],
  },
  build: {
    sourcemap: false, // 개발 시에는 소스맵 비활성화
  },
});
