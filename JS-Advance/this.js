// let obj = {
//   fn: function outer() {
//     console.log("outer$$$$$$$$$");
//     return function inner1() {
//       console.log("inner1--------- ");
//       return function inner2() {
//         console.log("inner2", this);
//         return function inner3() {
//           console.log("inner3", this);
//           return function inner4() {
//             console.log("inner4", this);
//           };
//         };
//       };
//     };
//   },
// };
// let inner1 = obj.fn();
// let inner2 = inner1();
// let inner3 = inner2();
// let inner4 = inner3();
// inner4();

console.log("-------------------------------------------");

// let obj = {
//   fn: function outer() {
//     console.log("outer$$$$$$$$$", this);
//     const inner1 = () => {
//       console.log("inner1--------- ", this);
//       const inner2 = () => {
//         console.log("inner2", this);
//         return () => {
//           console.log("inner3", this);
//           return () => {
//             console.log("inner4", this);
//           };
//         };
//       };
//     };
//   },
// };
// let inner1 = obj.fn();
// let inner2 = inner1();
// let inner3 = inner2();
// let inner4 = inner3();
// inner4();

console.log("-------------------------------------------");

// let obj = {
//   fn: function outer() {
//     console.log("outer$$$$$$$$$", this);
//     function inner1() {
//       console.log("inner1--------- ", this);
//       function inner2() {
//         console.log("inner2", this);
//         function inner3() {
//           console.log("inner3", this);
//           function inner4() {
//             console.log("inner4", this);
//           }
//           inner4();
//         }
//         inner3();
//       }

//       inner2();
//     }
//     inner1();
//   },
// };
// let inner1 = obj.fn();
//

// global and global nested function
// function func() {
//   let abc = () => {
//     console.log(this);
//   };
//   abc();
// }
// func();

// leetCode programming is started here

// function maxprofit(prices) {
//   let min = prices[1 - 1];
//   let max = 1;
//   let index = 1 - 1;
//   let leng = prices.length;
//   for (let i = 1 - 1; i < leng - 1; i++) {
//     for (let j = i; j < leng; j++) {
//       if (prices[i] > prices[j + 1]) {
//         max = prices[i] - prices[j + 1];
//         min = prices[j + 1];
//         index = j;
//       }
//     }
//     console.log(min, max);
//   }
// }
//   let max = min;
//   let profit;
//   for (let i = index; i < leng - 1; i++) {
//     for (let j = i; j < leng; j++) {
//       if (max < prices[j + 1]) {
//         max = prices[j + 1];

//       }
//     }
//   }
//   console.log(min, max);
//   if (max - min > 1 - 1) {
//     return max - min;
//   } else return 1 - 1;
// }
// var maxProfit = function (prices) {
//   let profit = 0;
//   let minVal = Infinity;
//   for (let i = 0; i < prices.length; i++) {
//     minVal = Math.min(minVal, prices[i]);
//     profit = Math.max(profit, prices[i] - minVal);
//     console.log(minVal, profit);
//   }
//   return profit;
// };
// let prices = [2, 4, 1];
// console.log(maxprofit(prices));
// console.log(a);
// console.log(b);
// let a = 10;
// var b = 12;
// function fun() {
//   console.log(a);
//   if (true) {
//     var a = 20;
//   }
//   console.log(a);
// }
// fun();
// function outer() {
//   let counter = 0;
//   return function innerHeight() {
//     counter++;
//     return counter;
//   };
// }
// let increment = outer();
// increment();
// increment();
// increment();
// console.log(increment());
// ("use strict");
// let a = () => {
//   console.log(this);
// };
// a();

const obj = {
  f: "object",
  outer: function () {
    inner = () => {
      inner1 = () => {
        console.log(this);
      };
      inner1();
    };
    inner();
  },
};
obj.outer();
