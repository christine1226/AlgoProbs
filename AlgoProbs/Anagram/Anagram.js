// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
   first = stringA.replace(/[^\w]/g, "").split('').sort().join('')
   second = stringB.replace(/[^\w]/g, "").split('').sort().join('')
   return  first === second
}
anagrams("Whoa! Hi!", "Hi! Whoa!")
module.exports = anagrams;
