FROM node:24

WORKDIR /frontend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3200

CMD ["npm", "run", "dev"]