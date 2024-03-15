const express = require("express");
const morgan = require("morgan");

const customerRouter = require("./routes/customerRoutes");

const app = express();

// middleware untuk membaca json dari request body ke kita
app.use(express.json());

// middleware third party middleware
app.use(morgan("dev"));

// Midleware buat sendiri
app.use((req, res, next) => {
  console.log("Hallo FSW 1 , Ini Middleware kita sendiri");
  next();
});

app.use((req, res, next) => {
  req.requestime = new Date().toISOString();
  next();
});

app.use("api/v1/customers", customerRouter);

module.exports = app; //
