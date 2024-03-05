require("dotenv").config();
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT;
const express = require("express");

const app = express();
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");
const paymentRoutes = require("./routes/payment");

mongoose
  .connect(mongoURI, {})
  .then((result) => {
    console.log("Database is connected");

    app.use(express.json());

    app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, x-access-token, Content-Type, Accept, Authorization"
      );
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, PUT, DELETE, POST, PATCH"
      );
      next();
    });

    app.use("/api", productRoutes);

    app.use("/api", userRoutes);

    app.use("/payments", paymentRoutes);

    app.listen(port, () => {
      console.log(`Server started at port ${port}`);
    });
  })
  .catch((e) => {
    console.log("Error connecting to database");
  });
