# ----------------------
# 1단계: Build Stage
# ----------------------
FROM node:20-alpine AS builder

# pnpm 설치
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app
# 종속성 설치 (캐시 최적화)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 소스 복사 및 빌드
COPY . .
RUN pnpm build


# ----------------------
# 2단계: Production Stage
# ----------------------
FROM nginx:stable-alpine AS runner

# nginx 기본 설정 제거
RUN rm /etc/nginx/conf.d/default.conf

COPY default.conf /etc/nginx/conf.d/default.conf

# 빌드 결과물 복사
COPY --from=builder /app/dist /usr/share/nginx/html

# 컨테이너가 80포트 노출
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
