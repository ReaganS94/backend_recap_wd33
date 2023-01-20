const express = require("express");

const {
  getAllCars,
  getOneCar,
  createCar,
} = require("../controllers/carControllers");

const app = express.Router();

app.route("/").get(getAllCars).post(createCar);
app.route("/:id").get(getOneCar);

module.exports = app;
