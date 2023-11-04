console.log("Hamza Arif Khan 35");

console.log("---------------Sparse Array Methods------------");

//              <-----------Array Method # 1------------------>
// The concat() method is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.
// returns Shallow copy of new Array
// const array1 =  [{name:"xyz"},[1,2,34],true,"4","5"];
// const array2 =  [{name:"xyz"},[1,2,34],true,"4","5"];
// const array3 = array1.concat(array2);

// console.log(array3); // Expected output: Array [ [{name:"xyz"},[1,2,34],true,"4","5", [{name:"xyz"},[1,2,34],true,"4","5"]

//              <-----------Array Method # 2------------------>
// The copyWithin() method shallow copies part of an array
// to another location in the SAME ARRAY and returns it without modifying its length.
//copy 2nd index value and start new array from 2nd index

// const array1 =  [{name:"xyz"},[1,2,34],true,"4","5"];

// Copy to index 0 the element at index 3 to end
// console.log(array1.copyWithin(3, 0));
// Expected output: Array  [{name:"xyz"},[1,2,34],true,"4","5",{name:"xyz"},[1,2,34]];

//              <-----------Array Method # 3------------------>
// Every() :>its depends upon another method which check the condition
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// It returns a Boolean value.
// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));

// it is not suitable for our Array

//              <-----------Array Method # 4------------------>
// flat():>The flat() method creates a new array with all sub-array elements
//  concatenated into it recursively up to the specified depth.

// const arr1 = [{ name: "xyz" }, [1, 2, 34], true, "4", "5"];

// console.log(arr1.flat());
// // Expected output: Array [{name:"xyz"},1,2,34,true,"4","5"];

//              <-----------Array Method # 5------------------>
// forEach()
//The forEach() method executes a provided function once for each array element.

// const array1 = [{ name: "xyz" }, [1, 2, 34], true, "4", "5"];
// array1.forEach((element) => console.log(element));

// Expected output: {name: 'xyz' }
// Expected output: [ 1, 2, 34 ]
// Expected output: true
// Expected output: 4
// Expected output: 5

//              <-----------Array Method # 6------------------>
// indexOf()
// The indexOf() method returns the first index at
// which a given element can be found in the array, or -1 if it is not present.
// const beasts = [{ name: "xyz" }, [1, 2, 34], true, "4", "5"];

// console.log(beasts.indexOf("true"));
// Expected output: 2

//              <-----------Array Method # 7------------------>
// lastIndexOf()
// The lastIndexOf() method returns the last index at which a given element can be
//  found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

// const beasts = [{ name: "xyz" }, [1, 2, 34], true, "4", "5"];

// console.log(beasts.indexOf("true"));
// Expected output: 4

//              <-----------Array Method # 8------------------>
// map()
// The map() method creates a new array populated with the results of
// calling a provided function on every element in the calling array.
// const array1 = [{ name: "xyz" }, [1, 2, 34], true, "4", "5"];

// // Pass a function to map
// const map1 = array1.map((x) => x * 2);
// console.log(map1); // expected out put [ NaN, NaN, 2, 8, 10 ] BCZ * WORK FOR NUMBER

//              <-----------Array Method # 8------------------>
// Array reduce method pending
//              <-----------Array Method # 9------------------>
// Reverse The reverse() method reverses an array in place
// and returns the reference to the same array. MUTATE THE ORIGINAL ARRAY

// To reverse the elements in an array without mutating the original array, use toReversed().
// const array1 = [{ name: "xyz" }, [1, 2, 34], true, "4", "5"];
// console.log("array1:", array1);
// // Expected output: "array1:" Array [{ name: "xyz" }, [1, 2, 34], true, "4", "5"];

// const reversed = array1.reverse();
// console.log("reversed:", reversed);

//              <-----------Array Method # 1O------------------>
// The slice() method returns a shallow copy of a portion of an array into a new array object selected
// from start to end (end not included) where start and end represent the index of items in that array.
// The original array will not be modified.  NOT MUTATE THE ORIGINAL

// const animals = [{ name: "xyz" }, [1, 2, 34], true, "4", "5"];
// console.log(animals.slice(1, 5));
// // Expected output: Array [[1, 2, 34], true, "4"]

// console.log(animals.slice(2, -1));
// // Expected output: Array [true, "4"]

//              <-----------Array Method # 11------------------>
// sum() pending

//              <-----------Array Method # 12------------------>
// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted.
// The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.
// To sort the elements in an array without mutating the original array, use toSorted().
// IT IS NOT SUITABLE FOR OUR ARRAY WORKS ON NUMBER AND ALPHABETS
//              <-----------Array Method # 13------------------>
// The splice() method changes the contents of an array
// by removing or replacing existing elements and/or adding new elements in place.
// To create a new array with a segment removed and/or replaced
// without mutating the original array, use toSpliced().

// const array1 = [{ name: "xyz" }, [1, 2, 34], true, "4", "5"];
// array1.splice(1 - 1, 1, "99");
// // Replaces 1 element at index 4
// console.log(array1); //["99", [1, 2, 34], true, "4", "5"];

//              <-----------Array Method # 14------------------>

// Length is a property not a method i think so please clear it sir

// const array1 = [{ name: "xyz" }, [1, 2, 34], true, "4", "5"];
// let size = array1.length;

//              <-----------Array Method # 15------------------>
// toString():> return a new string with all array elements

// const array1 = [{ name: "xyz" }, [1, 2, 34], true, "4", "5"];
// console.log(array1.toString());//[object Object],1,2,34,true,4,5

//              <-----------Array Method # 16------------------>
// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:

// const array1 = [{ name: "xyz" }, [1, 2, 34], true, "4", "5"];
// console.log(array1.join("*")); //[object Object]*1*2*34*true*4*5

//              <-----------Array Method # 17------------------>
// The pop() method removes the last element from an array:
// The pop() method returns the value that was "popped out":

// const array1 = [{ name: "xyz" }, [1, 2, 34], true, "4", "5"];
// console.log(array1.pop()); //5

//              <-----------Array Method # 18------------------>
// The push() method adds a new element to an array (at the end):
// The push() method returns the new array length:

// const array1 = [{ name: "xyz" }, [1, 2, 34], true, "4", "5"];
// console.log(array1.push("99")); //6

//              <-----------Array Method # 19------------------>

// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// The shift() method returns the value that was "shifted out":

// const array1 = [{ name: "xyz" }, [1, 2, 34], true, "4", "5"];
// console.log(array1.shift()); //{ name: "xyz" }'

//              <-----------Array Method # 2o------------------>

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// The unshift() method returns the new array length:

// const array1 = [{ name: "xyz" }, [1, 2, 34], true, "4", "5"];
// console.log(array1.unshift("a")); //6

//              <-----------Array Method # 21------------------>
// Array elements can be deleted using the JavaScript operator delete.   delete is OPERATOR
// it will make the deleted index undefined
// const array1 = [{ name: "xyz" }, [1, 2, 34], true, "4", "5"];
// delete array1[3];
// console.log(array1[3]); //undefined
