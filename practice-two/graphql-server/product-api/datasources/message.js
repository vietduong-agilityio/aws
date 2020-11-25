const db = require('../db');

const MessageModel = db.models.Messages;

module.exports = class MessageDataSource {
  constructor() {}

  listMessage() {
    return MessageModel.findAll();
  }

  listMessageByUser(userId) {
    return MessageModel.findAll({
      where: {
        user_id: userId
      }
    });
  }

  createMessage(message) {
    return MessageModel.create(message);
  }
};