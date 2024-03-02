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

// Test Suite
console.log('Starting Hashtable Tests');

// Test 1: Hashtable Initialization
let hashtable = new Hashtable(4);
console.log(
  hashtable.size === 4,
  'Hashtable should be initialized with size 4.'
);
console.log(
  hashtable.length === 0,
  'Hashtable should be initialized with length 0.'
);

// Test 2: Insert Functionality
hashtable.insert('key1', 'value1');
console.log(
  hashtable.length === 1,
  'Hashtable should contain one element after insertion.'
);

// Test 3: Retrieve Functionality
let retrievedValue = hashtable.retrieve('key1');
console.log(
  retrievedValue === 'value1',
  'Retrieve should return the correct value for a key.'
);

// Test 4: Retrieve Non-Existent Key
retrievedValue = hashtable.retrieve('nonexistent');
console.log(
  retrievedValue === 'not found',
  "Retrieve should return 'not found' for a key that does not exist."
);

// Test 5: Adjust Size and Rehash
// Insert enough elements to trigger an adjust
hashtable.insert('key2', 'value2');
hashtable.insert('key3', 'value3');
// This insertion should trigger the adjust
hashtable.insert('key4', 'value4');
console.log(
  hashtable.size === 8,
  'Hashtable size should double when length exceeds half of its size.'
);
console.log(
  hashtable.length === 4,
  'Hashtable should correctly reflect the number of elements after adjusting.'
);

// Test 6: Retrieve After Adjust
retrievedValue = hashtable.retrieve('key3');
console.log(
  retrievedValue === 'value3',
  'Retrieve should return the correct value for a key after the hashtable adjusts.'
);

console.log('Hashtable Tests Completed');
console.log('-----hash table end-------');
