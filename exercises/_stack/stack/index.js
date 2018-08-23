// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor (){
    this.arr = [];
  }
  push(x) {
    /*this.arr.unshift(x);
    return this.arr;*/
    return this.arr.push(x)
  }
  pop() {
    /*let pop = this.arr[0];
    this.arr.shift();
    return pop;*/
    return this.arr.pop()
  }
  peek(){
    /*return this.arr[0]*/
    return this.arr[this.arr.length-1]
  }
}
module.exports = Stack;