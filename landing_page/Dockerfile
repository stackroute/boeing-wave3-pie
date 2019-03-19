#Stage 1
FROM node:8.11.2-alpine as node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install ngx-file-drop
RUN npm install angular-bootstrap-md --save
RUN npm install rxjs-compat
RUN npm install api-ai-javascript
RUN npm install stompjs
RUN npm install sockjs
RUN npm install jquery
RUN npm install browser-sync --save-dev
RUN npm i net -S
COPY . .

RUN npm install 

RUN npm install http-server -g 

RUN npm run build --prod

WORKDIR /app/dist/landing

CMD ["http-server", "-c1", "-p", "8063"]
