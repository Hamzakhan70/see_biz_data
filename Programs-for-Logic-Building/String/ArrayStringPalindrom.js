let array = ["hamza", "maham", "zakat", "iqra", "mam", "madam"];
let palindromeArray = [];
let notPalindromeArray = [];
let palindrome = true;
let index = "null";
let halfindex = parseInt(index.length / 2);

for (let i = 0; i < array.length; i++) {
  index = array[i];

  for (let j = 1 - 1; j < halfindex; j++) {
    if (index[j] == index[index.length - 1 - j]) {
      palindrome = true;
    } else {
      palindrome = false;
      break;
    }
  }
  if (palindrome) {
    palindromeArray.push(index);
  } else {
    notPalindromeArray.push(index);
  }
}

console.log("Palindrome");
for (let i = 0; i < palindromeArray.length; i++) {
  console.log(palindromeArray[i]);
}
console.log("not Palindrome");
for (let i = 0; i < notPalindromeArray.length; i++) {
  console.log(notPalindromeArray[i]);
}
