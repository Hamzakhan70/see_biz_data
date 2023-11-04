// function Youtube(averageView, requiredAmount) {
//   let currencies = [290, 215, 1, 361, 310];
//   let countriesViews = [
//     "usaViews",
//     "canadaViews",
//     "PakistanViews",
//     "greatBritainViews",
//     "franceViews",
//   ];
//   let earnings = [];
//   let averageIncome = 0;
//   let totalViews = 0;
//   for (let i = 0; i < countriesViews.length; i++) {
//     countriesViews[i] = Math.floor(Math.random() * 19);
//     earnings[i] = countriesViews[i] * currencies[i];
//     averageIncome = averageIncome + earnings[i];
//     totalViews = totalViews + countriesViews[i];
//   }
//   console.log("views of countries:" + countriesViews);
//   console.log("Total views from countries:" + totalViews);
//   console.log("Amount from countries:" + earnings);
//   console.log("Average Amount of Earnings:" + averageIncome);
//   let totalamount = averageIncome * averageView;
//   console.log("Total Amount:" + totalamount);
//   let remainingAmount = totalamount - 60000;
//   console.log("Amount after Expenditures:" + remainingAmount);
//   console.log("Required Amount:" + requiredAmount);
//   let time = requiredAmount / remainingAmount;
//   console.log("Time in month:" + time * 30);
// }
// Youtube(1000000, 13500000);

let countriesViews = [
  "usaViews",
  "canadaViews",
  "PakistanViews",
  "greatBritainViews",
  "franceViews",
];

function randomViews(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 100000);
  }
  return arr;
}

function randomAmount(arr) {
  let randomCurrency = [2, 1, 0.1, 1.5, 1.5];
  let earnings = [];
  let simple = [];
  let averageEarning = 0;
  for (let i = 0; i < randomCurrency.length; i++) {
    simple[i] = arr[i] / 1000;
    randomCurrency[i] = Math.floor(randomCurrency[i] * 230);
    earnings[i] = Math.floor(simple[i] * arr[i]);
    averageEarning = averageEarning + earnings[i];
  }

  console.log("This is currency:> " + randomCurrency);

  console.log("This is AverageEarnings:> " + averageEarning);
  return averageEarning;
}
function calculation(avgAmount, avgViews) {
  let total = avgAmount * avgViews;
  let expenses = 60000;
  let profitAmount = total - expenses;
  let requiredAmount = 13500000;
  let timeInMonths = requiredAmount / profitAmount;
  console.log("This is time in Months " + timeInMonths);
}

let views = randomViews(countriesViews);
let avg = randomAmount(views);
calculation(avg, 1000000);
