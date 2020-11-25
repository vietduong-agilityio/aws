const { gql } = require('apollo-server');
const userSchema = require('./user');
const productSchema = require('./product');
const messageSchema = require('./message');

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;
module.exports = [linkSchema, userSchema, productSchema, messageSchema];