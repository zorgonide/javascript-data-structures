console.log('----------queue start--------------');

class Queue {
  #storage;
  constructor() {
    this.#storage = {};
    this.length = 0;
    this.head = 0;
  }
  enqueue(value) {
    this.#storage[this.length++ + this.head] = value;
  }
  dequeue() {
    if (this.length) {
      const value = this.#storage[this.head];
      delete this.#storage[this.head];
      this.length--;
      this.head++;
      return value;
    } else {
      this.head = 0;
      return undefined;
    }
  }
  peek() {
    return this.#storage[this.head];
  }
}

// Test Suite
console.log('Starting Queue Tests');

// Test 1: Queue Initialization
let q = new Queue();
console.assert(q.length === 0, 'Queue should be initialized with length 0.');

// Test 2: Enqueue Functionality
q.enqueue(1);
console.log(
  q.length === 1 && q.peek() === 1,
  'Queue should contain one element with value 1.'
);

// Test 3: Multiple Enqueues
q.enqueue(2);
q.enqueue(3);
console.log(
  q.length === 3 && q.peek() === 1,
  'Queue should have 3 elements, with 1 at the head.'
);

// Test 4: Dequeue Functionality
let dequeued = q.dequeue();
console.log(
  dequeued === 1 && q.length === 2 && q.peek() === 2,
  'Dequeue should remove the head element and return its value.'
);

// Test 5: Dequeue Until Empty
q.dequeue(); // 2
q.dequeue(); // 3 - Queue is now empty
let emptyDequeue = q.dequeue();
console.log(
  emptyDequeue === undefined && q.length === 0,
  'Dequeue on empty queue should return undefined.'
);

// Test 6: Peek Functionality
q.enqueue(4);
console.log(
  q.peek() === 4,
  "Peek should return the head element's value without removing it."
);

// Test 7: Peek on Empty Queue
q.dequeue(); // Remove 4, making it empty again
console.log(
  q.peek() === undefined,
  'Peek on an empty queue should return undefined.'
);

// Test 8: Queue State After Multiple Operations
q.enqueue(5);
q.enqueue(6);
q.dequeue(); // 5
q.enqueue(7);
console.log(
  q.peek() === 6 && q.length === 2,
  'Queue should correctly reflect operations performed.'
);
q.dequeue();
q.dequeue();
// Test 9: Enqueue and Dequeue Large Numbers
for (let i = 0; i < 1000; i++) {
  q.enqueue(i);
}
for (let i = 0; i < 1000; i++) {
  q.dequeue();
}
console.log(
  q.length === 0,
  q,
  'Queue should be empty after enqueuing and dequeuing 1000 elements.'
);

console.log('Queue Tests Completed');

console.log('----------queue end--------------');
