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
  wholiked: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],

  dateposted: {
    type: Date,
    default: new Date(),
  },
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
  ],
});

module.exports = mongoose.model("thought", ThoughtSchema);
