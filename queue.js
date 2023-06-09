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

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
console.log(q);
// console.log(q.peek());
console.log('should be 1 =>' + q.dequeue());
// console.log(q.length);
console.log('should be 2 =>' + q.dequeue());
console.log('should be 3 =>' + q.dequeue());
console.log('should be 4 =>' + q.dequeue());
console.log('should be 1 =>' + q.length); // undefined
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
console.log('should be 5 =>' + q.dequeue());
console.log('should be 1 =>' + q.dequeue());
console.log('should be 2 =>' + q.dequeue());
console.log('should be 3 =>' + q.dequeue());
console.log('should be 4 =>' + q.dequeue());
console.log('should be undefined =>' + q.dequeue()); // undefined

console.log('----------queue end--------------');
