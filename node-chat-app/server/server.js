const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const bodyParser = require("body-parser");

const { generateMessage, generateLocationMessage } = require("./utils/message");
const { isRealString } = require("./utils/validation");
const { Users } = require("./utils/users");
const publicPath = path.join(__dirname, "/../public");
const port = process.env.PORT || 3000;
const app = express();
let server = http.createServer(app);
let io = socketIO(server);
let users = new Users();
// console.log(__dirname + '/../public');
// console.log(publicPath);

app.use(express.static(publicPath));
app.use(bodyParser.json());
io.on("connection", socket => {
  console.log("New user connected");
  // socket.emit(emit name,data)
  // emits an event to single connection
  // handel by io.emits
  // socket.emit("newMessage", {
  //   from: "manishverma.cse@gmail.com",
  //   text: "Hey! whats going on",
  //   createdAt: "124"
  // });

  socket.on("join", (params, callback) => {
    if (!isRealString(params.displayname) || !isRealString(params.roomname)) {
      return callback("Name and room name are required.");
    }

    socket.join(params.roomname);
    users.removeUser(socket.id);
    users.addUser(socket.id, params.displayname, params.roomname);

    io.to(params.roomname).emit(
      "updateUserList",
      users.getUserList(params.roomname)
    );
    // socket.leave('the office fans);

    // io.emit -> io.to('The office Fans).emit
    // socket.broadcast.emit -> socket.broadcast.to('The office Fans).emit
    // socket.emit
    socket.emit("newMessage", generateMessage("Admin", "Hey! whats going on"));
    // it has own emit function, in this sender will not receive the message
    // socket.broadcast.emit("newMessage", {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });

    socket.broadcast
      .to(params.roomname)
      .emit(
        "newMessage",
        generateMessage("Admin", params.displayname + " has joined.")
      );
    callback();
  });

  socket.on("createMessage", (message, callback) => {
   
    let user = users.getUser(socket.id);

    if (user && isRealString(message.text)) {
      // emits an event to every single connection
      io.to(user[0].room).emit(
        "newMessage",
        generateMessage(user[0].name, message.text)
      );
    }

    // acknowledgement sending success or failer message
    callback();
  });

  socket.on("createLocationMessage", coords => {
    let user = users.getUser(socket.id);
    if(user){
      io.to(user[0].room).emit(
        "newLocationMessage",
        generateLocationMessage(user[0].name, coords.latitude, coords.longitude)
      );
    }
  });

  socket.on("disconnect", () => {
    let user = users.removeUser(socket.id);
    if (user) {
      io.to(user[0].room).emit(
        "updateUserList",
        users.getUserList(user[0].room)
      ); //update user list
      io.to(user[0].room).emit(
        "newMessage",
        generateMessage("Admin", user[0].name + " has left.")
      );
    }
    console.log("User was disconnected");
  });
});

// app listen is going to bind the application to a port on our machine.
server.listen(port, () => {
  console.log(
    `Node Live Development Server is up and running on port: ${port}, open your browser on http://localhost:${port}`
  );
});
// module.exports = { app };
