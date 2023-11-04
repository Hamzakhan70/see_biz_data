const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title> First Page </title><head>");
    res.write(
      "<body><h1>Welcome to the world of Developers this is out first response</h1></body>"
    );
    res.write(
      // ACTION creat-user will open the new page with url /create-users
      '<body><form action="/create-user" method="POST"><label>User Name:</label><input type="text" name="User Name"><button type="submit">send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html"); //in this we set the header of the response and tell the type of response
    res.write("<html>");
    res.write("<head><title>Form-input</title><head>");
    res.write(
      "<body><h1>These are users</h1> <ul><li>Hamza</li><li>Arif</li><li>Arif</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }
  //   if (url === "/create-user") {
  //     res.setHeader("Content-Type", "text/html"); //in this we set the header of the response and tell the type of response
  //     res.write("<html>");
  //     res.write("<head><title>Form-input-validation</title><head>");
  //     res.write("<body><h1>i am parsing the input data.......</h1> </body>");
  //     res.write("</html>");
  //   }

  if (url === "/create-user" && method == "POST") {
    let arr = [];
    req.on("data", (chunk) => {
      //this will listen for each data chunck
      arr.push(chunk);
    });
    req.on("end", () => {
      const parsedArr = Buffer.concat(arr).toString(); //this is used to get all the data from buffer means all collected chunck
      let message = parsedArr.split("=")[1]; // here we are getting actuall data after the = sign
      console.log(message);

      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
});
server.listen(3000);
