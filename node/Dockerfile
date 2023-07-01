FROM node:18


#COPY . /usr/src/app
WORKDIR /usr/src/app

# Install the application's dependencies.
COPY package*.json ./


#RUN apt-get -y update
#COPY package-lock.json ./
RUN npm install
#RUN npm install express
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]