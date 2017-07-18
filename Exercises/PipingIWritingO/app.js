const fs = require('fs');

var writableStream = fs.createWriteStream('file.txt');

process.stdin.pipe(writableStream);