// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //split string into array in order to use .reverse method
  arr = str.split('')
  debugger
  //reverse array of letters using .reverse method
  reversed = arr.reverse()
  //join the reversed array to convert it back into a string
  final = reversed.join('')
  return final
}
reverse('asdf')

//other solution
// function reverse(str){
// return str.split('').reverse().join('')
// }

//other solution
// function reverse(str){
// let reversed = ''
// for (let character of str){
//    reversed = character + reversed
//  }
//  return reversed
// }
// here we iterate through each character and add the following
//  character to the start of our reversed string

module.exports = reverse;
