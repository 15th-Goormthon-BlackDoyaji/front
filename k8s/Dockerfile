# 1단계: 빌드
FROM node:20.19 as build

WORKDIR /app

# 패키지 설치
COPY package*.json ./
RUN npm install

# 소스 복사 후 빌드
COPY . .
RUN npm run build

## 2단계: Nginx를 이용해 정적 파일 서빙
#FROM nginx:alpine
#
## Nginx 설정 덮어쓰기 (필요 시)
##COPY nginx.conf /etc/nginx/nginx.conf
#
## React Vite 빌드 결과물 복사
#COPY --from=build /app/dist /usr/share/nginx/html
#
## Kubernetes에서 외부로 노출할 포트
EXPOSE 3000
#
## Nginx 포그라운드 실행
#CMD ["nginx", "-g", "daemon off;"]
