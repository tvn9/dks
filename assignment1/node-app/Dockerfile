FROM node

WORKDIR /usr/app 

COPY package*.json ./

RUN  npm install 

COPY . . 

EXPOSE 3000

# Run command after image created
CMD ["node", "server.js"]