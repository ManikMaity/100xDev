import { createServer } from "http";
import { WebSocketServer, WebSocket } from "ws";
import { PORT } from "./config/server.config";
import express from "express";
import { createResponseMessage } from "./utils/functions";

const app = express();
app.use(express.json());

const server = createServer(app);
const wss = new WebSocketServer({ server });

interface User {
  socket: WebSocket;
  room: string;
}

let allSockets: User[] = [];

wss.on("connection", (socket) => {

  socket.on("message", (message) => {
    const parsedMessage = JSON.parse(message.toString());

    if (parsedMessage.type === "join") {
      if (!parsedMessage?.payload?.roomId) {
        socket.send(createResponseMessage(false, "Room id is required"));
        return;
      }
      const exit = allSockets.find((user) => user.socket === socket);
      if (exit) {
        if (exit.room == parsedMessage.payload.roomId) {
          socket.send(
            createResponseMessage(false, `You are already in room ${exit.room}`)
          );
          return;
        }
       const filtered = allSockets.filter((user) => user.socket !== socket);
        allSockets = filtered;
      }
      allSockets.push({ socket, room: parsedMessage.payload.roomId });
      socket.send(
        createResponseMessage(
          true,
          `Joined room ${parsedMessage.payload.roomId}`,
          parsedMessage.payload
        )
      );
    }

    if (parsedMessage.type === "chat") {
      if (!parsedMessage?.payload?.message) {
        socket.send(createResponseMessage(false, "Message is required"));
        return;
      }

      const user = allSockets.find((user) => user.socket === socket);
      if (!user) {
        socket.send(createResponseMessage(false, "You are not in a room"));
      }

      const usersInRoom = allSockets.filter(
        (other) => user?.room === other.room
      );

      usersInRoom.forEach((user) => {
        user.socket.send(
          createResponseMessage(true, "Chat", parsedMessage.payload)
        );
      });
    }
  });

  socket.on("close", () => {
    const exit = allSockets.find((user) => user.socket === socket);
    if (exit) {
      const filtered = allSockets.filter((user) => user.socket !== socket);
      allSockets = filtered;
      socket.send(
        createResponseMessage(true, `Left room ${exit.room}`)
      );
    }
  });

});

console.log(allSockets);

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

server.listen(PORT, () => {
  console.log(`Server started on port https://localhost:${PORT}`);
});
