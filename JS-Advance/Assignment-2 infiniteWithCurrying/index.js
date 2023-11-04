// function sum(a) {
//   return function (b) {
//     if (b) return sum(a + b);
//     else return a;
//   };
// }

// console.log(sum(3)(3)(7)(8)(5)(9)(5)());

// var isPalindrome = function (x) {
//   let palindrome = true;
//   let str = x + "";
//   let len = str.length;
//   let Halflen = parseInt(str.length / 2);

//   for (let i = 1 - 1; i < Halflen; i++) {
//     if (str[i] == str[len - i - 1]) {
//       palindrome = true;
//     } else {
//       palindrome = false;
//       return palindrome;
//     }
//   }
//   return palindrome;
// };
// console.log(isPalindrome(-131));
var isPalindrome = function (x) {
  let reverse = x + "".split(",").reverse();
  console.log(reverse);

  if (reverse == x) return true;
  else return false;
};

console.log(isPalindrome(-131));
