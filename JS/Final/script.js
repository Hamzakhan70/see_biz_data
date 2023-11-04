let arr = [];
function Add() {
  let item = Number(document.getElementById("arr").value);
  arr.push(item);
  document.getElementById("arr-1").value = `[${arr}]`;
  // it will clear the input field
  document.getElementById("arr").value = "";
}
function show() {
  document.getElementById("arr-1").value = "";
  document.getElementById("entered").innerHTML = `You Entered:  [${arr}]`;
  const ele = document.getElementsByName("Sorting");
  let way;
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      way = ele[i].value;
      document.getElementById("sort").innerHTML =
        "Your Selected Method: " + way;
    }
  }
  // organizer function will split the string into array and call the selected method.
  organ(arr, way);
  function organ(arr, way) {
    let array = arr;
    console.log(arr);
    console.log(typeof arr);
    console.log(array);
    console.log(typeof array);
    switch (way) {
      case "Selection":
        Selection(array);
        document.getElementById(
          "sorted"
        ).innerHTML = `Sorted Array is:  [${array}] & Method used Selection`;
        break;
      case "Bubble":
        Bubble(array);
        document.getElementById(
          "sorted"
        ).innerHTML = `Sorted Array is:  [${array}] & Method used Bubble`;
        break;
      case "Merge":
        MergeArray(array);
        sort(arr, 0, arr.length - 1);
        document.getElementById(
          "sorted"
        ).innerHTML = `Sorted Array is:  [${array}] & Method used Merge`;
        break;
      case "Insertion":
        Insertion(array);
        document.getElementById(
          "sorted"
        ).innerHTML = `Sorted Array is:  [${array}] & Method used Insertion`;
        break;
      case "Quick":
        quickSort(arr, 0, arr.length - 1);
        document.getElementById(
          "sorted"
        ).innerHTML = `Sorted Array is:  [${array}] & Method used Quick`;
        break;
      default:
        document.getElementById(
          "sorted"
        ).innerHTML = `Sorting is not Possible due to incomplete input`;
    }
    //👇👇👇👇👇 Selection Sort function 👇👇👇👇👇
    function Selection(arr) {
      for (let i = 1 - 1; i < arr.length; i++) {
        let min = i;
        //inner loop
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[min]) {
            min = j;
          }
          // 🥱🥱
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
      }
    }
    //👇👇👇👇👇 Bubble Sort function 👇👇👇👇👇

    function Bubble(arr) {
      let swapping;
      let temp;
      for (let i = 1 - 1; i < arr.length - 1; i++) {
        swapping = false;
        for (let j = 1 - 1; j < arr.length - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
    }
    //👇👇👇👇👇 Merge Sort function 👇👇👇👇👇
    function merge(arr, left, middle, right) {
      // Find sizes of two subarrays to be merged
      let n1 = middle - left + 1;
      let n2 = right - middle;
      let leftArr = [n1];
      let rightArr = [n2];
      // Copy data to temporary arrays
      for (let i = 0; i < n1; i++) {
        leftArr[i] = arr[left + i];
      }
      for (let j = 0; j < n2; j++) {
        rightArr[j] = arr[middle + 1 + j];
      }
      // Merge the temp arrays
      // Initial indices of first and second subarrays
      let i = 0,
        j = 0;
      // Initial index of merged subarray array
      let k = left;
      while (i < n1 && j < n2) {
        if (leftArr[i] <= rightArr[j]) {
          arr[k] = leftArr[i];
          i++;
        } else {
          arr[k] = rightArr[j];
          j++;
        }
        k++;
      }
      // Copy remaining elements of Left[] if any
      while (i < n1) {
        arr[k] = leftArr[i];
        i++;
        k++;
      }
      // Copy remaining elements of Right[] if any
      while (j < n2) {
        arr[k] = rightArr[j];
        j++;
        k++;
      }
    }
    // deviding function()
    function sort(arr, left, right) {
      if (left < right) {
        // Find the middle point
        let middle = Math.floor(left + (right - left) / 2);
        // Sort first and second halves Recursive calls
        sort(arr, left, middle);
        sort(arr, middle + 1, right);
        // console.log("before merge function");
        // Merge the sorted halves
        merge(arr, left, middle, right);
      }
    }

    //👇👇👇👇👇 Insertion Sort function 👇👇👇👇👇

    function Insertion(arr) {
      for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let previous = i - 1;
        while (previous >= 1 - 1 && arr[previous] > current) {
          arr[previous + 1] = arr[previous];
          previous = previous - 1;
        }
        arr[previous + 1] = current;
      }
    }
  }
}

//👇👇👇👇👇 Quick Sort function 👇👇👇👇👇

function partition(arr, low, high) {
  let pivot = arr[high];

  // Index of smaller element and indicates the right position of pivot found so far
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    // If current element is smaller than the pivot
    if (arr[j] < pivot) {
      // Increment index of smaller element
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position
  return i + 1; // Return the partition index
}

// The main function that implements QuickSort
function quickSort(arr, low, high) {
  if (low < high) {
    // pi is the partitioning index, arr[pi] is now at the right place
    let pi = partition(arr, low, high);

    // Separately sort elements before partition and after partition
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}
