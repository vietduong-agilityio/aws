/* jshint ignore:start */
const { combineResolvers } = require('graphql-resolvers');
const isAuthenticated = require('./authorization');

module.exports = {
  Query: {
    listProduct: combineResolvers(
      isAuthenticated,
      async (parent, { offset = 0, limit = 100 }, { dataSources }) => {
        return await dataSources.productDataSource.listProduct(offset, limit);
      }
    ),

    getProduct: combineResolvers(
      isAuthenticated,
      async (parent, { id }, { dataSources }) => {
        return await dataSources.productDataSource.getProduct(id);
      }
    )
  },

  Mutation: {
    addProduct: combineResolvers(
      isAuthenticated,
      async (parent, { title, price }, { dataSources }) => {
        const product = {
          title,
          price
        };

        return await dataSources.productDataSource.addProduct(product);
      }
    ),

    updateProduct: combineResolvers(
      isAuthenticated,
      async (parent, { id, title, price }, { dataSources }) => {
        const product = {
          title,
          price
        }

        return dataSources.productDataSource.updateProduct(id, product).then(result => {
          product.id = id;

          return product;
        }).catch(err => {
          return err;
        })
      }
    ),

    removeProduct: combineResolvers(
      isAuthenticated,
      async (parent, { id }, { dataSources }) => {
        return await dataSources.productDataSource.removeProduct(id);
      }
    )
  }
};
/* jshint ignore:end */