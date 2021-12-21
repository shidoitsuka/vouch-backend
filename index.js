const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
const roomRoutes = require("./routes/room.js");
const chatRoutes = require("./routes/chat.js");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"]
  }
});

mongoose.connect(
  "mongodb://root:anime1@cluster0-shard-00-00.mllfn.mongodb.net:27017,cluster0-shard-00-01.mllfn.mongodb.net:27017,cluster0-shard-00-02.mllfn.mongodb.net:27017/vouchChat?ssl=true&replicaSet=atlas-2kirnz-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

app.use(roomRoutes);
app.use(chatRoutes);

io.on('connection', (socket) => {
  socket.on("chat", msg => {
    io.sockets.emit(`chat/${msg.room}`, msg);
  });
});

server.listen(3000, () => {
  console.log("http://localhost:3000/");
});
