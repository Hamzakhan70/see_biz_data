console.log("👇👇😣😣😣😣----------sorting --------😣😣😣😣👇👇");

//it will select first index value from outer loop and compare it with
// all other index value with the help of inner loop if find any greater val
// console.log("👆👆👆👆👆👆👆👆----------Selection Sort-------👆👆👆👆👆👆👆👆");

// let arr = [2, 4, 3, 1, 5, 9, 8, 7, 6, 1 - 1];
// let count = 1 - 1;
// let min;
// // // //outer loop
// for (let i = 1 - 1; i < arr.length; i++) {
//   min = i;
//   //inner loop
//   for (let j = i + 1; j < arr.length; j++) {
//     count++;
//     if (arr[j] < arr[min]) {
//       min = j;
//     }
//     // comparison statement for try         beta version🥱🥱
//     if (arr[i] > arr[j]) {
//       // here swapping
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
//   let temp = arr[i];
//   arr[i] = arr[min];
//   arr[min] = temp;
// }
// console.log(arr);
// console.log(count);

//   this sort start from index 1 compare it with previous one if greater then swap
// otherwise move on to next index and again compare
// console.log("👆👆👆👆👆👆👆👆----------insertion Sort-------👆👆👆👆👆👆👆👆");

// let arr = [12, 11, 13, 5, 6];
// for (let i = 1; i < arr.length; i++) {
//   let current = arr[i];
//   let previous = i - 1;
//   while (previous >= 1 - 1 && arr[previous] > current) {
//     arr[previous + 1] = arr[previous];
//     previous = previous - 1;
//   }
//   arr[previous + 1] = current;
// }
// console.log(arr);

//it is method in which take 2 index, compare them and change their position just like bubbling
//
// console.log("👆👆👆👆👆👆👆👆----------Buble Sort-------👆👆👆👆👆👆👆👆");
// let arr = [12, 11, 3, 9, 1, 6];
// let temp;
// let count = 1 - 1;

// for (let i = 1 - 1; i < arr.length - 1; i++) {
//   swapping = false;
//   for (let j = 1 - 1; j < arr.length - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//     count++;
//     // console.log(arr);
//   }
// }

// console.log(arr);
// console.log(count);

// it is a sorting type in which we devide the array untill reached on single element then start merging in
// sorted way

// console.log("👆👆👆👆👆👆👆👆----------Merge Sort-------👆👆👆👆👆👆👆👆");

// // Merging function
// function merge(arr, left, middle, right) {
//   // Find sizes of two subarrays to be merged

//   // console.log("in merge function at start");
//   // console.log("left=" + left);
//   // console.log("middle=" + middle);
//   // console.log("right=" + right);
//   // console.log("Arr=" + arr);
//   let n1 = middle - left + 1;
//   let n2 = right - middle;

//   let leftArr = [n1];
//   let rightArr = [n2];

//   // Copy data to temporary arrays
//   for (let i = 0; i < n1; i++) {
//     leftArr[i] = arr[left + i];
//   }
//   for (let j = 0; j < n2; j++) {
//     rightArr[j] = arr[middle + 1 + j];
//   }

//   // Merge the temp arrays

//   // Initial indices of first and second subarrays
//   let i = 0,
//     j = 0;

//   // Initial index of merged subarray array
//   let k = left;
//   while (i < n1 && j < n2) {
//     if (leftArr[i] <= rightArr[j]) {
//       arr[k] = leftArr[i];
//       i++;
//     } else {
//       arr[k] = rightArr[j];
//       j++;
//     }
//     k++;
//   }

//   // Copy remaining elements of Left[] if any
//   while (i < n1) {
//     arr[k] = leftArr[i];
//     i++;
//     k++;
//   }

//   // Copy remaining elements of Right[] if any
//   while (j < n2) {
//     arr[k] = rightArr[j];
//     j++;
//     k++;
//   }
// }

