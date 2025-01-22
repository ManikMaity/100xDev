import {createServer} from "http";

import { Server } from "socket.io";

const webSocketServer = createServer();

const io = new Server(webSocketServer);

io.on("connection", (socket) => {
    console.log("User connected");
    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});


webSocketServer.listen(3003, () => {
    console.log("WebSocket server started on port 3003");
})