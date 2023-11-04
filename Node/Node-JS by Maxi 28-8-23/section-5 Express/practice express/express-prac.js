console.log("hello from the node");
// const http = require("http"); //it include Node.js http module

const express = require("express"); //it include express function which we utilise

const app = express();

app.use((req, res, next) => {
  //function inside the use will execute for every incoming request
  // next(it allow the request to go to the next middle-wear)
  console.log("in the 1-- middle wear");
  next();
});
app.use((req, res, next) => {
  //function inside the use will execute for every incoming request
  // next(it allow the request to go to the next middle-wear)
  console.log("in the 2-- middle wear");
  // res.send("<h1>Heading is from the express.js--</h1>");
});
// const server = http.createServer(app); app.listen works same in the backend
// server.listen(3000)
app.listen(3000); // listen can take 2 parameters port and host
