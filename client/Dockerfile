FROM node:16.13-alpine
LABEL Description="React Frontend App for Github Repo Statistics App"
WORKDIR /metalab

ENV PATH /metalab/node_modules/.bin:$PATH

COPY package.json /metalab
COPY yarn.lock /metalab


RUN yarn install -p

COPY src /metalab/src
COPY public /metalab/public

CMD ["yarn", "build"]
