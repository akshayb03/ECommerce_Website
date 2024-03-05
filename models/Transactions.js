const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  order_id: {
    required: true,
    type: String,
  },
  payment_id: {
    required: true,
    type: String,
  },
  razorpay_id: {
    required: true,
    type: String,
  },
  currency: {
    required: true,
    type: String,
  },
  amount: {
    required: true,
    type: Number,
  },
  products: {
    required: true,
    type: Array,
  },
});

const transaction = mongoose.model("transactions", dataSchema);

module.exports = transaction;
