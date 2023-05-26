console.log('----------Linkedlist start--------------');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let node = new Node(value);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.length++;
    return;
  }
  #find(index) {
    if (index >= 0 && index < this.length) {
      let i = 0;
      let current = this.head;
      while (i++ < index) {
        current = current.next;
      }
      return current;
    } else return undefined;
  }
  get(index) {
    return this.#find(index)?.value || 'Index out of bounds';
  }
  #findValue(value) {
    let current = this.head;
    let i = 0;
    while (i++ < this.length && current.value !== value) {
      current = current.next;
    }
    return current;
  }
  getValue(value) {
    return this.#findValue(value)?.value || 'Not found';
  }
  deleteValue(value) {
    let nodeToBeDeleted = this.#findValue(value);
    if (!nodeToBeDeleted) {
      return 'value not found';
    }
    if (this.head === nodeToBeDeleted) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      while (current.next !== nodeToBeDeleted) {
        current = current.next;
      }
      current.next = current.next?.next || null;
      if (!current.next) {
        this.tail = current;
      }
    }
    this.length--;
    if (this.length === 0) this.tail = null;
    return nodeToBeDeleted;
  }
  pop() {
    return this.delete(this.length - 1) || 'Linked List empty';
  }
  delete(index) {
    if (index >= 0 && index < this.length) {
      let nodeDeleted;
      if (index === 0) {
        nodeDeleted = this.head;
        this.head = this.head.next;
      } else {
        let prevNode = this.#find(index - 1);
        nodeDeleted = prevNode.next;
        prevNode.next = prevNode.next?.next || null;
        if (this.length - 1 === index) {
          this.tail = prevNode;
        }
      }
      this.length--;
      if (this.length === 0) this.tail = null;
      return nodeDeleted;
    } else return undefined;
  }
}

class LinkedListFinal {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.tail = node;
      this.length++;
      return node;
    }
  }
  #find(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    let i = 0;
    let current = this.head;
    while (i++ < index) {
      current = current.next;
    }
    return current;
  }
  #findValue(value) {
    if (!this.head) {
      return undefined;
    }
    let i = 0;
    let current = this.head;
    while (i++ < this.length && current.value != value) {
      current = current.next;
    }
    return current;
  }
  getValue(val) {
    return this.#findValue(val)?.value || 'not found';
  }
  get(index) {
    return this.#find(index)?.value || 'not found';
  }
  delete(index) {
    let nodeToBeDeleted = this.#find(index);
    if (!nodeToBeDeleted) {
      console.log('index out of bounds');
      return undefined;
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let i = 0;
      let current = this.head;
      while (i++ < index - 1) {
        current = current.next;
      }
      current.next = current.next?.next || null;
      if (this.length === index + 1) {
        this.tail = current;
      }
    }
    this.length--;
    if (this.length === 0) this.tail = null;
    return nodeToBeDeleted;
  }
  pop() {
    return this.delete(this.length - 1);
  }
  deleteValue(value) {
    let nodeToBeDeleted = this.#findValue(value);
    if (!nodeToBeDeleted) {
      console.log('value not found');
      return undefined;
    }
    if (this.head === nodeToBeDeleted) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      while (current.next !== nodeToBeDeleted) {
        current = current.next;
      }
      current.next = current.next?.next || null;
      if (!current.next) {
        this.tail = current;
      }
    }
    this.length--;
    if (this.length === 0) this.tail = null;
    return nodeToBeDeleted;
  }
}
function printLinkedList(ll) {
  let current = ll.head;
  let listString = '';
  while (current !== null) {
    listString += current.value + ' -> ';
    current = current.next;
  }
  listString += 'null';
  console.log(listString);
}

const linkedList = new LinkedList();

// Test the push method
console.log('PUSH');

linkedList.push(10);
linkedList.push(20);
linkedList.push(30);
console.log(linkedList); // Should display: LinkedList { head: Node { value: 10, next: Node { value: 20, next: Node { value: 30, next: null } } }, tail: Node { value: 30, next: null }, length: 3 }
printLinkedList(linkedList);

// Test the get method
console.log('Search');

console.log(linkedList.get(0)); // Should display: 10
console.log(linkedList.get(1)); // Should display: 20
console.log(linkedList.get(2)); // Should display: 30
console.log(linkedList.get(3)); // Should display: "index out of bounds"

// console.log('getvalue ' + linkedList.getValue(20)); // Should display: Node { value: 20, next: Node { value: 30, next: null } }
console.log(linkedList.getValue(40)); //not found

console.log('DELETE');
printLinkedList(linkedList);
console.log(linkedList.deleteValue(20)); // Should display: Node { value: 20, next: Node { value: 30, next: null } }
printLinkedList(linkedList);

console.log(linkedList.deleteValue(40)); // Should display: 'Not found'
printLinkedList(linkedList);

console.log(linkedList.deleteValue(10)); // Should display: Node { value: 30, next: null }
printLinkedList(linkedList);

// console.log(linkedList.deleteValue(10));
// printLinkedList(linkedList);
console.log('POP');

console.log(linkedList.pop()); // Should display: Node { value: 30, next: null }
console.log(linkedList.pop()); // Should display: Node { value: 20, next: null }
console.log(linkedList.pop()); // Should display: Node { value: 10, next: null }
console.log(linkedList.pop()); // Should display: 'Linked List empty'

// Test the delete method
console.log('Push');

linkedList.push(100);
linkedList.push(200);
linkedList.push(300);
printLinkedList(linkedList);
console.log(linkedList); // Should display: LinkedList { head: Node { value: 100, next: Node { value: 200, next: Node { value: 300, next: null } } }, tail: Node { value: 300, next: null }, length: 3 }
console.log('DELETE');

console.log(linkedList.delete(1)); // Should display: Node { value: 200, next: Node { value: 300, next: null } }
console.log(linkedList.delete(0)); // Should display: Node { value: 100, next: Node { value: 300, next: null } }
printLinkedList(linkedList);
console.log(linkedList.delete(1)); // Should display:  undefined}
console.log(linkedList.delete(0)); // Should display: Node { value: 300, next: null }
console.log(linkedList.delete(2)); // Should display: undefined

console.log('Head', linkedList.head);
console.log('Length', linkedList.length);
console.log('Tail', linkedList.tail);
console.log('-----Linked List End-------');
