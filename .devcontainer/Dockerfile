# 使用官方 Node.js 镜像
FROM node:16

# 设置工作目录
WORKDIR /workspace

# 安装全局依赖（可选）
RUN npm install -g eslint @vitejs/plugin-vue

# 复制项目文件到容器中
COPY . .

# 暴露 Vite 开发服务器端口
EXPOSE 5173

# 设置默认命令
CMD ["npm", "run", "dev"]
