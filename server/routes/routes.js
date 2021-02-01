const express = require("express");
const router = express.Router();

const paths = require("../paths");
const Controller = require("../controllers");

// methods
router.get(paths.fetchSales, Controller.getSalesByStatus);
router.post(paths.addSales, Controller.addSales);

module.exports = router;