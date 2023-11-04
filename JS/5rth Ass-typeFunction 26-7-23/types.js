console.log("---------Hamza Arif khan 35---------------------");

// ---------------Function Statement-----------------------------ES5
// function func() {
//   console.log("This is function Statement");
// }
// func();
// it does not need ; at the end becuase it is not  JS declaration execution statement it only executeable statement

// ---------------Function expression-----------------------------ES6
// const func = function () {
//   return "This is Function Expression";
// };
// it is always const value
// we can convert function expression into Arrow function

// ---------------Arrow Function -----------------------------ES6
// const abc = () => "This is Arrow Funciton";
// it is not well suited for object method
//They are not hoisted
// use always var for them becuase expression always get var

//we can a do selfcall to only function expression not declaration

// ---------------Annonymous Function and IIFE-----------------------------ES6
// (function () {
//   let x = "Hello!!";
// })();
