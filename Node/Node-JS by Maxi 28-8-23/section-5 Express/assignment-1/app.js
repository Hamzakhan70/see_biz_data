const express = require("express");
const bodyParser = require("body-parser");
app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/users", (req, res, next) => {
  console.log("this is 1st middle layer");
  res.send("<h1>this is from 1st middle layer <h1>");
});
app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="message"><button type="submit">send</button></form>'
  );
});
app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
app.use("/", (req, res, next) => {
  console.log("this is 2nd middle layer");
  res.send("<h1>this is from 2nd middle layer <h1>");
});
app.listen(3000);
