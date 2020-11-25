const db = require('../db');

const UserModel = db.models.Users;

module.exports = class UserDataSource {
  constructor() {}

  getUser(id) {
    return UserModel.findById(id);
  }

  listUser() {
    return UserModel.findAll();
  }

  createUser(user) {
    return UserModel.create(user);
  }

  deleteUser(email) {
    return UserModel.destroy(
      {
        where: { email }
      }
    );
  }
};