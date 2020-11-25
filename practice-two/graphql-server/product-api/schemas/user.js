const { gql } = require('apollo-server');

module.exports = gql`
  extend type Query {
    getUser(id: String!): User!
    listUser: [User!]!
  }

  extend type Mutation {
    signUp(name: String!, email: String!, pass: String!): User!
    verifyUser(email: String!, code: String!): String!
    deleteUser(email: String!): User!
    signIn(email: String!, pass: String!): Token!
  }

  type User {
    id: ID!
    name: String!
    email: String!,
    messages: [Message!]
  }

  type Token {
    token: String!
  }
`;