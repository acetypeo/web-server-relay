import { WebSocketServer } from 'y-websocket/server.js';
import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Yjs WebSocket relay is running\n');
});

const wss = new WebSocketServer({ server });

server.listen(process.env.PORT || 1234, () => {
  console.log(`Relay listening on port ${server.address().port}`);
});