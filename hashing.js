// hashtable
const XXH = require('xxhashjs');
console.log('-----hash table start-------');

class Hashtable {
  constructor(size) {
    this._storage = [];
    this._tableSize = size;
  }
  insert(key, value) {
    const index = this.h1(key);
    if (!this._storage[index]) {
      this._storage[index] = [];
    }
    this._storage[index].push([key, value]);
  }
  retrieve(key) {
    const index = this.h1(key);
    if (this._storage[index])
      return this._storage[index].find((e) => e[0] === key);
    else return undefined;
  }
  h1(string) {
    return Math.abs(
      XXH.h32(0xabcd).update(string).digest().toNumber() % this._tableSize
    );
  }
}
h = new Hashtable(25);
h.insert('a', 1);
h.insert('b', 2);
h.insert('c', 3);
h.insert('d', 4);
h.insert('r', 4);
h.insert('e', 7);
h.insert('f', 8);
h.insert('g', 9);
console.log(h);
console.log(h.retrieve('b'));
console.log('-----hash table end-------');
