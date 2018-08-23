// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  /*if (!root) return 0;
  if (!root.children) return 1;
  let arr = [root,'new'];
  let counter = [0];
  while (arr.length>1) {
    let node = arr.shift()
    if(node==='new'){
      counter.push(0)
      arr.push('new')
    } else{
      arr.push(...node.children)
      counter[counter.length-1]+=1
    }
  }
  return counter*/

  //tail recursion
  let counter = [1];
  findWidth([root], counter);
  return counter;
}

function findWidth(arr, counter) {
  let temp = [];
  arr.map(node => temp.push(...node.children));
  if (temp.length === 0) {
    return;
  }
  counter.push(temp.length);
  findWidth(temp, counter);
}

module.exports = levelWidth;
