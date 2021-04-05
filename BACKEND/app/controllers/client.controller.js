"use strict";

const User = require("../models/client.model");

exports.login = function (req, res) {
  const { username, password } = req.body;

  User.login(username, password, function (err, token) {
    console.log("==================BEGIN======================");
    if (err) {
      console.log(err);
      res.status(400).send({ error: true, message: err });
    } else {
      console.log("==================START======================");
      console.log(token);
      console.log("====================ENDX====================");
      res.json(token);
    }
  });
};
