// const http = require('node:http');
import http from "http";

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type','text/html');
//   res.end('Hello, World!\n');
    res.end('<h1>this is heading ram. Ram asking what is going on.</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  
}); 