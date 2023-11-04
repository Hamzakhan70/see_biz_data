const numbers = [65, 44, 12, 4];
console.log(numbers);
numbers.forEach(myFunction);

// document.getElementById("demo").innerHTML = numbers;

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
console.log(numbers);
