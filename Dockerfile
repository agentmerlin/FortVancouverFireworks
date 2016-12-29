FROM node:4-onbuild

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app/

# Install dependencies
RUN npm install

EXPOSE 8200
CMD ["node", "server.js"]
