const { gql } = require('apollo-server');

module.exports = gql`
  extend type Query {
    listProduct(offset: Int, limit: Int): [Product!]!
    getProduct(id: Int!): Product!
  }
  
  extend type Mutation {
    addProduct(title: String!, price: Int!): Product!
    updateProduct(id: Int!, title: String!, price: Int!): Product!
    removeProduct(id: Int!): Int!
  }

  type Product {
    id: ID!
    title: String!
    price: Int!
  }
`;