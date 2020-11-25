# base image
FROM node:10-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install

# copy entire app to workdir
COPY . /app

# specify the port number the container should expose
EXPOSE 3000

# run the application
CMD npm start --host 0.0.0.0 --disable-host-check
