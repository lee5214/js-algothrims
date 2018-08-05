// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      // array matching for swap
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const center = Math.floor(arr.length/2)
  let left = arr.slice(0, center);
  let right = arr.slice(center);
  //IMPORTANT
  return merge(mergeSort(left),mergeSort(right))
}

function merge(left, right) {
  const results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
}
module.exports = { bubbleSort, selectionSort, mergeSort, merge };
