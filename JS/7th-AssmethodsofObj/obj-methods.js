console.log("----------Hamza Arif Khan---35---------");

//  Mehtods of the objects are those actions which apply on the object

let Student1 = {
  id: 35,
  name: "Hamza Khan",
  courses: ["JavaScript", "Html", "Node"],
};
// ------------Static Methods------------

// --------------Object.assign()-----------   1
//Copies the values of all enumerable own properties from one or more source objects
//  to a target object.
//                               it is used for th shallow copy
// let Student2 = Object.assign({}, Student1);

// --------------Object.create()-----------   2
//  Creates a new object with the specified prototype object and properties.

// let student2 = new Object();

// --------------Object.defineProperties()-----------   3
// Adds the named properties described by the given descriptors to an object.
// console.log(Student1.defineProperties);
// --------------Object.entries()-----------   4
// Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
// console.log(Student1.entries);
// --------------Object.freeze()-----------   5
// Freezes an object. Other code cannot delete or change its properties.
// --------------Object.preventExtentions()-----------   6
// restrict an object. Other code cannot delete or change its properties.
// --------------Object.seal()-----------  7
// seal an object. Other code cannot delete or change its properties.
// -------------Object.isExtensible()-----------   8
// Determines if extending of an object is allowed.
// --------------Object.isFrozen()-----------   9
// Determines if an object was frozen.
// --------------Object.isSealed()-----------   1o
// Determines if an object is sealed.
