const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: ["Please Add category name", true],
  },
});

module.exports = mongoose.model("category", CategorySchema);
