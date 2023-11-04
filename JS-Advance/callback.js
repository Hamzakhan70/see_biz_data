// function download(url) {
//   setTimeout(() => {
//     // script to download the picture here
//     console.log(`Downloading ${url} ...`);

//     // process the picture once it is completed
//     process(url);
//   }, 1000);
// }

// function process(picture) {
//   console.log(`Processing ${picture}`);
// }

// let url = "https://wwww.javascripttutorial.net/pic.jpg";
// download(url);

// let success = false;

// function getUsers() {
//   return new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     if (success) {
//       resolve([
//         { username: "john", email: "john@test.com" },
//         { username: "jane", email: "jane@test.com" },
//       ]);
//     } else {
//       reject("Failed to the user list");
//     }
//     // }, 1000);
//   });
// }

// function onFulfilled(users) {
//   console.log(users);
// }
// function onRejected(error) {
//   console.log(error);
// }

// const promise = getUsers();
// // console.log(promise);
// promise.catch(onFulfilled);

// function abc(a) {
//   a();
//   console.log("a");
//   a();
// }
// abc(() => {
//   console.log("i am arrow");
// });

// console.log("code by sir");

// // function
// function greet(name, callback) {
//     callback();
//     console.log('Hi' + ' ' + name);
// }
// ​
// // callback function
// function callMe() {
//     console.log('I am callback function');
// }
// ​
// // passing function as an argument
// greet('Peter', callMe);
// const arr =[0,1,2,3,4,5,6,7,8,9,10,11,12]
// function evenNumbers(){
//     const getEvenNumbers = arr.filter(function(num){
//         return num%2==0
//     })
// }
// function multiplication(){
// }
// ​
// function filter(numbers) {
//     let results = [];
//     for (const number of numbers) {
//       if (number % 2 != 0) {
//         results.push(number);
//       }
//     }
//     return results;
//   }
//   let numbers = [1, 2, 4, 7, 3, 5, 6];
//   console.log(filter(numbers));
// ​
// ​
// // function isOdd(number) {
// //     return number % 2 != 0;
// //   }

// //   function filter(numbers, fn) {
// //     let results = [];
// //     for (const number of numbers) {
// //       if (fn(number)) {
// //         results.push(number);
// //       }
// //     }
// //     return results;
// //   }
// //   let numbers = [1, 2, 4, 7, 3, 5, 6];
// //   console.log(filter(numbers, isOdd));​
// const posts = [
//   {id:1, title:"Post One", body:"This is Post One"},
//   {id:2, title:"Post Two", body:"This is Post Two"},
//   {id:3, title:"Post Three", body:"This is Post Three"},
// ];
// ​
// function getAllPost(){
//   let output="";
//   setTimeout(function(){

//    posts.forEach(function(post,index){
//     output+=`<li>${index}:${post.title}<li>`
//    }
//    )
//    document.body.innerHTML=output;
//   },1000)
// }
// ​
// function createPost(post){
//   setTimeout(function(){
//       posts.push(post);
//       callback();
//   },2000)
// }
// ​
// createPost({id:4, title:"Post Four", body:"This is Post Four"});
// getAllPost();

// const posts = [
//   { id: 1, title: "Post One", body: "This is Post One" },
//   { id: 2, title: "Post Two", body: "This is Post Two" },
//   { id: 3, title: "Post Three", body: "This is Post Three" },
// ];
// function getAllPost() {
//   let output = "";
//   setTimeout(function () {
//     posts.forEach(function (post, index) {
//       output += `<li>${index}:${post.title}<li>`;
//     });
//     console.log(output);
//   }, 1000);
// }
// function createPost(post, callback) {
//   setTimeout(function () {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// createPost(
//   { id: 4, title: "Post Four", body: "This is post four" },
//   getAllPost
// );

// ------Going shopping washing cutting cooking serving eating beaf---------------

function outer(cb) {
  console.log("this is 1st function");
  cb(() => {
    console.log("this is 3rd inner function");
  });
}
outer((cb) => {
  console.log("this is 2nd inner function");
  cb();
});
