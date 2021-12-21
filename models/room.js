const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  roomNo: {
    type: Number,
    required: true,
  },
});

const Room = mongoose.model("Room", RoomSchema);

module.exports = Room;
