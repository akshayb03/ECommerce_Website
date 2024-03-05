const express = require("express");

const controller = require("../controller/payment");

const routes = express.Router();

routes.post("/orders", controller.createOrderController);

routes.post("/transactions", controller.createTransactionsController);

module.exports = routes;
