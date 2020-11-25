const userResolvers = require('./user');
const productResolvers = require('./product');
const messageResolvers = require('./message');

module.exports = [userResolvers, productResolvers, messageResolvers];