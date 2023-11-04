console.log("-----String Methods----------");

//The length property returns the length of a string:

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length); //26 total no of the values in string

// --------------slice()----------
// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).

// Slice out a portion of a string from position 7 to position 13:
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);
// console.log(slice);

// it also take negative parameters and start from the end of the string

// --------------substring()----------
// The difference is that start and end values less than 0 are treated as 0 in substring().
// it includes starting and ending position of the string but slice will take the last index of the string
// let str = "Apple, Banana, Kiwi";
// let part = str.substring(1 - 1, 5);
// console.log(part);

// --------------substr()----------
// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
// Second parameter is length of the string
// let str = "Apple, Banana, Kiwi";
// let part = str.substr(1 - 1, 5);
// console.log(part);

// --------------replace()----------
// The replace() method replaces a specified value with another value in a string:
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);
