const { ForbiddenError } = require('apollo-server');
const { skip } = require('graphql-resolvers')

module.exports = (parent, args, { dataSources, models, currentUser }) => {
  return currentUser ? skip : new ForbiddenError("Not authenticated as user.");
};
  
