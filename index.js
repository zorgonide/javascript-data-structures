import './hashing.js';
import './linkedList.js';

console.log('--------------Bloom filters begin----------------');
const XXH = require('xxhashjs');
const h1 = (string) =>
  Math.abs(XXH.h32(0xabcd).update(string).digest().toNumber() % 100);
const h2 = (string) =>
  Math.abs(XXH.h32(0x1234).update(string).digest().toNumber() % 100);
const h3 = (string) =>
  Math.abs(XXH.h32(0x6789).update(string).digest().toNumber() % 100);

//generate hash between 0-100
class BloomFilter {
  #array;
  constructor() {
    this.#array = new Array(100).fill(0);
  }
  add(string) {
    this.#array[h1(string)] = 1;
    this.#array[h2(string)] = 1;
    this.#array[h3(string)] = 1;
  }
  contains(string) {
    return !!(
      this.#array[h3(string)] &&
      this.#array[h2(string)] &&
      this.#array[h1(string)]
    );
  }
}
let bf = new BloomFilter();
// console.log(bf.contains('Brian'));
const names = [
  'Brian',
  'Simona',
  'Sarah',
  'Asim',
  'John',
  'Sean',
  'Jessie',
  'Paige',
  'Ashley',
];
names.forEach((item) => bf.add(item));
['Sam', 'Brian', 'Taylor', 'Florence', 'Asim'].forEach((item) =>
  console.log(bf.contains(item))
);

console.log('--------------Bloom filters end----------------');
