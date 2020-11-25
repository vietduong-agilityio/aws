/* jshint ignore:start */
const { combineResolvers } = require('graphql-resolvers');
const isAuthenticated = require('./authorization');
const { EVENTS, pubsub } = require('../subscription');

module.exports = {
  Query: {
    messages: combineResolvers(
      isAuthenticated,
      async (parent, args, { dataSources }) => {
        return await dataSources.messageDataSource.listMessage();
      }
    )
  },

  Mutation: {
    createMessage: combineResolvers(
      isAuthenticated,
      async (parent, { text }, { dataSources, models, currentUser }) => {
        const message = await dataSources.messageDataSource.createMessage({
          text,
          user_id: currentUser.sub
        });

        pubsub.publish(EVENTS.MESSAGE.CREATED, {
          messageCreated: { message },
        });

        return message;
      }
    )
  },

  Message: {
    user: async (parent, args, { dataSources }) => {
      return await dataSources.userDataSource.getUser(parent.user_id);
    }
  },

  Subscription: {
    messageCreated: {
      subscribe: () => pubsub.asyncIterator(EVENTS.MESSAGE.CREATED),
    }
  }
}
/* jshint ignore:end */