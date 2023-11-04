let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log("---------pop()------------------------------- ");
// console.log(Array.pop());

// console.log("---------delete()------------------------------- ");
// delete leave empty item
// console.log(Array.length);
// delete Array[0];
// console.log(Array.length);
// console.log(Array);
// console.log("---------Slice()------------------------------- ");
// let newArray = Array.slice(2, 5);
// newArray[9][1] = 2;
// console.log(Array);
// console.log(Array.slice());
// console.log(Array);

// console.log("---------splice()------------------------------- ");
// console.log(Array.splice(2, 0, "l"));
// console.log(Array);
// console.log(Array.splice(2, 3));

// console.log("---------forEach()------------------------------- ");

// console.log(Array.forEach(myFunc));
// function myFunc(i, j) {
//   console.log(i * 2);
//   // i = i * 2;
//   // return i;
//   //   console.log(j + " : " + i);
// }
// console.log(Array);
// console.log("---------map()------------------------------- ");

// console.log(Array.map(myFunc));
// function myFunc(i, j) {
// if (i < 5) {
//   // i * 10;
//   return i * 10;
// }
// console.log(j + " : " + i);
// }
// console.log(Array);
// const numbers = [2, 4, 2, 1, 3, 5];
// const newArr = numbers.map((item, index, arr) => {
//   console.log("this is index===" + index);
//   console.log("this is val=" + item);
//   console.log("this is arr=====" + arr);
//   return;
// });
// console.log(newArr);
// let obj = {
//   arr1: [2, 5, 8],
//   arr2: [],
//   fun: function () {
//     this.arr2 = this.arr1.map((item) => {
//       return item * 2;
//     });
//     // this.arr1 = this.arr2;
//   },
// };
// obj.fun();
// obj.fun();
// obj.fun();
// obj.fun();
// console.log(obj);
// console.log("---------entries()------------------------------- ");
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();
// for (let i of f) {
//   console.log(i);
// }
// ------------fill()--------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.fill("kiwi"));

// ------------from()--------
// let text = "ABCDEFG";
// const myArr = Array.from(text);
// console.log(myArr);
// ---------includes()---------
// let text = ["a", "b", "c"];

// const a = text.includes("an");
// console.log(a);
// console.log(text.reduce());

// ================================= for of and for in
// let obj = {
//   a: "A class",
//   b: "B class",
//   c: "C class",
// };
// for (let i in obj) {
//   console.log(obj[i]);
// }

// =========================multi dimentional Array
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[1][1]); // 5, the central element
///////====================

// indexOf, lastIndexOf, findIndex, findLastIndex === all return  -1   in case of failure
// find() it return undefined in case of falsy

//////////=================
// ========================find()
// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];

// let user = users.find((item, index, arr) => {
//   if (item.id == 1) {
//     console.log("this is index" + index);
//     // console.log(`this is value ${item}`);
//     console.log("this is value", item);
//     // console.log(item);
//     console.log("this is array", arr);
//   }
//   return index;
// });

// console.log(user);

// =================================Sort()
//
// -========= it sort the original array and also return the sorted array but we ignore the return value============
//
// let arr2 = ["j", "d", "r", "e", "w", "q", "o"];
// let arr3 = ["abcdesvd", "abcdefglk", "abcdefgh"];
// let arr4 = ["hamza"];
// console.log(arr3.sort((a, b) => a - b));

// ======================================= reverse()

// let arr1 = [1, 2, 3, 4, 5];

// console.log(arr1.reverse());
// console.log(arr1);

// ======================================= split()

// =============   exercise by js.point
//======= 1-
// let str = "background-color";
// function fun(str) {
//   let arr = [];
//   arr = str.split("-");
//   let n = arr.map((item, index) => {
//     if (index > 0) {
//       let camel = item[0].toUpperCase();
//       return camel + item.slice(1);
//     } else {
//       return item;
//     }
//   });
//   n.join(",");
//   console.log(n.join(""));
// }

// fun(str);
//

// 2-
// let arr = [3, 5, 2, 1, 6, 8];
// function filterArray(arr) {
//   let copy = arr.map((item, index, arr) => {
//     return item;
//   });
//   let filtered = copy.filter((item) => {
//     if (item >= 2 && item <= 6) return item;
//   });
//   console.log(arr);
//   console.log("filtered : ", filtered);
// }
// filterArray(arr);

//  3-
// let arr = [3, 5, 2, 1, 6, 8];
// let sorted = arr.sort((a, b) => b - a);
// console.log(sorted);
let a;
var c;
a = 9;
