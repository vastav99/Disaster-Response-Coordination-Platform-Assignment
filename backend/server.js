const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const disastersRouter = require('./routes/disasters');
const resourcesRouter = require('./routes/resources');
const verifyRouter = require('./routes/verify-image');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());

app.use('/disasters', disastersRouter);
app.use('/resources', resourcesRouter);
app.use('/verify-image', verifyRouter);

app.get('/', (req, res) => res.send('Disaster Coordination API Running'));

io.on('connection', (socket) => {
  console.log('WebSocket client connected');
});

server.listen(3000, () => console.log('Server running on port 3000'));
