const { PubSub } = require('apollo-server');

const MESSAGE_EVENTS = require('./message');

module.exports = {
  EVENTS: {
    MESSAGE: MESSAGE_EVENTS,
  },
  pubsub: new PubSub()
};