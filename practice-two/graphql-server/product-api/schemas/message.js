const { gql } = require('apollo-server');

module.exports = gql`
  extend type Query {
    messages: [Message!]!
  }

  extend type Mutation {
    createMessage(text: String!): Message!
  }

  extend type Subscription {
    messageCreated: MessageCreated!
  }

  type Message {
    id: ID!
    text: String!
    user: User!
  }

  type MessageCreated {
    message: Message!
  }
`;