FROM node:lts-alpine
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --only=prod
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

ENV PORT1 3001 
ENV PORT2 3002

EXPOSE $PORT1 
EXPOSE $PORT2

CMD [ "node", "server.js" ]
