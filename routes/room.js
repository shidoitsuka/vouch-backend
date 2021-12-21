const express = require("express");
const roomModel = require("../models/room");
const app = express();

app.get("/rooms/:roomId", async (req, res) => {
  const { roomId } = req.params;
  const chats = await roomModel.find({});
  console.log(roomId);

  try {
    res.send(chats);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
