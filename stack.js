console.log('---------Stack start---------');
class Stack {
  #storage;
  constructor() {
    this.#storage = {};
    this.length = 0;
  }
  push(value) {
    this.#storage[this.length++] = value;
  }
  pop() {
    if (this.length > 0) {
      const value = this.#storage[this.length - 1];
      delete this.#storage[this.length - 1];
      this.length--;
      return value;
    } else return undefined;
  }
  peek() {
    return this.#storage[this.length - 1];
  }
}
let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
// console.log(s);
// console.log(s.peek());
// console.log(s.pop());
// console.log(s.length);
// console.log(s.pop());
// console.log(s.pop());
// console.log(s.pop());
// console.log(s.pop());
// console.log(s.pop()); // undefined
// console.log(s.pop()); // undefined
// console.log(s.pop()); // undefined
// console.log(s.length); // undefined

console.log('----------stack end--------------');
