FROM node:16

ARG NPM_TOKEN

WORKDIR /usr/src/app

COPY .npmrc.dist .npmrc

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run clean
RUN npm run build

CMD ["/bin/bash"]