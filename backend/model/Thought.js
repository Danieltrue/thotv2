const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ThoughtSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  body: {
    type: String,
    required: [true, "Please what are you thinking?"],
  },
  likes: {
    type: Number,
    default: 0,
  },
  // comment: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: comment,
  //   },
  // ],
  dateposted: {
    type: Date,
    default: new Date(),
  },
  // category: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "category",
  //     min: 2,
  //   },
  // ],
});

module.exports = mongoose.model("thought", ThoughtSchema);
