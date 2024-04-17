const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");
const port = 5000;

const { addUser, removeUser, getusers, getusersInRoom } = require("./users");

const router = require("./router");
const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:5173", // Allow requests from this origin
    methods: ["GET", "POST"], // Allow only GET and POST requests
  },
});
app.use(cors());
io.on("connection", (socket) => {
  console.log("new user connected");

  //get the name and room using socket.on
  socket.on("join", ({ name, room }, callback) => {
    console.log(`name of user is : ${name} && room is : ${room}`);
    const { error, user } = addUser({ id: socket.id, name: name, room: room });
    console.log("userrray : ", user);
    if (error) return callback(error);

    socket.emit("message", {
      user: "admin ",
      text: `${user.name} ,wlcome to the room ${user.room}`,
    });

    // this line means is emit message event to the specific room

    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });

    const userInroom = getusersInRoom(user.room);
    console.log("users in same room : ", userInroom);
    socket.broadcast.to(user.room).emit("userinsameroom", {
      user: userInroom,
    });

    //jooin the room
    socket.join(user.room);
    callback();
  });

  socket.on("disconnect", () => {
    console.log("user is disconnected : ");
  });
});

app.use(router);

server.listen(port, () => {
  console.log("server is running");
});
