const socket = io("https://cakefromhome.onrender.com/"); // we'll update this URL when hosted

socket.on("orderUpdate", (msg) => {
  document.getElementById("status").innerText = msg;
});
