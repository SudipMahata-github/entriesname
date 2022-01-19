const mongoose = require("mongoose");
require("dotenv").config();
const database = process.env.MONGODB;
mongoose
  .connect(database)
  .then(() => {
    console.log("connection succesfully");
  })
  .catch((err) => {
    console.log("no connection");
  });
