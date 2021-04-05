"use strict";

const mysql = require("mysql2");

const db = mysql.createConnection({

  user: "root",
  password: "Monze@2019",
  host: "localhost",
  database: "PRESLY",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Active Username : " + db.config.user);
  console.log("Active Database : " + db.config.database);
  console.log("Database Connected successfuly!");
});

module.exports = db;
