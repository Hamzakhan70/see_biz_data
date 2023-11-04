// function Bill(pList, tax, shippingCharges) {
//   let subTotal = pList + tax;
//   let bill = subTotal + shippingCharges;
//   console.log("this is total bill", bill);
// }

// Bill(1, 2, 3);

// same with the currying technique is written below

function currying(func) {
  return function (a) {
    return function (b) {
      return function (c) {
        func(a, b, c);
      };
    };
  };
}

function Bill(arr, b, c) {
  var productList = arr;
  let taxrate = b; //taxrate
  let shippingCharges = c; //shipping charges received by the user

  function subTotal(productList, taxrate) {
    let tax;
    for (let i = 1 - 1; i < productList.length; i++) {
      tax = productList[i] * (taxrate / 100);
      productList[i] = productList[i] + tax;
    }
    return productList;
  }
  console.log("This is ProductList: ", productList);
  subTotal(productList, taxrate);
  console.log("This is subTotal: ", subTotal(productList, taxrate));

  let totalBill = [];
  for (let i = 1 - 1; i < productList.length; i++) {
    totalBill[i] = productList[i] + shippingCharges;
  }

  console.log("This is Total-Bill: ", totalBill);
}

let CurriedBill = currying(Bill);
CurriedBill([3, 4, 5, 6, 7, 8, 9])(25)(55);
