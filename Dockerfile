FROM node:alpine 

USER node

WORKDIR /app
COPY package.json ./
RUN npm install 

COPY ./ ./

CMD ["npm","run", "production"]