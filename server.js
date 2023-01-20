const express = require("express"); // Common JS
// import express from "express";
require("colors");
require("dotenv").config();
const connectDB = require("./dbinit");
connectDB();
const app = express();
app.use(express.json());

const carRoute = require("./routes/car");

const PORT = 8080 || process.env.PORT;

app.use((req, res, next) => {
  console.log(req.method);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/cars", carRoute);

app.listen(PORT, () => {
  console.log(`running on http://localhost:${PORT}`);
});
