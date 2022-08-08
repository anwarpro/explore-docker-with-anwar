FROM node:16.15-alpine3.14
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
CMD ["yarn","start"]
EXPOSE 5000