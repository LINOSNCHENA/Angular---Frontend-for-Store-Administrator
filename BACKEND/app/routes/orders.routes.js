const express = require("express");

const router = express.Router();
const residentController = require("../controllers/orders.controller");
const authorize = require("../middleware/authorize");

router.get("/", authorize, residentController.findAll);
router.post("/", authorize, residentController.create);
router.get("/:id", authorize, residentController.findById);
router.put("/:id", authorize, residentController.update);
router.delete("/:id", authorize, residentController.delete);

module.exports = router;
