// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example:

// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n){
    //code here
   let correctArr = [];
      let arrOfNumbers = n.toString().split('');
      let arrOfNumbersLength = arrOfNumbers.length;
      for (let i = 0; i < arrOfNumbersLength; i++) {
          let x = arrOfNumbers.pop();
          correctArr.push(+x);
      }
      return correctArr;
  
  }


// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
//   }