"use strict";

const resident = require("../models/orders.model");

exports.create = function (req, res) {
  console.log("==========TWO============");
  console.log(req);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    console.log(req);
    res
      .status(400)
      .send({ error: true, message: "Enter all the required fields" });
  } else {
    console.log("==========ONE============");
    console.log(req);
    //   const resident22 = new resident({ ...req.body, user: req.user.id });
    const resident1 = new resident(req.body);
    resident.create(resident1, function (err, resident1) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Record added successfully",
        data: resident1,
      });
    });
  }
};

exports.findAll = function (req, res) {
  resident.findAll(function (err, residents) {
    if (err) res.send(err);
    res.send(residents);
  });
};

exports.findById = function (req, res) {
  resident.findById(req.params.id, function (err, resident) {
    if (err) res.send(err);
    res.send(resident);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Submit all required fields" });
  } else {
    const residentToUpdate = new resident(req.body);

    resident.update(req.params.id, residentToUpdate, function (err, result) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Record updated successfully",
      });
    });
  }
};

exports.delete = function (req, res) {
  resident.delete(req.params.id, function (err, result) {
    if (err) res.send(err);
    res.json({ error: false, message: "Record removal successful" });
  });
};
