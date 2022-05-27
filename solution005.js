// Rock Paper Scissors

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!


const rps = (p1, p2) => {
    if(p1 === p2){
      return 'Draw!'
    }
    
    if(p1 === 'rock' && p2 === 'scissors'){
      return 'Player 1 won!'
    }else if(p1 === 'paper' && p2 === 'rock'){
      return 'Player 1 won!'
    }else if(p1 === 'scissors' && p2 === 'paper'){
      return 'Player 1 won!'
    }else{
      return 'Player 2 won!'
    }
  };


  // Code as fast as you can! You need to double the integer and return it.


  function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i * 2;
  }


//   Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
// Examples (input -> output)

// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'

// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(s){
  return s.replace(/\d/g, "");
}