const express = require("express");
const controller = require("../controller/product");

const routes = express.Router();

routes.get("/products", controller.showProductsController);

routes.post("/add", controller.addProductsController);

module.exports = routes;
