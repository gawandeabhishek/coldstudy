const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/coldstudy")
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.log("failed to connect to MongoDB");
  });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
    required: true,
    match: /^https?:\/\/[^\s]+/,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "collection",
  },
});

const User = mongoose.model("collection", userSchema);
const Video = mongoose.model("video", videoSchema);

module.exports = { User, Video };
