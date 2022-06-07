// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9


function squareSum(numbers){
    const map1 = numbers.map(x => x * x)
     let i = 0
     const totalSum = map1.reduce((p,c) => p + c, i )
     return totalSum
   }


function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
  }