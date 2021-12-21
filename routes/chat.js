const express = require("express");
const chatModel = require("../models/chat");
const app = express();

app.get("/chat/:roomId", async (req, res) => {
  const { roomId } = req.params;

  const chats = await chatModel.find({ room: roomId });

  try {
    res.send(chats);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/chat/:roomId", async (req, res) => {
  const { roomId } = req.params;
  req.body.room = roomId;

  const chat = new chatModel(req.body);

  try {
    await chat.save();
    console.log(chat);
    res.send(chat);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
