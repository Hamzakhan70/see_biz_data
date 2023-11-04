console.log("this is assignment");
const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("-------this is first request---");
  res.send("<h1>Heading is from the ASSIGNMENT express.js--</h1>");
});
app.use("/", (req, res, next) => {
  console.log("-------this is first request---");
  res.send("<h1>Heading is from the '/'--</h1>");
  //   next();
});
app.listen(3003);
