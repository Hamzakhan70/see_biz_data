// console.log("First learn promise--------structure");
console.log("hamza before");
let result = true;
let myPromise = new Promise((myResolve, myReject) => {
  for (let i = 0; i < 20; i++) {
    console.log(i * 22 + 3);
  }
  if (result) myResolve("this is resolve");
  else myReject("this is reject--");
}); //promise is a object of js which encapsulate the producing and consuming code
myPromise.then(resolve, reject);

function resolve(value) {
  console.log(value);
}
function reject(error) {
  console.log(error);
}
// let count = 2930;
// while (count > 0) {
//   count--;
//   console.log(count);
// }
// function af() {
//   let a = 23;
//   console.log("hamza after" + a);
// }
// af();
// -----------------chaining of promise

// console.log("chaining of promise--------");
// let result = false;
// let myPromise1 = new Promise((myResolve, myReject) => {
//   if (result) myResolve("this is resolve");
//   else myReject("this is reject--");
// });

// // let myPromise2 = new Promise((myResolve, myReject) => {
// //   if (result) myResolve("this is resolve");
// //   else myReject("this is reject--");
// // });

// myPromise1.then(resolve).catch(reject);
// function resolve(value) {
//   console.log(value);
// }
// function reject(error) {
//   console.log(error);
// }
// const p1 = Promise.resolve("h8");
// const p2 = 23;
// const myPromise = new Promise((resolve, reject) => {
//   // setTimeout(() => {
//   resolve("foo");
//   // }, 300);
//   reject("error");
// });
// Promise.all([p1, p2, myPromise]).then((value) => {
//   console.log(value);
// });
// myPromise
//   .then((value) => `${value} and bar`)
//   .then((value) => `${value} and bar again`)
//   .then((value) => `${value} and again`)
//   .then((value) => `${value} and again`)
//   .then((value) => {
//     console.log(value);
//   })
// .catch((err) => {
//   console.error(err);
// });

// chaining in the promises

// function outer() {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve(1), 1000);
//   });
// }

// outer()
//   .then((result) => {
//     console.log(result);
//     return result * 2;
//   })
//   .then((result) => {
//     console.log(result);
//     return result * 2;
//   })
//   .then((result) => {
//     console.log(result);
//     return result * 3;
//   })
//   .then((result) => {
//     console.log(result);
//     return result * 3;
//   })
//   .then((result) => {
//     console.log(result);
//     return result;
//   });

// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   });
// }

// let promise = job(true);

// promise

//   .then(function (data) {
//     console.log(data);

//     return job(true);
//   })

//   .then(function (data) {
//     if (data !== "victory") {
//       throw "Defeat";
//     }

//     return job(true);
//   })

//   .then(function (data) {
//     console.log(data);
//   })

//   .catch(function (error) {
//     console.log(error);

//     return job(false);
//   })

//   .then(function (data) {
//     console.log(data);

//     return job(true);
//   })

//   .catch(function (error) {
//     console.log(error);

//     return "Error caught";
//   })

//   .then(function (data) {
//     console.log(data);

//     return new Error("test");
//   })

//   .then(function (data) {
//     console.log("Success:", data.message);
//   })

//   .catch(function (data) {
//     console.log("Error:", data.message);
//   });

// function job(delay) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       console.log("Resolving", delay);
//       resolve("done " + delay);
//     }, delay);
//   });
// }

// var promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);

// promise.then(function (data) {
//   console.log("All done");
//   data.forEach(function (text) {
//     console.log(text);
//   });
// });

// let p1 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 500, "p1");
// });

// let p2 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 1000, "p2");
// });

// let p3 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 1200, "p3");
// });

// let p4 = new Promise(function (resolve, reject) {
//   setTimeout(reject, 11300, "p4");
// });

// let p5 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 800, "p5");
// });

// let promise = Promise.all([p1, p2, p3, p4, p5]);

// promise

//   .then(function (data) {
//     data.forEach(function (data) {
//       cconsole.log(data);
//     });
//   })

//   .catch(function (error) {
//     console.error("error", error);
//   });

// var p = new Promise(function () {
//   return "OK";
// });

// var p2 = p.then(function (data) {
//   return data;
// });

// var p3 = p2.then(function (data) {
//   return data + " Bye";
// });

var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("OK");
  }, 2000);
});

p.then().then(function (data) {
  console.log(data);
});
