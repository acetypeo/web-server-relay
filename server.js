import { WebsocketServer } from 'y-websocket-server';

const server = new WebsocketServer({
  port: process.env.PORT || 1234,
});

server.on('connection', () => {
  console.log('Client connected');
});

console.log(`Relay listening on port ${server.port}`);