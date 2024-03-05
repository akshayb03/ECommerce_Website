require("dotenv").config();
const Transaction = require("../models/Transactions");
const Razorpay = require("razorpay");

const createOrderController = async (req, res, next) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = {
      amount: req.body.amount,
      currency: "INR",
      receipt: req.body.receipt,
    };

    const order = await instance.orders.create(options);

    if (!order) {
      return res.status(500).send("Some error occured");
    }
    return res.status(200).send(order);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const createTransactionsController = async (req, res, next) => {
  try {
    const transaction = new Transaction({
      order_id: req.body.order_id,
      payment_id: req.body.payment_id,
      razorpay_id: req.body.razorpay_id,
      currency: req.body.currency,
      amount: req.body.amount,
      products: req.body.products,
    });
    const txn = await transaction.save();
    res.status(200);
    res.send(txn);
  } catch (error) {
    res.send({ error: error.message });
  }
};

module.exports = { createOrderController, createTransactionsController };
