//Differences and Practical of Differences
// Shallow Copy and Deep Copy
// Pass by Value and pass by References
// Muteables and immuteables
// Primitive and Non-Primitive

// Shallow copy is copy in which assign a first level values of the object and does not copy the nested values
let Student1 = {
  id: 35,
  name: "Hamza Khan",
  courses: ["JavaScript", "Html", "Node"],
};

//                                  Question # 1

// let Student2 = Student1; //****Both the objects are pointing to the same memory Address*******

//********** 1st method of the shallow copy   **********
// let Student2 = Object.assign({}, Student1);

//********** 2nd method of the shallow copy   **********
// let Student2 = { ...Student1 }; //********** use of Spread Operator   **********
// Student2.id = 22;
// console.warn(Student1); // **********  id=35   ****
// console.warn(Student2); // **********  id=22   ****
// ******************   They both have different space in memory    *******************

// In Shallow copy we cant be able to change object inside of the Object just like our example
// let Student2 = Object.assign({}, Student1);
// Student2.id = 22; //  **** it will change iD    *****
// Student1.courses[1] = "SQA"; //  **** it will change course    *****
// console.warn(Student1); // **********  id=35  BUT  courses: [ 'JavaScript', 'SQA', 'Node' ] ****
// console.warn(Student2); // **********  id=22 BUT  courses: [ 'JavaScript', 'SQA', 'Node' ]  ****

//      ******  course changed inside of the both becuase of Shallow copy ********

// Deep copy is copy in which new copy of the refrences inside of the object has been created

// let Student2 = JSON.parse(JSON.stringify(Student1));
// Student2.id = 22; //  **** it will change iD    *****
// Student2.courses[1] = "SQA"; //  **** it will change course    *****
// console.warn(Student1); // **********  id=35  NOW courses: [ 'JavaScript', 'Html', 'Node' ] ****
// console.warn(Student2); // **********  id=22 BUT  courses: [ 'JavaScript', 'SQA', 'Node' ]  ****

///////////////////////////Question # 2/////////////////
// Pass by Value and Pass by reference

//**                           Pass by VALUE                              */
// function pBVal(a, b) {
//   console.log("Inside Method");
//   a = 100;
//   b = 200;
//   console.log("var1 ==== " + a + "  var2 ===== " + b);
// }
// let a = 10;
// let b = 20;
// console.log("Before Call by Value Method");
// console.log("var1 ===== " + a + "  var2 ===== " + b);
// pBVal(a, b);
// console.log("After Call by Value Method");
// console.log("var1 ===== " + a + "  var2 ===== " + b);
// console.log(
//   "-------------in Pass by Value changes will be happen inside of copy----------"
// );

// //**                           Pass by REFERENCE                              */

// function callByReference(std) {
//   console.log("Inside Call by Reference Method");
//   std.id = 100;
//   console.log(std);
// }
// console.log("Before Call by Reference Method");
// console.log(Student1);
// callByReference(Student1);
// console.log("After Call by Reference Method");
// console.log(Student1);
// console.log(
//   "-------------in Pass by Value changes will be happen inside of original value----------"
// );

// ///////////////////////////Question # 3/////////////////
// // Immutables and Mutables

// //**                         IMMUTABLES                               */
// let a = "bus";
// let b = a; //     ***** it will make the copy of the a='bus'and store copy into the Stack *****
// a = "Bike";
// console.log(a);
// console.log(b);

// // *******    Both will take different space in the memory that's why Primitives are IMMUTABLEs   *******

// console.log(a == b); //    TRUE    ** both have the same value and different space  */

//**                           MUTABLES                              */

// let Student2 = Student1; // this is pass by REFERENCE so it is pointed to same location in memory

// Student2.id = 22; //  **** it will change iD    *****
// Student2.courses[1] = "SQA"; //  **** it will change course    *****
// console.warn(Student1); // **********  id=22  BUT courses: [ 'JavaScript', 'SQA', 'Node' ] ****
// console.warn(Student2); // **********  id=22 BUT  courses: [ 'JavaScript', 'SQA', 'Node' ]  ****
// Non Primitives are MUTABLES
// ///////////////////////////Question # 4/////////////////
// // Primitives and Non Primitives
// Seven Primitive Data types
// Number;
// null;
// String;
// Symbol;
// Boolean;
// BigInt;
// undefined;
// All primitives Data types are pass by value, immutables and store on the stack.

// Non-primitive are array,object,function, date and regex
// All the Non-primitive data types are mutables,pass by reference, and store on the Heap.
