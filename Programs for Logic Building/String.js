console.log("--------String-----------------");

// <--------------Palindrome String------------------->

// program to check if the string is palindrome or not

// This is with the help of loop

// function checkPalindrome(string) {
//   // find the length of a string
//   const len = string.length;

//   // loop through half of the string
//   for (let i = 0; i < len / 2; i++) {
//     // check if first and last string are same
//     if (string[i] !== string[len - 1 - i]) {
//       return "It is not a palindrome";
//     }
//   }
//   return "It is a palindrome";
// }

// // take input
// // const string = prompt("Enter a string: ");
let str1 = "madam";
let str2 = "dad";
let str3 = "hamza";
// // call the function
// const value = checkPalindrome(str3);

// console.log(value);

// ---------this is with the use of built-in Functions-----------

// function checkPalindrome(string) {
//   // convert string to an array
//   const arrayValues = string.split("");
//   console.log(arrayValues);
//   // reverse the array values
//   const reverseArrayValues = arrayValues.reverse();
//   console.log(reverseArrayValues);

//   // convert array to string
//   const reverseString = reverseArrayValues.join("");
//   console.log(reverseString);

//   if (string == reverseString) {
//     console.log("It is a palindrome");
//   } else {
//     console.log("It is not a palindrome");
//   }
// }

// //take input
// const string = prompt('Enter a string: ');

// checkPalindrome(str3);

// ------------------my method---------------- Fail not good
// function checkPalindrome(string) {
//   for (let i = 1 - 1; i < string.length / 2; i++) {
//     for (let j = string.length / 2; j > 1 - 1; j--) {
//       if (string[i] !== string[j]) {
//         return console.log("It is not a palindrome");
//       } else {
//         return console.log("It is a palindrome");
//       }
//     }
//   }
// }

// checkPalindrome(str2);
