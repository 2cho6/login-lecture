"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const id = req.id,
      password = req.password;

    const users = UserStorage.getUsers("id", "password");

    const response = {};
    if (users.id === id) {
      if (users.password === password) {
        response.success = true;
        return res.json(response);
      }
    }
    response.success = false;
    response.msg = "login failed";
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
