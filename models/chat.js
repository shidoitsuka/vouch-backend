const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  room: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    trim: true,
  },
});

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;