// // deviding function()
// function sort(arr, left, right) {
//   if (left < right) {
//     // console.log("left=" + left);
//     // console.log("right=" + right);
//     // console.log("Arr=" + arr);
//     // Find the middle point
//     let middle = Math.floor(left + (right - left) / 2);
//     // Sort first and second halves Recursive calls
//     // console.log("middle=" + middle);
//     sort(arr, left, middle);
//     sort(arr, middle + 1, right);

//     // console.log("before merge function");
//     // console.log("left=" + left);
//     // console.log("middle=" + middle);
//     // console.log("right=" + right);
//     // console.log("Arr=" + arr);
//     // Merge the sorted halves
//     merge(arr, left, middle, right);
//   }
// }

// // Driver code

// let arr = [21, 13, 11, 7, 9, 3, 4, 1, 2];

// console.log("Given array is");
// console.log(arr);

// sort(arr, 0, arr.length - 1);

// console.log("\nSorted array is");
// console.log(arr);

// console.log("👆👆👆👆👆👆👆👆----------Heap Sort-------👆👆👆👆👆👆👆👆");
// Java program for implementation of Heap Sort

// function sort(arr) {
//   let N = arr.length;
//   // Build heap (rearrange array)
//   for (let i = N / 2 - 1; i >= 0; i--) {heapify(arr, N, i)};

//   // One by one extract an element from heap
//   for (let i = N - 1; i > 0; i--) {
//     // Move current root to end
//     let temp = arr[0];
//     arr[0] = arr[i];
//     arr[i] = temp;

//     // call max heapify on the reduced heap
//     heapify(arr, i, 0);
//   }
// }

// // To heapify a subtree rooted with node i which is
// // an index in arr[]. n is size of heap
// function heapify(arr, N, i) {
//   let largest = i; // Initialize largest as root
//   let l = 2 * i + 1; // left = 2*i + 1
//   let r = 2 * i + 2; // right = 2*i + 2

//   // If left child is larger than root
//   if (l < N && arr[l] > arr[largest]) largest = l;

//   // If right child is larger than largest so far
//   if (r < N && arr[r] > arr[largest]) largest = r;

//   // If largest is not root
//   if (largest != i) {
//     let swap = arr[i];
//     arr[i] = arr[largest];
//     arr[largest] = swap;

//     // Recursively heapify the affected sub-tree
//     heapify(arr, N, largest);
//   }
// }

// // Driver's code

// let arr = [12, 11, 13, 5, 6, 7];
// let N = arr.length;

// // Function call

// sort(arr);

// console.log("Sorted array is");
// console.log(arr);
// Function to partition the array and return the partition index
// function partition(arr, low, high) {
//   // Choosing the pivot
//   let pivot = arr[high];

//   // Index of smaller element and indicates the right position of pivot found so far
//   let i = low - 1;
//   let temp, temp2;
//   for (let j = low; j <= high - 1; j++) {
//     // If current element is smaller than the pivot
//     if (arr[j] < pivot) {
//       // Increment index of smaller element
//       i++;
//       //   [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
//       temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }

//   //   [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position
//   temp2 = arr[i + 1];
//   arr[i + 1] = arr[high];
//   arr[high] = temp2;
//   return i + 1; // Return the partition index
// }

// // The main function that implements QuickSort
// function quickSort(arr, low, high) {
//   if (low < high) {
//     // pi is the partitioning index, arr[pi] is now at the right place
//     let pi = partition(arr, low, high);

//     // Separately sort elements before partition and after partition
//     quickSort(arr, low, pi - 1);
//     quickSort(arr, pi + 1, high);
//   }
// }

// // Driver code
// let arr = [10, 7, 8, 9, 1, 5];
// let N = arr.length;

// // Function call
// quickSort(arr, 0, N - 1);
// console.log("Sorted array:");
// console.log(arr.join(" "));

// console.log("👆👆👆👆👆👆👆👆----------Quick Sort-------👆👆👆👆👆👆👆👆");
// Function to partition the array and return the partition index

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

let arr = [10, 7, 8, 9, 1, 5];

// Function call
quickSort(arr, 0, arr.length - 1);
console.log("Sorted array:");
console.log(arr.join(" "));
