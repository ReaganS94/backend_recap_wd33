const express = require("express"); // Common JS
// import express from "express";
require("colors");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./dbinit");
const app = express();
const carRoute = require("./routes/car");

const PORT = 8080 || process.env.PORT;

connectDB();

//middleware
app.use(express.json());
app.use(cors());

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
