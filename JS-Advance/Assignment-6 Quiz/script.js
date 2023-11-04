// //////////////////////////////////////-----------------------------
let array = [
  {
    question: "question 1",
    options: ["a", "b", "c", "d"],
    correct: "a",
  },
  {
    question: "question 2",
    options: ["a", "b", "c", "d"],
    correct: "b",
  },
  {
    question: "question 3",
    options: ["a", "b", "c", "d"],
    correct: "c",
  },
];
let count = 0;

// ==============uguhbuhj============
document.getElementById("start").addEventListener("click", start);
function start() {}
// ==============uguhbuhj============

// let QuesArray = [
//   "Correct spell of '1'",
//   "Correct spell of '2'",
//   "Correct spell of '3'",
//   "Correct spell of '4'",
// ];
// let AnsArray = [
//   "1-ONE    2-TWO    3-THREE  4-FOUR ",
//   "1-ONE    2-TWO    3-THREE  4-FOUR ",
//   "1-ONE    2-TWO    3-THREE  4-FOUR ",
//   "1-ONE    2-TWO    3-THREE  4-FOUR ",
// ];
// let count = 0;
// let result = 0;
// document.getElementById("forward").addEventListener("click", forward);
// document.getElementById("backward").addEventListener("click", backward);
// function forward() {
//   document.getElementById("question").innerHTML = QuesArray[count];
//   document.getElementById("answer").innerHTML = AnsArray[count];
//   let ele = document.getElementsByName("Sorting");
//   let way;
//   for (i = 0; i < ele.length; i++) {
//     if (ele[i].checked) {
//       way = ele[i].value;
//       console.log("you select " + way);
//     }
//   }
//   calculator(count, way);

//   count++;
//   //   console.log("forward" + count);
//   if (count > QuesArray.length - 1) {
//     count = 0;
//   }
// }
// function backward() {
//   document.getElementById("question").innerHTML = QuesArray[count];
//   document.getElementById("answer").innerHTML = AnsArray[count];
//   let ele = document.getElementsByName("Sorting");
//   let way;
//   for (i = 0; i < ele.length; i++) {
//     if (ele[i].checked) {
//       way = ele[i].value;
//       console.log("you select " + way);
//     }
//   }
//   calculator(count, way);
//   count--;
//   //   console.log("backward" + count);
//   if (count < 0) {
//     count = 3;
//   }
//   //   console.log("backward-after" + count);
// }
// function calculator(quesNo, ans) {
//   console.log("count and way submit" + [count, ans]);
//   if (quesNo == ans) {
//     result++;
//     console.log("inside calculator" + result);
//   }
// }
// document.getElementById("submit").addEventListener("click", submit);
// function submit() {
//   document.getElementById("forward").style.visibility = "hidden";
//   document.getElementById("backward").style.visibility = "hidden";
//   document.getElementById("display").style.visibility = "visible";
//   //   let ele = document.getElementsByName("Sorting");
//   //   let way;
//   //   for (i = 0; i < ele.length; i++) {
//   //     if (ele[i].checked) {
//   //       way = ele[i].value;
//   //     }
//   //   }
//   //   if (way) {
//   //     calculator(count, way);
//   //   }
//   console.log("count and way submit" + [count, way]);
//   document.getElementById("display").innerHTML =
//     "Test is over your score is: " + result;
// }
