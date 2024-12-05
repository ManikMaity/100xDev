import {WebSocketServer} from "ws";
import { PORT } from "./config/server.config";

const wss = new WebSocketServer({port: PORT});

wss.on("connection", function(socket) {
    console.log("a user connected");

    setInterval(() => {
        socket.send(`time: ${new Date().toLocaleString()}`);
    }, 1000)
    

    socket.on("message", function(message) {
        if (message.toString() === "ping") {
            socket.send("pong");
        }
        else {
            console.log("received: %s", message.toString());
        }
    })
});
