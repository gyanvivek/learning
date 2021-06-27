const Node = require("./LinkedListNode");

class LinkedList {
  constructor() {
    this.root = null;
  }

  add(data) {
    let node = new Node(data);
    if (this.root) {
      node.next = this.root;
      this.root = node;
    } else {
      this.root = node;
    }
  }

  addToLast(data) {
    let node = new Node(data);

    if (this.root) {
      let target = this.root;

      while (target.next) {
        target = target.next;
      }

      target.next = node;
    } else {
      this.root = node;
    }
  }

  print() {
    let node = this.root;

    let list = [];

    while (node) {
      list.push(node.data);
      node = node.next;
    }

    console.log(list);
  }

  reverse() {
    let prev = null;
    let node = this.root;
    let next = null;

    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    this.root = prev;
  }
}

let linkedList = new LinkedList();

linkedList.add(8);
linkedList.add(10);
linkedList.addToLast(15);
linkedList.addToLast(30);
linkedList.print();

linkedList.reverse();

linkedList.print();
