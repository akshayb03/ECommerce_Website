const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  id: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  img: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: String,
  },
  mrp: {
    required: true,
    type: String,
  },
  rating: {
    required: true,
    type: String,
  },
  ratingTotal: {
    required: true,
    type: String,
  },
  discount: {
    required: true,
    type: String,
  },
  seller: {
    required: true,
    type: String,
  },
  purl: {
    required: true,
    type: String,
  },
});

const product = mongoose.model("products", dataSchema);

module.exports = product;
