// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(x, y = null) {
    this.data = x;
    this.next = y; //|| null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    /*const node = new Node(data)
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }*/
    this.head = new Node(data, this.head);
  }
  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter += 1;
      node = node.next;
    }
    return counter;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head;
    while (node && node.next) {
      node = node.next;
    }
    return node;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    /*if(this.head){
      this.head = this.head.next
    }*/
    this.head = this.head && this.head.next;
  }
  removeLast() {
    if (!this.head) {
      return;
    } else if (!this.head.next) {
      this.head = null;
      return;
    }
    /*let prev = this.head;
    let node = this.head.next;
    while(node.next){
      prev = node;
      node = node.next;
    }
    prev.next=null*/
    let node = this.head;
    while (node.next.next) {
      node = node.next;
    }
    node.next = null;
  }
  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }
  getAt(index) {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    for (let i = 0; i < index; i++) {
      if (node.next) {
        node = node.next;
      } else {
        return null;
      }
    }
    return node;
  }
  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.removeFirst();
      return;
    }
    let prev = this.getAt(index - 1);
    if (!prev || !prev.next) {
      return;
    }
    prev.next = prev.next.next;
  }
  insertAt(data, index) {
    if (!data||index === 0||!this.head) {
      this.insertFirst(data);
      return;
    }
    let prev = this.getAt(index - 1);
    if (!prev || !prev.next) {
      this.insertLast(data);
      return;
    }
    let node = new Node(data);
    node.next = prev.next;
    prev.next = node;
  }
  forEach(fn){
    if(!this.head){
      return
    }
    let node = this.head
    while(node){
      fn(node)
      node = node.next
    }
  }

  // generator
  *[Symbol.iterator](){
    let node = this.head
    while(node){
      yield node
      node=node.next
    }
  }
}

module.exports = { Node, LinkedList };
