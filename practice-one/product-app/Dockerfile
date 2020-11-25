# base image
FROM node:10 AS client-build
WORKDIR /app-client
ENV PATH /app-client/node_modules/.bin:$PATH
COPY package.json /app-client/package.json
COPY . /app-client
RUN npm install

FROM node:alpine AS app-run
WORKDIR /app-client
COPY --from=client-build /app-client /app-client
# specify the port number the container should expose
EXPOSE 3001
# run the application
CMD npm start --host 0.0.0.0 --disable-host-check