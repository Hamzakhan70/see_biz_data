const http = require("http");
const fs = require("fs");
//http module porvided by the node it has many methods one of the them is createserver which take function and return the server.
const requestHandler = (req, res) => {
  // createServer is a function which is known as a request listener
  //   and it is used to get tha data from the req and send the response.
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Form-input</title><head>");
    res.write("<body><h1>this is slash / page</h1></body>");
    res.write(
      // ACTION creat-user will open the new page with url /create-users
      '<body><form action="/create-user" method="POST"><label>User Name:</label><input type="text" name="User Name"><button type="submit">send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  // if (url === "/create-user" && method == "POST") {
  //   res.statusCode = 302;
  //   res.setHeader("Location", "/");
  //   return res.end();
  // }

  if (url === "/create-user") {
    let arr = [];
    req.on("data", (chunk) => {
      //this will listen for each data chunck
      arr.push(chunk);
    });
    req.on("end", () => {
      const parsedArr = Buffer.concat(arr).toString(); //this is used to get all the data from buffer means all collected chunck
      let message = parsedArr.split("=")[1]; // here we are getting actuall data after the = sign
      fs.writeFileSync("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  //👇👇👇👇 this will automatically on url given in form action becuase no condition will be face by this.
  res.setHeader("Content-Type", "text/html"); //in this we set the header of the response and tell the type of response
  res.write("<html>");
  res.write("<head><title>Form-input</title><head>");
  res.write(
    "<body><h1>These are users</h1> <ul><li>Hamza</li><li>usman</li><li>Ali</li></ul></body>"
  );
  res.write("</html>");
  return res.end();
};
module.exports = requestHandler;
