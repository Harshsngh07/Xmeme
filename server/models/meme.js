const mongoose = require("mongoose");

const memeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date().toLocaleString("en-US"),
  },
});

module.exports = mongoose.model("PostMeme", memeSchema);
