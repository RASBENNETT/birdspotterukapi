# FROM node:12.2.0-alpine 
FROM node:latest

WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install
RUN npm build
RUN npm rebuild bcrypt --build-from-source

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]