// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    let sum = 0
    for(let i = 0; i < arr1.length; i++){
      sum += arr1[i]
    }
    for(let i =0; i< arr2.length; i++){
      sum += arr2[i]
    }
    return sum
  }


//   function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
//   }


// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example

// [2, 1, 10]  -->  9

// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell ).

function sumOfDifferences(arr) {
    arr.sort((a,b) => b-a);
    
    let sum = 0
    for(let i = 0; i<arr.length - 1; i++){
      sum += arr[i] - arr[i + 1]
    }
    return sum;
  }
  