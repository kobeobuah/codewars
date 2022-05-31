// Sentence Smash

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// Example

// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'


smash = function (words) {
    return words.join(" ");
  };


//   Write a method, that will get an integer array as parameter and will process every number from this array.

//   Return a new array with processing every number of the input-array like this:
  
//   If the number has an integer square root, take this, otherwise square the number.
//   Example
  
//   [4,3,9,7,2,1] -> [2,9,3,49,4,1]
  
//   Notes
  
//   The input array will always contain only positive numbers, and will never be empty or null.
  

function squareOrSquareRoot(array) {
    let arr = array
    for (i = 0; i < array.length; i++){
      if (Number.isInteger(Math.sqrt(arr[i])) ){
        arr[i] = Math.sqrt(arr[i])
      } 
      else {
        arr[i] = arr[i] * arr[i] 
      }
    } return arr;  
  }