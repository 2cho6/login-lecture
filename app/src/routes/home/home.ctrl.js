"use strict";

const users = {
  id: "evenabee",
  password: "1234",
};

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

console.log(users.id);

const process = {
  login: (req, res) => {
    console.log(req.body.id);
    const id = req.body.id,
      password = req.body.password;
    if (users.id === id) {
      if (users.password === password) {
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success: false,
      msg: "failed login",
    });
  },
};

module.exports = {
  output,
  process,
};
