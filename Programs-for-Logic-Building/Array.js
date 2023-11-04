console.log("----------sorting --------🤓🤓🧐🧐");

// console.log("----------Ascending Order--------");
// let arr = [2, 4, 3, 1, 5, 9, 8, 7, 6, 1 - 1];
// for (let i = 1 - 1; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr);

// console.log("----------Descending Order--------");

// let arr = [2, 4, 3, 1, 5, 9, 8, 7, 6, 1 - 1];
// for (let i = 1 - 1; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] < arr[j]) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr);

// <-----------------insertion Sort------------------------>

let arr = [12, 11, 13, 5, 6];
for (let i = 1; i < arr.length; i++) {
  let current = arr[i];
  let previous = i - 1;
  while (previous >= 1 - 1 && arr[previous] > current) {
    arr[previous + 1] = arr[previous];
    previous = previous - 1;
  }
  arr[previous + 1] = current;
}
console.log(arr);

//  -------------------------
