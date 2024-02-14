const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  confirmPassword: {
    required: true,
    type: String,
  },
});

const user = mongoose.model("user", dataSchema);

module.exports = user;
