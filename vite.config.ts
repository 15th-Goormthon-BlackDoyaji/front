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
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // React 관련 라이브러리 분리
          'react-vendor': ['react', 'react-dom'],
          // 라우터 분리
          router: ['react-router-dom'],
          // UI 라이브러리 분리
          'vapor-ui': ['@vapor-ui/core', '@vapor-ui/icons'],
          // Swiper 분리
          swiper: ['swiper'],
          // 기타 라이브러리
          vendor: ['@tanstack/react-query', 'zustand'],
        },
      },
    },
    // 청크 크기 경고 임계값 조정
    chunkSizeWarningLimit: 600,
    // 압축 최적화
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // console.log 제거
        drop_debugger: true, // debugger 제거
      },
    },
  },
});
