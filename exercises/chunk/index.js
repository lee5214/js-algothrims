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
  /*let arr = [];
  let chunk = [];
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (counter < size) {
      chunk.push(array[i]);
      counter++;
    } else {
      arr.push(chunk);
      chunk = [];
      chunk.push(array[i]);
      counter = 1;
    }
  }
  if (chunk.length) {
    arr.push(chunk);
  }
  return arr;*/

  /*let result=[]
  for(let item of array){
    let last = result[result.length-1]
    if(!last || last.length === size){
      result.push([item])
    } else {
      last.push(item)
    }
  }
  return result*/
  let arr = [];
  for(let i=0;i<array.length/size;i++){
    arr.push(array.slice(i*size,(i+1)*size))
  }

  return arr
}
module.exports = chunk;
