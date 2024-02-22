const express = require("express");
const controller = require("../controller/index")
const router = express.Router();

router.post("/translate", controller.translateController);

module.exports = {router};