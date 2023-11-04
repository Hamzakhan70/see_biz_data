const fs = require("fs"); //it include Node.js filesystem module
function requestHandler(req, res) {
  // whenever request is generated it will provide to objects
  //req is for requesting and res is for response
  // this will create the new server
  const url = req.url;
  const method = req.method;
  //   above i fetch two things from the request from the http object
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Form-input</title><head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  //when we click on submit button url will be changed to [/message] by accessing this URL we will store data in the file

  //    Redirecting request : means go back to the '/'

  if (url === "/message" && method === "POST") {
    // for parsing the data entered by the user
    let arr = [];
    req.on("data", (chunck) => {
      arr.push(chunck);
    });
    req.on("end", () => {
      let parsedArr = Buffer.concat(arr).toString();
      const message = parsedArr.split("=")[1];
      // fs.writeFileSync("message.txt", message); sync block the execution of upcoming block untill it will not complete this line execution
      // problem is that if
      fs.writeFileSync("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
    // --------
    res.setHeader("Content-Type", "text/html"); //in this we set the header of the response and tell the type of response
    res.write("<html>");
    res.write("<head><title>Sever Node.js</title><head>");
    res.write("<body> <h1>This is from the Node.JS</h1></body>");
    res.write("</html>");
    res.end(); //after
  }
}

module.exports = requestHandler;

// alternate metod

// module.exports = {
//   someText: "hard coded text",
//   handler: requestHandler,
// };

// alternate method

// module.exports.handler=requestHandler;
// module.exports.someText='i have added some code';

// alternate method ....shorcut provided by the node

// exports.handler = requestHandler;
// exports.someText = "i have added some code";
