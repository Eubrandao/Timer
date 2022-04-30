
FROM node:16
LABEL key="tasks"
 
WORKDIR /usr/src/app/application/
 
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
 
COPY package.json /usr/src/app/application/
RUN npm install
 
COPY . /usr/src/app/application/
 
ENV PORT 3000
EXPOSE $PORT
CMD [ "npm", "start" ]