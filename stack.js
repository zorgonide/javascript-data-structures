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

class Stack1 {
  constructor() {
    this.storage = {};
    this.length = 0;
  }
  push(val) {
    this.storage[this.length++] = val;
  }
  pop() {
    if (this.length > 0) {
      let val = this.storage[this.length - 1];
      delete this.storage[this.length - 1];
      this.length--;
      return val;
    } else return undefined;
  }
  peek() {
    return this.storage[this.length - 1];
  }
}

let s = new Stack1();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
console.log(s);
console.log('Return 5 ' + s.peek());
console.log('Return 5 ' + s.pop());
console.log('Return length 4 ' + s.length);
console.log('Return 4 ' + s.pop());
console.log('Return 3 ' + s.pop());
console.log('Return 2 ' + s.pop());
console.log('Return 1 ' + s.pop());
console.log('Return undefined ' + s.pop()); // undefined
console.log('Return undefined' + s.pop()); // undefined
console.log('Return undefined ' + s.pop()); // undefined
console.log('Return 0 ' + s.length); // undefined

console.log('----------stack end--------------');
