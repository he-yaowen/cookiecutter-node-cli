ARG NODE_VERSION
FROM node:$NODE_VERSION

WORKDIR /app-build

ADD ./src ./src
ADD package* .
ADD tsconfig.json .

RUN npm install
RUN npm run build
RUN npm prune --omit=dev

ENTRYPOINT ["node", "dist/src/main.js"]
