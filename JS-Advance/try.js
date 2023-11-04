// qqqqqqqqqqq1111111111
// (() => {
//   var count = 0;
//   let id = setInterval(() => {
//     console.log(++count);
//     if (count == 10) {
//       console.log("Done!");
//       clearInterval(id);
//     }
//   }, 1000);
// })();
// =======================

// function fun(...infin) {
//   let result = [];
//   infin.forEach((arr) => {
//     arr.forEach((item) => {
//       if (!result.includes(item)) {
//         result.push(item);
//       }
//     });
//   });
//   console.log(result);
//   return result;
// }
// fun([1, 2], [2, 3], [3, 4]);

// =====================================

// let count = 0;
// let a = setInterval(() => {
//   count++;
//   if (count == 10) {
//     clearInterval(a);
//     console.log("done");
//   }
//   console.log(count);
// }, 1000);
// setInterval(() => {
//   console.log("this is set time out");
// }, 1300);

function fun() {
  console.log("this si sconso");
  document.getElementById("btn").addEventListener("click", function func() {
    const b = document.getElementById("btn");
    b.style.color = "red";
  });
}
