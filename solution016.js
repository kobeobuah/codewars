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



//   Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.


function howManyDalmatians(number) {  
    let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    
    var respond = number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number === 101 ?  dogs[3] : dogs[2];
    return respond
  }

  function howManyDalmatians(number){
    if (number <= 10) {
      return "Hardly any"
    } else if (number <= 50) {
      return "More than a handful!"
    } else if (number === 101) {
      return "101 DALMATIANS!!!"
    } else {
      return "Woah that's a lot of dogs!" 
    }
  }