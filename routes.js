const express = require("express");
const Product = require("./models/Products");
const User = require("./models/Users");

const routes = express.Router();

routes.get("/products", async (req, res, next) => {
  const products = await Product.find();
  products && res.status(200) && res.send(products);
});

routes.post("/add-user", async (req, res, next) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });
    console.log("user", user);
    const addedUser = await user.save();
    res.status(200);
    res.send(addedUser);
  } catch (error) {
    res.status(401);
    res.send({ error: error.message });
  }
});

routes.post("/add", async (req, res) => {
  try {
    const product = new Product({
      id: req.body.id,
      name: req.body.name,
      img: req.body.img,
      price: req.body.price,
      mrp: req.body.mrp,
      rating: req.body.rating,
      ratingTotal: req.body.ratingTotal,
      discount: req.body.discount,
      seller: req.body.seller,
      purl: req.body.purl,
    });

    const addedProduct = await product.save();
    res.status(200);
    res.send(addedProduct);
  } catch (error) {
    res.send({ error: error.message });
  }
});

module.exports = routes;
