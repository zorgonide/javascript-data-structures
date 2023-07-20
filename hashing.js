// hashtable
const XXH = require('xxhashjs');
console.log('-----hash table start------');

class Hashtable {
  constructor(size) {
    this.size = size;
    this.length = 0;
    this._storage = new Array(size).fill().map(() => []);
  }
  insert(key, val) {
    let index = this.hashingAlgorithm(key);
    this._storage[index].push({ key, val });
    this.length++;
    if (this.length > this.size / 2) this.adjust();
  }
  adjust() {
    this.size *= 2;
    let newStore = new Array(this.size).fill().map(() => []);
    for (let c of this._storage) {
      while (c.length) {
        let { key, val } = c.pop();
        let index = this.hashingAlgorithm(key);
        newStore[index].push({ key, val });
      }
    }
    this._storage = newStore;
  }
  retrieve(key) {
    let index = this.hashingAlgorithm(key);
    let element = this._storage[index].find((e) => e.key === key);
    return element?.val || 'not found';
  }
  hashingAlgorithm(string) {
    return Math.abs(
      XXH.h32(0xabcd).update(string).digest().toNumber() % this.size
    );
  }
}
h = new Hashtable(5);
h.insert('a', 1);
h.insert('b', 2);
h.insert('c', 3);
h.insert('d', 4);
h.insert('r', 4);
h.insert('e', 7);
h.insert('f', 8);
h.insert('g', 9);
console.log(h);
console.log(h.retrieve('h'));
console.log('-----hash table end-------');
