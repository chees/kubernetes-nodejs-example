FROM node:8.1.2-alpine
WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install

COPY src src/

EXPOSE 8080

CMD ["node", "src/app.js"]
