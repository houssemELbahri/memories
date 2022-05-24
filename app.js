const express = require("express");
const connectDB = require("./db/connect");
require("dotenv").config();

const port = 3000;
const app = express();
console.log(process.env.MONGO_URI);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("server is running on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
