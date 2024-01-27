import * as WebSocket from "ws";

const server = new WebSocket.Server({ port: 3000 });

server.on("connection", (socket: WebSocket) => {
  console.log("client connected");

  socket.on("message", (message: string) => {
    socket.send(`I received your message: ${message}`);
  });

  socket.on("close", () => {
    console.log("client disconnected");
  });
});

console.log("websocket server is running on port 3000");
