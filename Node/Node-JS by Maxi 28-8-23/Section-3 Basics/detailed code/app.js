// const http = require("http");
// //http is a module which request to create the server and require is a method which is exposed by the node.js
// // by using this node method we can import all node modules

// // even we can provides the path inside the require to get form our file.

// // ==================== HOW TO CREATE OUR OWN SERVER=================  1
// const http = require("http");
// //http module porvided by the node it has many methods one of the them is createserver which take function and return the server.
// const server = http.createServer((req, res) => {
//   // createServer is a function which is known as a request listener
//   //   //   and it is used to get tha data from the req and send the response.
//   console.log(req);
// });
// server.listen(1000);
// // ============================================================

// // ==================== HOW TO SEND RESPONSE=================  2
// const http = require("http");
//http module porvided by the node it has many methods one of the them is createserver which take function and return the server.
// const server = http.createServer((req, res) => {
// createServer is a function which is known as a request listener
// and it is used to get tha data from the req and send the response.

//   res.write("<html>");
//   res.write("<head><title> First Page </title><head>");
//   res.write("<body><h1>this is out first response</h1></body>");
//   res.write("</html>");
//   return res.end(); //return need here to exit from the function
// });
// server.listen(3000);
// // ============================================================

// // ==================== HOW TO ROUTE ON THE BASE OF *URL*=================  3
// const http = require("http");
// //http module porvided by the node it has many methods one of the them is createserver which take function and return the server.
// const server = http.createServer((req, res) => {
//   // createServer is a function which is known as a request listener
//   //   and it is used to get tha data from the req and send the response.
//   const url = req.url;
//   if (url === "/") {
//     res.write("<html>");
//     res.write("<head><title>Form-input</title><head>");
//     res.write("<body><h1>this is slash / page</h1></body>");
//     res.write(
//       // ACTION creat-user will open the new page with url /create-users
//       '<body><form action="/create-user" method="POST"><label>User Name:</label><input type="text" name="User Name"><button type="submit">send</button></form></body>'
//     );
//     res.write("</html>");
//     return res.end();
//   }
//   //👇👇👇👇 this will automatically on url given in form action becuase no condition will be face by this.
//   res.write("<html>");
//   res.write("<head><title>Form-input</title><head>");
//   res.write(
//     "<body><h1>These are users</h1> <ul><li>Hamza</li><li>usman</li><li>Ali</li></ul></body>"
//   );
//   res.write("</html>");
//   return res.end();
// });
// server.listen(3000);
// ============================================================

// // ==================== HOW TO REDIRECT TO THE *URL* ---=> '/'=================  4
// const http = require("http");
// const fs = require("fs");
// //http module porvided by the node it has many methods one of the them is createserver which take function and return the server.
// const server = http.createServer((req, res) => {
//   // createServer is a function which is known as a request listener
//   //   and it is used to get tha data from the req and send the response.
//   const url = req.url;
//   const method = req.method;

//   if (url === "/") {
//     res.write("<html>");
//     res.write("<head><title>Form-input</title><head>");
//     res.write("<body><h1>this is slash / page</h1></body>");
//     res.write(
//       // ACTION creat-user will open the new page with url /create-users
//       '<body><form action="/create-user" method="POST"><label>User Name:</label><input type="text" name="User Name"><button type="submit">send</button></form></body>'
//     );
//     res.write("</html>");
//     return res.end();
//   }
//   if (url === "/create-user" && method == "POST") {
//     fs.writeFileSync("message.txt", "DUMMY ENTRY");
//     res.statusCode = 302;
//     res.setHeader("Location", "/");
//     return res.end();
//   }
//   //👇👇👇👇 this will automatically on url given in form action becuase no condition will be face by this.
//   res.write("<html>");
//   res.write("<head><title>Form-input</title><head>");
//   res.write(
//     "<body><h1>These are users</h1> <ul><li>Hamza</li><li>usman</li><li>Ali</li></ul></body>"
//   );
//   res.write("</html>");
//   return res.end();
// });
// server.listen(3000);
// ============================================================

// ==================== HOW TO PARSE THE REQUEST AND INPUT DATA FROM THE FORM=================  5
const http = require("http");
const routes = require("./Routes");
const server = http.createServer(routes);
server.listen(3000);

// ============================================================
