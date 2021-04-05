'use strict';
const jwt = require('jsonwebtoken');
var db = require('../../config/db.config');

var Client = function (ZCLIENTS) {
  this.username = ZCLIENTS.username;
  this.password = ZCLIENTS.password;
  this.active = ZCLIENTS.active;
};

Client.login = function (username, password, result) {
  db.query('SELECT * FROM ZCLIENTS WHERE username = ? AND password = ?',
   [username, password], function (err, res) {
    if (err) {
      console.log('error login', err);
      result(err, null);
    } else {
      const ZCLIENTS = res[0];

      if (!ZCLIENTS) {
        result('Invalid username or password', null);
      } else if (!ZCLIENTS.active) {
        result('Usuario no activo', null);
      } else {
        console.log('Login is Successful!');
        const token = generateJwtToken(res[0]);
        result(null, {
          id: ZCLIENTS.id,
          username: ZCLIENTS.username,
          active: ZCLIENTS.active,
          accessToken: token
        });
      }
    }
  });
};

function generateJwtToken(ZCLIENTS) {
  const payload = {
    ZCLIENTS: {
      id: ZCLIENTS.id,
      username: ZCLIENTS.username,
      active: ZCLIENTS.active
    }
  };

  return jwt.sign(payload, 'MyS3cr3t', { expiresIn: '7d' });
}

module.exports = Client;
