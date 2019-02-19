// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  arr = []
  for (let el of array){
    let last = arr[arr.length -1]
// if last el doesnt exist or length is equal to size
// start new array
    if(!last || last.length === size){
      arr.push([el])
    }
// if last does exist and length is not equal to size
// add that element to last array     
    else {
      last.push(el)
    }
  }
  return arr
}
module.exports = chunk;
