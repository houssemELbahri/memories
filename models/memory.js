const mongoose = require("mongoose");

const memorySchema = mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
});

exports.Memory = mongoose.model("Memory", memorySchema);
