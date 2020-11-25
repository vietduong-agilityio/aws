/* jshint ignore:start */
const resolvers = require('./resolvers');
const authentication = require('./libs/authentication');

const { ApolloServer } = require('apollo-server');
const schema = require('./schemas');
const db = require('./db');

const UserDataSource = require('./datasources/user');
const ProductDataSource = require('./datasources/product');
const MessageDataSource = require('./datasources/message');

global.fetch = require('node-fetch');

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources: () => {
    return {
      userDataSource: new UserDataSource(),
      productDataSource: new ProductDataSource(),
      messageDataSource: new MessageDataSource()
    }
  },
  context: async ({ req, connection }) => {
    const models = db.models;
    if (connection) {
      return {
        models
      }
    }

    const currentUser = await authentication(req);

    return {
      models,
      currentUser
    }
  }
});

db.sequelize.sync().done(() => {
  server.listen({ port: 3000 }, () => {
    console.log(`Apollo Server on http://localhost:3000/graphql`);
  });
});
