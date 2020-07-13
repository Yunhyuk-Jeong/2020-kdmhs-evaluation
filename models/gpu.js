const mongoose = require("mongoose");

const GpuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  manufacturer: {
    type: String,
    required: true,
    trim: true,
  },
  releaseDate: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("gpu", GpuSchema, "gpus");
