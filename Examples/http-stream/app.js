const http = require('http');

const server = http.createServer(function (req, res) {
  console.log("Creating server");
  req.pipe(process.stdout);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end("bye");
});

server.listen(8080);