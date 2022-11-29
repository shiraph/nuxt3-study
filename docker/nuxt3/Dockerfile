FROM node:16-slim

ENV TZ Asia/Tokyo

WORKDIR /app

RUN apk update && \
  apk upgrade && \
  apk add git && \
  npm install -g npm@latest nuxi nuxt3