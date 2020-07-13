const mongoose = require("mongoose");

const CpuSchema = new mongoose.Schema({
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
  core: {
    type: String,
    required: true,
    trim: true,
  },
  thread: {
    type: String,
    required: true,
    trim: true,
  },
  releaseDate: {
    type: String,
    required: true,
    trim: true,
  },
  clock: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("cpu", CpuSchema, "cpus");
