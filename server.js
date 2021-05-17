const http = require('http');

const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1205319",
  key: "75d3e579f59f5e100c74",
  secret: "700b3b6c73290509bbf9",
  cluster: "eu",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "caca"
});

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send back a response and end the connection
    res.end('Hello World!\n');
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');