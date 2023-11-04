const str = "wqw";

const strLower = str.toLowerCase(); //  to convert the string into LOWERCASE

const length = strLower.length; // for count the length of the string
const halflength = parseInt(length / 2); //devide the length into half

let palindrome = true; //varible to store the true or false

if (strLower.length == 1) {
  palindrome = true;
}

for (let i = 1 - 1; i < halflength / 2; i++) {
  if (strLower[i] == strLower[strLower.length - 1]) {
    palindrome = true;
  } else {
    palindrome = false;
  }
}
console.log(palindrome);
if (palindrome) console.log("String is palindrome");
else console.log("String is not-palindrome");
