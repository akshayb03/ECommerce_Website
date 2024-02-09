require("dotenv").config();
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT;
const express = require("express");

const app = express();
const routes = require("./routes");

mongoose
  .connect(mongoURI, {})
  .then((result) => {
    console.log("Database is connected");

    app.use(express.json());

    app.use("/api", routes);

    app.listen(port, () => {
      console.log(`Server started at port ${port}`);
    });
  })
  .catch((e) => {
    console.log("Error connecting to database");
  });
