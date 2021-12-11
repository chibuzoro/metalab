FROM node:16.13-alpine
LABEL Description="React Frontend App for Github Repo Statistics App"
WORKDIR /metalab

ENV PATH /metalab/node_modules/.bin:$PATH

COPY . /metalab


RUN yarn install -p

CMD ["yarn", "start"]
