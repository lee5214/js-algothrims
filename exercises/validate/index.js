// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = -Infinity, max = Infinity) {
  //1
  if ((max && node.data > max) || (min && node.data < min)) {
    return false;
  }
  if (node.left &&!validate(node.left, min, node.data)) {
     return false
  }
  if (node.right&&!validate(node.right, node.data, max)) {
     return false
  }
  return true;

  //2
  /*if (node === null) {
    return true;
  }
  if ((max && node.data > max) || (min && node.data < min)) return false;
  return (
    validate(node.left, min, node.data) && validate(node.right, node.data, max)
  );*/

  //3
  /*if(node.data > min
    && node.data < max
    && validate(node.left,min,node.data)
    && validate(node.right,node.data,max))
    return true;
  else
    return false;*/
}

module.exports = validate;
