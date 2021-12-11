FROM node:17.2-alpine
LABEL Description="React Backend App for Github Repo Statistics App"
WORKDIR /metalab

ENV PATH /metalab/node_modules/.bin:$PATH

COPY . /metalab


RUN yarn install -p


CMD ["yarn", "start"]
