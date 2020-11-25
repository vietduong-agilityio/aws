# base image
FROM node:10 AS api-build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
COPY . /app
RUN npm install

FROM node:alpine AS app-run
WORKDIR /app
COPY --from=api-build /app /app
# specify the port number the container should expose
EXPOSE 3000
# run the application
CMD npm start --host 0.0.0.0 --disable-host-check