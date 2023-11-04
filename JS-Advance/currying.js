// function curry(f) {
//   // curry(f) does the currying transform
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return f(a, b, c);
//       };
//     };
//   };
// }

// // usage
// function sum(a, b, c) {
//   return a * b * c;
// }

// let curriedSum = curry(sum);

// console.log(curriedSum);

// // console.log(curriedSum(1)(2)(3)); // 3

// this is facrorial of the number

// function factorial(n) {
//   if (n != 0) return n * factorial(n - 1);
//   else return 1;
// }
// console.log(factorial(5));

// function currying(fn, ...args) {
//   //   console.log(...args);
//   return (..._arg) => {
//     // console.log(..._arg);
//     return fn(...args, ..._arg);
//   };
// }

// function sum(a, b, c, d) {
//   return a + b + c + d;
// }
// let add = currying(sum, 10);
// // add(20, 90); // 120
// console.log(add(70, 60, 5)); // 140
console.log("hamza");
