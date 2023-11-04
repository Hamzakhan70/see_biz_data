console.log("hello from the Node-----");

// this code is for the write code in the word file created by me manually-----------------

// lecture #-4
// const fs = require("fs");
// fs.writeFileSync("hello.txt", "i added it by use of Node");

// for creating the own server

// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log(req);
//   process.exit();
// });
// server.listen(3000);

// -------------how to send response---------------------

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.headers);
//   //   process.exit();
//   res.setHeader("Content-Type", "text/html"); //in this we set the header of the response and tell the type of response
//   res.write("<html>");
//   res.write("<head><title>Sever Node.js</title><head>");
//   res.write("<body> <h1>This is from the Node.JS</h1></body>");
//   res.write("</html>");
//   res.end(); //after it nothing will be execute so don't need to write after end
// });
// server.listen(3000);

// ----------------how to send request and get response---------------------
const routes = require("./routes");
const http = require("http"); //it include Node.js http module
const express = require("express"); //it include Node.js http module
const app = express();
app.use((req, res, next) => {
  console.log("in the middle wear");
  next();
});

app.use((req, res, next) => {
  console.log("in the next-- middle wear");
});
const server = http.createServer(routes);
server.listen(3000); // listen can take 2 parameters port and host
