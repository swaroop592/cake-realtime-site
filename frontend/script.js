const socket = io("http://localhost:3000"); // we'll update this URL when hosted

socket.on("orderUpdate", (msg) => {
  document.getElementById("status").innerText = msg;
});
