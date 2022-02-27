"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const { id, password } = UserStorage.getUserInfo(this.body.id);
    console.log(id, password);
    if (id) {
      if (id === this.body.id && password === this.body.password) {
        return { success: true };
      }
      return { success: false, msg: "wrong password" };
    }
    return { success: false, msg: "id doesn't exist" };
  }
}

module.exports = User;
