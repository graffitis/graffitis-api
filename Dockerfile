FROM node:13-alpine
RUN mkdir -p /home/node/graffitis/node_modules && chown -R node:node /home/node/graffitis
WORKDIR /home/node/graffitis
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 5000
CMD [ "npm", "run", "start:production" ]