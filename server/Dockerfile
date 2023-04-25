FROM node:19-alpine
RUN npm install -g nodemon concurrently
WORKDIR /usr/src/app
COPY ./package.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "run", "dev"]