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

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

EXPOSE 3000

CMD ["node", "index.js"]