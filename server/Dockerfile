FROM node:19-alpine

RUN npm install -g nodemon concurrently

WORKDIR /usr/src/app

COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 5000

# Use script specified in package,json
CMD ["npm", "run", "dev"]