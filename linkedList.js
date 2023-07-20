console.log('----------Linkedlist start--------------');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LL {
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
      this.length++;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
      this.length++;
    }
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
    return this.#find(index)?.value || 'out of bounds!';
  }
  #findValue(value) {
    if (this.head) {
      let current = this.head;
      let i = 0;
      while (current?.value !== value && i++ < this.length) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }
  getValue(value) {
    return this.#findValue(value) || 'not foundd';
  }
  deleteValue(value) {
    let nodeDelete = this.#findValue(value);
    if (nodeDelete) {
      if (this.head === nodeDelete) {
        this.head = this.head.next;
      } else {
        let current = this.head;
        while (current.next !== nodeDelete) {
          current = current.next;
        }
        current.next = nodeDelete.next;
        if (!nodeDelete.next) this.tail = current;
      }
      this.length--;
      if (!this.length) {
        this.head = null;
        this.tail = null;
      }
      return nodeDelete;
    }
    return undefined;
  }
  delete(index) {
    let nodeDelete = this.#find(index);
    if (nodeDelete) {
      if (this.head === nodeDelete) {
        this.head = this.head.next;
      } else {
        let current = this.head;
        while (current.next !== nodeDelete) {
          current = current.next;
        }
        current.next = nodeDelete.next;
        if (!nodeDelete.next) this.tail = current;
      }
      this.length--;
      if (!this.length) {
        this.head = null;
        this.tail = null;
      }
      return nodeDelete;
    } else return 'out of bounds';
  }
  pop() {
    return this.delete(this.length - 1);
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
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.length++;
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
    return this.#find(index)?.value || 'out of bounds';
  }
  #findValue(value) {
    if (!this.head) return undefined;
    let current = this.head;
    while (current?.value !== value && current) {
      current = current.next;
    }
    return current;
  }
  getValue(value) {
    return this.#findValue(value) || 'not found';
  }
  deleteValue(value) {
    let valueToDelete = this.#findValue(value);
    if (valueToDelete) {
      if (valueToDelete === this.head) {
        this.head = this.head.next;
      } else {
        let current = this.head;
        while (current.next !== valueToDelete) {
          current = current.next;
        }
        current.next = valueToDelete.next;
        if (!valueToDelete.next) this.tail = current;
      }
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
    }
    return valueToDelete;
  }
  pop() {
    return this.delete(this.length - 1) || 'll empty';
  }
  delete(index) {
    let valueToDelete = this.#find(index);
    if (valueToDelete) {
      if (valueToDelete === this.head) {
        this.head = this.head.next;
      } else {
        let prev = this.#find(index - 1);
        prev.next = valueToDelete.next;
        if (!valueToDelete.next) this.tail = prev;
      }
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
    }
    return valueToDelete;
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
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.length++;
  }
  #find(index) {
    if (index > -1 && index < this.length) {
      let current = this.head;
      let i = 0;
      while (i++ < index) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }
  #findValue(value) {
    if (this.head) {
      let current = this.head;
      let i = 0;
      while (i++ < this.length && current.value !== value) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }
  getValue(val) {
    return this.#findValue(val) || 'not found';
  }
  get(index) {
    return this.#find(index)?.value || 'out of bounds';
  }
  delete(index) {
    let nodeToBeDeleted = this.#find(index);
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
    } else {
      if (nodeToBeDeleted) {
        let previousNode = this.#find(index - 1);
        previousNode.next = nodeToBeDeleted.next;
        if (!previousNode.next) {
          this.tail = previousNode;
        }
        this.length--;
      } else return undefined;
    }
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return nodeToBeDeleted;
  }
  pop() {
    return this.delete(this.length - 1) || 'empty';
  }
  deleteValue(value) {
    let nodeToBeDeleted = this.#findValue(value);
    if (this.head === nodeToBeDeleted) {
      this.head = this.head.next;
      this.length--;
    } else {
      if (nodeToBeDeleted) {
        let previousNode = this.head;
        while (previousNode.next.value !== value) {
          previousNode = previousNode.next;
        }
        previousNode.next = nodeToBeDeleted.next;
        if (!previousNode.next) {
          this.tail = previousNode;
        }
        this.length--;
      } else return undefined;
    }
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
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

const linkedList = new LL();

// Test the push method
console.log('PUSH');

linkedList.push(10);
linkedList.push(20);
linkedList.push(30);
console.log(linkedList); // Should display: LinkedList { head: Node { value: 10, next: Node { value: 20, next: Node { value: 30, next: null } } }, tail: Node { value: 30, next: null }, length: 3 }
printLinkedList(linkedList);

// Test the get method
console.log('Search');

console.log('// Should display: 10 =>' + linkedList.get(0));
console.log('// Should display: 20 =>' + linkedList.get(1)); // Should display: 20
console.log('// Should display: 30 =>' + linkedList.get(2)); // Should display: 30
console.log('// Should display: out of bounds =>' + linkedList.get(3)); // Should display: "index out of bounds"

// console.log('getvalue ' + linkedList.getValue(20)); // Should display: Node { value: 20, next: Node { value: 30, next: null } }
console.log('// Should display: not found =>' + linkedList.getValue(40)); //not found
console.log('// Should display: 10 =>' + linkedList.getValue(10).value); //10
console.log('// Should display: 20 =>' + linkedList.getValue(20).value); //20
console.log('// Should display: 30 =>' + linkedList.getValue(30).value); //30

console.log('DELETE');
printLinkedList(linkedList);
console.log(
  'Should display: Node { value: 20, next: Node { value: 30, next: null } }',
  linkedList.deleteValue(20)
); //
printLinkedList(linkedList);

console.log("Should display: 'Not found'", linkedList.deleteValue(40)); //
printLinkedList(linkedList);
console.log('Tail at 30', linkedList.tail);

console.log(
  'Should display: Node { value: 10, next: 30 }',
  linkedList.deleteValue(10)
);
printLinkedList(linkedList);

// console.log(linkedList.deleteValue(10));
// printLinkedList(linkedList);
console.log('POP');
console.log('LL before pop');
printLinkedList(linkedList);
console.log(
  'Should display: Node { value: 30, next: null } => ' + linkedList.pop().value
); //

// console.log(
//   'Should display: Node { value: 20, next: null } =>' + linkedList.pop()
// ); //
// console.log(
//   'Should display: Node { value: 10, next: null } =>' + linkedList.pop()
// ); //
console.log("Should display: 'Linked List empty' =>" + linkedList.pop()); //

// Test the delete method
console.log('Push');

linkedList.push(100);
linkedList.push(200);
linkedList.push(300);
printLinkedList(linkedList);
console.log(linkedList); // Should display: LinkedList { head: Node { value: 100, next: Node { value: 200, next: Node { value: 300, next: null } } }, tail: Node { value: 300, next: null }, length: 3 }
console.log('DELETE');

console.log(linkedList.delete(2)); // Should display: Node { value: 300, next: null }
console.log('Tail at 200', linkedList.tail);

console.log(linkedList.delete(1)); // Should display: Node { value: 200, next: Node { value: 300, next: null } }
console.log(linkedList.delete(0)); // Should display: Node { value: 100, next: Node { value: 300, next: null } }
printLinkedList(linkedList);
console.log(linkedList.delete(1)); // Should display:  undefined}
console.log(linkedList.delete(2)); // Should display: undefined

console.log('Head', linkedList.head);
console.log('Length', linkedList.length);
console.log('Tail', linkedList.tail);
console.log('-----Linked List End-------');
