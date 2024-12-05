# Web Scockets
## Persistent connections
- In http protocol is not persistent connections becuase when client make a req and server send a response it close the connection
- To create a persistent we use Web Sockets protocol.
- WebSocket protocol is a protocol that allows the client to send and receive data in real-time.
- websocket is `full duplex connection` - the client can send and receive data at the same time.

## Why not using socket.io
- It uses its own protocol.
- Unlike web sockets, which is a standard protocol, socket.io uses a custom protocol which is not standard so my not compatible with other libraries or platforms.

### Web Sockets Process
- Use `ws` library
```bash
npm i ws @types/ws
```

- Inport WebSocketServer from ws and create a server and listen on port 30004
```ts
import {WebSocketServer} from "ws";
import { PORT } from "./config/server.config";

const wss = new WebSocketServer({port: PORT});
```