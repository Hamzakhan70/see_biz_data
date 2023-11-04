const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Form-input</title><head>");
    res.write("<body><h1>this is slash / page</h1></body>");
    res.write(
      '<body><form action="/create-user" method="POST"><label>User Name:</label><input type="text" name="User Name"><button type="submit">send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Form-input</title><head>");
    res.write(
      "<body><h1>These are users</h1> <ul><li>Hamza</li><li>usman</li><li>Ali</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user") {
    let arr = [];
    req.on("data", (chunk) => {
      arr.push(chunk);
    });
    req.on("end", () => {
      const parsedArr = Buffer.concat(arr).toString();
      console.log(parsedArr.split("=")[1]);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html"); //in this we set the header of the response and tell the type of response
  res.write("<html>");
  res.write("<head><title>Sever Node.js</title><head>");
  res.write("<body> <h1>This is from the Assignment</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3001);
