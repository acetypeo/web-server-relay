import { WebSocketServer } from 'ws';
import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket relay is running\n');
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    // Broadcast to all other connected clients
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === 1) {
        client.send(message);
      }
    });
  });
});

server.listen(process.env.PORT || 1234, () => {
  console.log(`Relay listening on port ${server.address().port}`);
});
