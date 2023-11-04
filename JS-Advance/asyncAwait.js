// ------------------
// Difference between procedural callbacks promises and asyncAwait
// -------------------//
// -----------------------These are simple callbacks actually callback Hell
// function getUser(userId, callback) {
//   console.log("Get user from the database.");
//   setTimeout(() => {
//     callback({
//       userId: userId,
//       username: "john",
//     });
//   }, 1000);
// }
// function getServices(user, callback) {
//   console.log(`Get services of  ${user.username} from the API.`);
//   setTimeout(() => {
//     callback(["Email", "VPN", "CDN"]);
//   }, 2 * 1000);
// }
// function getServiceCost(services, callback) {
//   console.log(`Calculate service costs of ${services}.`);
//   setTimeout(() => {
//     callback(services.length * 100);
//   }, 3 * 1000);
// }

// ----------------with callBacks

//  getUser(70, (obj) => {
//   getServices(obj, (arr) => {
//     getServiceCost(arr, (display) => {
//       console.log(display);
//     });
//   });
// });

// ----------------with Promises

// function getUser(userId) {
//   return new Promise((resolve, reject) => {
//     console.log("Get user from the database.");
//     setTimeout(() => {
//       resolve({ userId: userId, username: "john" });
//     }, 1000);
//   });
// }
// function getServices(user) {
//   return new Promise((resolve, reject) => {
//     console.log(`Get services of  ${user.username} from the API.`);
//     setTimeout(() => {
//       resolve(["Email", "VPN", "CDN"]);
//     }, 2 * 1000);
//   });
// }
// function getServiceCost(services) {
//   return new Promise((resolve, reject) => {
//     console.log(`Calculate service costs of ${services}.`);
//     setTimeout(() => {
//       resolve(services.length * 100);
//     }, 3 * 1000);
//   });
// }

// this is from the promises

// getUser(100)
//   .then(getServices)
//   .then(getServiceCost)
//   .then(console.log)
//   .catch("error");

// ----------------with asyc await

// function getUser(userId) {
//   return new Promise((resolve, reject) => {
//     console.log("Get user from the database.");
//     setTimeout(() => {
//       resolve({ userId: userId, username: "john" });
//       //   return { userId: userId, usename: "john" };
//     }, 1000);
//   });
// }
// function getServices(user) {
//   return new Promise((resolve, reject) => {
//     console.log(`Get services of  ${user.username} from the API.`);
//     setTimeout(() => {
//       resolve(["Email", "VPN", "CDN"]);
//     }, 2 * 1000);
//   });
// }
// function getServiceCost(services) {
//   return new Promise((resolve, reject) => {
//     console.log(`Calculate service costs of ${services}.`);
//     setTimeout(() => {
//       resolve(services.length * 100);
//     }, 3 * 1000);
//   });
// }

// async function mySelf() {
//   try {
//     let user = await getUser(100);
//     let services = await getServices(user);
//     let cost = await getServiceCost(services);
//     console.log(`The service cost is ${cost}`);
//   } catch {
//     console.log("error");
//   }
// }
// mySelf();

function outer(name) {
  this.name = name;
  const inner = () => {
    const mostinner = () => {
      return `${this.name}`;
    };
    mostinner();
  };
  inner();
}
out = new outer("hamza");
console.log(out);
