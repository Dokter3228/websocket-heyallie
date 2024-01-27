"use strict";
exports.__esModule = true;
var WebSocket = require("ws");
var server = new WebSocket.Server({ port: 3000 });
server.on("connection", function (socket) {
    console.log("client connected");
    socket.on("message", function (message) {
        socket.send("I received your message: ".concat(message));
    });
    socket.on("close", function () {
        console.log("client disconnected");
    });
});
console.log("websocket server is running on port 3000");
