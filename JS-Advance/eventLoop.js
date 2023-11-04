// console.log("this");
// function getUsers(callback) {
//   setTimeout(() => {
//     callback("i am file");
//   }, 1000);
// }

// function findUser(callback) {
//   getUsers((file) => {
//     console.log("downloading..." + file);
//     callback("done");
//   });
// }

// findUser(console.log);
setTimeout(() => {
  console.log("i am file");
}, 0);

// function a1() {
//   console.log("i am after1");
// }
// a1();
// function a2() {
//   console.log("i am after2");
// }
// a2();
// function a3() {
//   console.log("i am after3");
// }
// a3();
// function a4() {
//   console.log("i am after4");
// }
// a4();
// function a5() {
//   console.log("i am after5");
// }
// a5();
// function a6() {
//   console.log("i am after6");
// }
// a6();
// function a7() {
//   console.log("i am after7");
// }
// a7();
// function a8() {
//   console.log("i am after8");
// }
// a8();
// function a9() {
//   console.log("i am after9");
// }
// a9();
// function a10() {
//   console.log("i am after10");
// }
// a10();

let count = 1009;
while (count > 0) {
  count--;
  console.log(count);
}
console.log("i am also after long while");
