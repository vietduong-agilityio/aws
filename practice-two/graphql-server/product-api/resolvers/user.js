/* jshint ignore:start */
const { combineResolvers } = require('graphql-resolvers');
const auth = require('../configs/aws-auth');
const isAuthenticated = require('./authorization');

module.exports = {
  Query: {
    getUser: combineResolvers(
      isAuthenticated,
      async (parent, { id }, { dataSources }) => {
        return await dataSources.userDataSource.getUser(id);
      }
    ),

    listUser: combineResolvers(
      isAuthenticated,
      async (parent, args, { dataSources }) => {
        return await dataSources.userDataSource.listUser();
      }
    )
  },

  Mutation: {
    signUp: async (parent, { name, email, pass }, { dataSources }) => {
      console.log('auth', auth);
      const data = await auth.signUp(email, pass);
      const user = {
        id: data.userSub,
        name: name,
        email: email,
      };

      return await dataSources.userDataSource.createUser(user);
    },

    verifyUser: async (parent, { email, code }) => {
      return await auth.confirmSignUp(email, code)
    },

    signIn: async (parent, { email, pass }) => {
      const data = await auth.signIn(email, pass);

      if (
        data.signInUserSession &&
        data.signInUserSession.accessToken &&
        data.signInUserSession.accessToken.jwtToken
      ) {
        return {
          token: data.signInUserSession.accessToken.jwtToken
        }
      }

      return null;
    },

    deleteUser: async (parent, { email }, { dataSources }) => {
      return await dataSources.userDataSource.deleteUser(email);
    }
  },

  User: {
    messages: combineResolvers(
      isAuthenticated,
      async (parent, args, { dataSources, models, currentUser }) => {
        return await dataSources.messageDataSource.listMessageByUser(currentUser.sub)
      }
    )
  }
};
/* jshint ignore:end */