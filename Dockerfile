FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 4000

CMD node, app.js
ENTRYPOINT entrypoint.sh