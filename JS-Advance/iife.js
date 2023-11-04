// const counter = (function () {
//   var count = 0;
//   return function () {
//     console.log(count);
//     count += 1;

//     return count;
//   };
// })();
// console.log(counter());

// let fun = (() => {
//   var count = [83, 12, 7];
//   function display() {
//     console.log("hamza");
//   }
//   return {
//     obj: () => {
//       display();
//     },
//   };
// })();
// console.log(fun.obj);

// const iifeContainer = function () {
//   /**
//    * private members => these are only accesible inside the scope IIFE scope
//    */
//   const fruits = ["Apple", "Banana", "Mango", "Orange"];

//   const _print = (data) => {
//     console.log("Inventory: ", data.toString());
//     // console.log("hamza");
//   };

//   const _addOne = (item) => {
//     fruits.push(item);
//   };
//   /**
//    * public members
//    */
//   return {
//     getInventory: () => _print(fruits),
//     addInventory: (item) => _addOne(item),
//   };
// };
// let value = iifeContainer();
// // console.log(value);
// value.getInventory();
// value.addInventory("Cherry");
// value.getInventory();

// -----------------------------------------------

const iifeContainer = (() => {
  /**
   * private members => these are only accesible inside the scope IIFE scope
   */
  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  const _print = (data) => {
    console.log("Inventory: ", data.toString());
  };

  const _addOne = (item) => {
    fruits.push(item);
  };
  /**
   * public members
   */
  return {
    a: 9,
    // getFruits: console.log(fruits.push("jamshed")),
    // getFruits: console.log(fruits),
    getFruits: () => _print(fruits),
    addFruits: (item) => _addOne(item),
  };
})();

// iifeContainer.getFruits;
iifeContainer.addFruits("Cherry");
iifeContainer.getFruits;
// iifeContainer.a = 8888;
// console.log(iifeContainer.a);
