const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*", // allow frontend to connect
  },
});

app.get("/", (req, res) => {
  res.send("🎂 Cake Backend is Live!");
});

io.on("connection", (socket) => {
  console.log("Client connected");

  // Simulate order status updates
  setTimeout(() => {
    socket.emit("orderUpdate", "Your cake is in the oven 🔥");
  }, 2000);

  setTimeout(() => {
    socket.emit("orderUpdate", "Cake is out for delivery 🚚");
  }, 5000);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(3000, () => {
  console.log("Backend running on port 3000");
});
