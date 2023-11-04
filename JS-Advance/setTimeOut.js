console.log("start");
console.log("i am before all the set time out");
setTimeout(welcome, 1000);
setTimeout(welcome2, 2000);
setTimeout(welcome3, 1000);
setTimeout(welcome4, 0);
function welcome() {
  console.log(" i am 1000ms late");
}
function welcome2() {
  console.log(" i am 2000ms late");
}
function welcome3() {
  console.log(" i am 3000ms late");
}
function welcome4() {
  console.log(" i am 4000ms late");
}
console.log("i am after all the set time out");

console.log("end");

function h() {
  myFunction("I love You !!!");
}
