FROM node:14.17.0-alpine

WORKDIR /app

ADD package*.json ./

RUN npm install
COPY index.js ./
CMD [ "node", "index.js"]