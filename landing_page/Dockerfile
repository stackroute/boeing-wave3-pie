#FROM node:9.6.1 as node
#WORKDIR /usr/src
#COPY package*.json ./
#RUN npm install
#COPY . .
#RUN npm run build
#EXPOSE 4200
## Stage 2
#FROM node
#RUN npm install http-server -g
#CMD ["http-server","-p","8063", "dist/landing"]

FROM node:8.11.2-alpine as node

RUN npm install
COPY . .
# RUN npm run build

# Stage 2
FROM node
RUN npm install http-server -g
CMD ["http-server","-p","8063", "dist/landing"]
