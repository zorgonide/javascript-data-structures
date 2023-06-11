// hashtable
const XXH = require('xxhashjs');
console.log('-----hash table start------');

class Hashtable {
  constructor(size) {
    this._storage = new Array(size);
    this._tableSize = size;
    this.elements = 0;
  }
  insert(key, val) {
    let index = this.hashingAlgorithm(key);
    if (!this._storage[index]) this._storage[index] = [];
    this._storage[index].push([key, val]);
    this.elements++;
    this.adjust();
  }
  adjust() {
    if (this.elements > Math.floor(this._tableSize / 2)) {
      let newarray = new Array(this._tableSize * 2);
      this._tableSize = this._tableSize * 2;
      this._storage.forEach((e) => {
        if (Array.isArray(e)) {
          e.forEach((element) => {
            let index = this.hashingAlgorithm(element[0]);
            if (!newarray[index]) newarray[index] = [];
            newarray[index].push([element[0], element[1]]);
          });
        }
      });
      this._storage = newarray;
    }
  }
  retrieve(key) {
    let index = this.hashingAlgorithm(key);
    if (this._storage[index])
      return this._storage[index].find((e) => e[0] === key);
    else return undefined;
  }
  hashingAlgorithm(string) {
    return Math.abs(
      XXH.h32(0xabcd).update(string).digest().toNumber() % this._tableSize
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
console.log(h.retrieve('b'));
console.log('-----hash table end-------');
