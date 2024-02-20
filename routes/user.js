const express = require("express");
const authentication = require("../token-authentication");
const controller = require("../controller/user");

const routes = express.Router();

routes.post("/add-user", controller.addUserController);

routes.post("/login", controller.loginController);

routes.post("/is-auth", authentication, async (req, res, next) => {
  try {
    res.json({ auth: true });
  } catch (error) {
    res.send({ error: error.message });
  }
});

module.exports = routes;
