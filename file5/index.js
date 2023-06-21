const app = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
  console.log('A user connected');

  // Emit a custom event to the client
  socket.emit('welcome', 'Welcome to the chat room!');

  // Listen for a custom event from the client
  socket.on('message', (message) => {
    console.log('Received message:', message);
  });

  // Disconnect event
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const port = 3000;
http.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
