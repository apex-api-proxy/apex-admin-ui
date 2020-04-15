FROM node:13.12.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@2.1.8 -g 
RUN npm install -g serve

COPY . ./

CMD ["npm", "start"]