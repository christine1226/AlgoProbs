// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  reversed = str.split('').reverse().join('')
  // we want to compare the reversed string to the original string
  // if (reversed === str){
  //   return true
  // } else{
  //   return false
  // }
  return str === reversed
}

palindrome('yooy')
module.exports = palindrome;

//other solutions
// function palindrome(str){
//  return str.split('').every((char, i)=>{
//    return char === str[str.length - i - 1]
//  })
//}
// .every compare every value in array to the function given
//i = 0... does each character equal to the item at a given index
