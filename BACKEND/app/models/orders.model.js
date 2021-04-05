"use strict";
var db = require("../../config/db.config");
var calculator = require("../helpers/calculator");

// Orderz object create
var ZORDERS = function (ZORDERS) {
  this.clientName = ZORDERS.clientName;
  this.description = ZORDERS.description;
  this.address = ZORDERS.address;
  this.purchaseDate = ZORDERS.purchaseDate;
  this.unitPrice = ZORDERS.unitPrice;
  this.orderStatus = ZORDERS.orderStatus;
  this.totalUnits = ZORDERS.totalUnits;
  this.totalBill = ZORDERS.totalBill;
  this.dueDays = ZORDERS.dueDays;
};

ZORDERS.create = function (newOrderX, result) {
  newOrderX.dueDays = calculator.getDeadline(newOrderX.purchaseDate);
  newOrderX.purchaseDate = new Date(newOrderX.purchaseDate);
  newOrderX.totalBill = calculator.multiply(
    newOrderX.unitPrice,
    newOrderX.totalUnits
  );

  console.log("================MODEL-CREATE======================");
  db.query("INSERT INTO ZORDERS set ?", newOrderX, function (err, res) {
    if (err) {
      console.log("error", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

ZORDERS.findAll = function (result) {
  db.query("SELECT * from ZORDERS order by ID ASC", function (err, res) {
    if (err) {
      console.log("error", err);
      result(err, null);
    } else {
      console.log("residents: ", res);
      result(null, res);
    }
  });
};

ZORDERS.findById = function (id, result) {
  db.query("SELECT * from ZORDERS where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error", err);
      result(err, null);
    } else {
      console.log("ZORDERS: ", res);
      result(null, res);
    }
  });
};

ZORDERS.update = function (id, ZORDERS, result) {

  ZORDERS.totalBill = calculator.multiply(
    ZORDERS.unitPrice,
    ZORDERS.totalUnits
  );
  ZORDERS.dueDays = calculator.getDeadline(ZORDERS.purchaseDate);
  ZORDERS.purchaseDate = new Date(ZORDERS.purchaseDate);

  console.log(ZORDERS.unitPrice)
  console.log(ZORDERS.totalUnits)
  console.log(ZORDERS.totalBill)
  console.log("================MODEL-UPDATE======================");
  db.query(
    "UPDATE ZORDERS SET clientName=?, description=?, address=?, purchaseDate=?," +
      " unitPrice=?, orderStatus=?, totalUnits=?,dueDays=?,totalBill=? WHERE id=?",
    [
      ZORDERS.clientName,
      ZORDERS.description,
      ZORDERS.address,
      ZORDERS.purchaseDate,     
     
      ZORDERS.unitPrice,
      ZORDERS.orderStatus,
      ZORDERS.totalUnits,    
      ZORDERS.dueDays,
      ZORDERS.totalBill,
       id,
    ],
    function (err, res) {
      if (err) {
        console.log("error", err);
        result(err, null);
      } else {
        console.log("update=============================================: ", res);
        result(null, res);
      }
    }
  );
};

ZORDERS.delete = function (id, result) {
  db.query("DELETE FROM ZORDERS WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error", err);
      result(err, null);
    } else {
      console.log("ZORDERS deleted", res);
      result(null, res);
    }
  });
};

module.exports = ZORDERS;
