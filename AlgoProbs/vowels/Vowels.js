// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let vowel = 'aeiou'
  let total = 0
  for(let el of str.toLowerCase()){
    if(vowel.includes(el)){
      ++total
    }
  }
  return total
}

//iterative solution
function vowels(str){
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length:0
}

//match checks to see if our string include anything in the
//brakets. g states that the iteration continues even if we
//have found a match. i takes care of case sensitive items
//match returns an array of matches

module.exports = vowels;
