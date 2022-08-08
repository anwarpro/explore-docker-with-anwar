FROM node:16.15-alpine3.14
RUN mkdir -p ~/app
WORKDIR ~/app
RUN adduser -S app
COPY ./ .
RUN yarn install
RUN yarn add pm2
RUN chown -R app ~/app
USER app
EXPOSE 3000
CMD ["yarn","pm2"]