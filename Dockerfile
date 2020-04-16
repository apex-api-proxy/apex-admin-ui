FROM node:13.8.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install
# RUN npm install -g react-scripts@2.1.8
RUN npm install -g react-scripts@3.4.1
# RUN npm install -g serve

COPY . ./

CMD ["npm", "start"]
