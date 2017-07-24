const http = require('http');

const server = http.createServer(function (req, res) {
  console.log("Creating server");
  req.pipe(process.stdout);

  res.end();
});

server.listen(8080);