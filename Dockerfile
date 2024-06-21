# node 构建
FROM node:20-alpine as build-stage

WORKDIR /app
COPY . ./
# 设置 node 阿里镜像
RUN npm config set registry https://registry.npmmirror.com
# 设置--max-old-space-size
ENV NODE_OPTIONS=--max-old-space-size=16384
# 设置阿里镜像、pnpm、依赖、编译
RUN npm install pnpm -g && \
    pnpm install --frozen-lockfile && \
    pnpm build:docker

# node部分结束
RUN echo "🎉 编 🎉 译 🎉 成 🎉 功 🎉"
# nginx 部署
FROM nginx:1.23.3-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html/dist
COPY --from=build-stage /app/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

CMD nginx -g 'daemon off;'
RUN echo "🎉 架 🎉 设 🎉 成 🎉 功 🎉"
