const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

const bikesSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  numberOfTyres: {
    type: Number,
    required: true,
  },
});

const Car = mongoose.model("Car", carSchema);
const Bike = mongoose.model("Bike", bikesSchema);

module.exports = { Car, Bike };
