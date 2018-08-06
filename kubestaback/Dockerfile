FROM node:8.11.3-alpine

RUN mkdir /source

#COPY node_modules /source
#COPY package.json /source

COPY . /source

WORKDIR /source

CMD ["yarn", "start"]
