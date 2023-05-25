let nums = [10, 9, 8, 4, 7, 2, 27, 1, 3];
console.log('Before', nums);
const bubbleSort = () => {
  for (let i = 0; i < nums.length; i++) {
    let swap = false;
    for (let j = 1; j < nums.length - i; j++) {
      if (nums[j] < nums[j - 1]) {
        [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
        swap = true;
      }
    }
    if (!swap) break;
  }
  return nums;
};
// bubbleSort()
const insertionSort = () => {
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (nums[j] > num) {
        nums[j + 1] = nums[j];
      } else break;
    }
    nums[j + 1] = num;
  }
};
// insertionSort()
const mergeSort = (nums) => {
  if (nums.length <= 1) return nums;
  let length = Math.floor(nums.length / 2);
  let l = nums.slice(0, length);
  let r = nums.slice(length);
  l = mergeSort(l);
  r = mergeSort(r);
  return merge(l, r);
};
const merge = (l, r) => {
  let results = [];
  while (l.length && r.length) {
    if (l[0] < r[0]) {
      results.push(l.shift());
    } else results.push(r.shift());
  }
  return [...results, ...l, ...r];
};
const quickSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }
  let pivot = nums.pop();
  let l = [];
  let r = [];
  for (let e of nums) {
    if (e < pivot) l.push(e);
    else r.push(e);
  }
  l = quickSort(l);
  r = quickSort(r);
  return [...l, pivot, ...r];
};

const getDigit = (num, place, longest) => {
  num = num.toString();
  let size = num.length;
  let displace = longest - size;
  return num[place - displace] || 0;
};
const getLongest = (nums) => {
  return Math.max(...nums).toString().length;
};

function radixSort(array) {
  // code goes here
  let longest = getLongest(array);
  let buckets = new Array(10).fill().map(() => []);
  for (let i = longest - 1; i >= 0; i--) {
    while (array.length) {
      let current = array.shift();
      buckets[getDigit(current, i, longest)].push(current);
    }
    for (let x = 0; x < 10; x++) {
      while (buckets[x].length) {
        array.push(buckets[x].shift());
      }
    }
  }
  return array;
}

const binarySearch = (nums, searchTerm) => {
  let min = 0,
    max = nums.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (searchTerm < nums[middle]) {
      max = middle - 1;
    } else if (searchTerm > nums[middle]) min = middle + 1;
    else return nums[middle];
  }
  return undefined;
};
// console.log('After', radixSort(nums));
// console.log('After Search', binarySearch(radixSort(nums), 20));

//Linked List

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

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
console.log(q.dequeue());
// console.log(q.length);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log('should be 1 =>' + q.length); // undefined
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log('should be undefined =>' + q.dequeue()); // undefined

console.log('----------queue end--------------');
console.log('----------Linkedlist start--------------');
class LinkedList {
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
      this.length++;
      return node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.tail = node;
      this.length++;
      return node;
    }
  }
  #find(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    let i = 0;
    let current = this.head;
    while (i++ < index) {
      current = current.next;
    }
    return current;
  }
  #findValue(value) {
    if (!this.head) {
      return undefined;
    }
    let i = 0;
    let current = this.head;
    while (i++ < this.length && current.value != value) {
      current = current.next;
    }
    return current;
  }
  getValue(val) {
    return this.#findValue(val)?.value || 'not found';
  }
  get(index) {
    return this.#find(index)?.value || 'not found';
  }
  delete(index) {
    let nodeToBeDeleted = this.#find(index);
    if (!nodeToBeDeleted) {
      console.log('index out of bounds');
      return undefined;
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let i = 0;
      let current = this.head;
      while (i++ < index - 1) {
        current = current.next;
      }
      current.next = current.next?.next || null;
      if (this.length === index + 1) {
        this.tail = current;
      }
    }
    this.length--;
    if (this.length === 0) this.tail = null;
    return nodeToBeDeleted;
  }
  pop() {
    return this.delete(this.length - 1);
  }
  deleteValue(value) {
    let nodeToBeDeleted = this.#findValue(value);
    if (!nodeToBeDeleted) {
      console.log('value not found');
      return undefined;
    }
    if (this.head === nodeToBeDeleted) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      while (current.next !== nodeToBeDeleted) {
        current = current.next;
      }
      current.next = current.next?.next || null;
      if (!current.next) {
        this.tail = current;
      }
    }
    this.length--;
    if (this.length === 0) this.tail = null;
    return nodeToBeDeleted;
  }
  printLinkedList() {
    let current = this.head;
    let listString = '';
    while (current !== null) {
      listString += current.value + ' -> ';
      current = current.next;
    }
    listString += 'null';
    console.log(listString);
  }
}
console.log('-----Linked List Start-----');
let ll = new LinkedList();
ll.push(1);
ll.push(2);
ll.push(3);
ll.push(4);

ll.printLinkedList();

// console.log(ll.getValue(3));
// console.log(ll.get(-2));

ll.pop();
ll.printLinkedList();
ll.pop();
ll.printLinkedList();
ll.pop();
ll.printLinkedList();
ll.pop();
ll.printLinkedList();

ll.push(4);
ll.push(3);
ll.push(2);
ll.push(1);
ll.printLinkedList();
// ll.pop();
// ll.pop();
// ll.pop();
// ll.deleteValue(4);
// ll.printLinkedList();
console.log('Head', ll.head);
console.log('Length', ll.length);
console.log('Tail', ll.tail);
console.log('-----Linked List End-------');

// BST

class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  height(node = this.root) {
    if (!node) {
      return -1;
    }
    return Math.max(this.height(node.left), this.height(node.right)) + 1;
  }
  add(val) {
    if (!this.root) {
      this.root = new TreeNode(val);
    } else {
      let current = this.root;
      while (1) {
        if (val < current.value) {
          if (current.left) current = current.left;
          else {
            current.left = new TreeNode(val);
            break;
          }
        }
        if (val > current.value) {
          if (current.right) current = current.right;
          else {
            current.right = new TreeNode(val);
            break;
          }
        }
      }
    }
    return this;
  }
  toObject() {
    return this.root;
  }
  printBST(node, prefix = '', isLeft = true) {
    if (node !== null) {
      console.log(prefix + (isLeft ? '├──' : '└──') + node.value);
      const indent = prefix + (isLeft ? '│  ' : '   ');
      this.printBST(node.left, indent, true);
      this.printBST(node.right, indent, false);
    }
  }
}
console.log('-----BST Start-------');

let tree = new BST();
tree.add(5).add(3).add(7).add(1).add(9);
console.log(tree.height()); // Output: 2
console.log(tree.printBST(tree.toObject()));
console.log('-----BST End-------');
console.log('-----AVL Start-------');

//AVL TREE

class AVLTree {
  // code goes here
  constructor() {
    this.root = null;
  }
  add(value) {
    if (!this.root) {
      this.root = new AVLNp(value);
    } else {
      this.root.add(value);
    }
  }
  toObject() {
    return this.root;
  }
}

class AVLNode {
  // code also goes here
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
    this.height = 1;
  }
  add(value) {
    if (value < this.value) {
      // go left
      if (this.left) this.left.add(value);
      else {
        this.left = new AVLNode(value);
      }
      this.updateInNewLocation();
    } else {
      // go right
      if (this.right) this.right.add(value);
      else this.right = new AVLNode(value);
      this.updateInNewLocation();
    }
    this.balance();
  }
  balance() {
    let rightHeight = this.right?.height || 0;
    let leftHeight = this.left?.height || 0;

    if (leftHeight > rightHeight + 1) {
      let leftLeftHeight = this.left?.left?.height || 0;
      let leftRightHeight = this.left?.right?.height || 0;

      if (leftRightHeight > leftLeftHeight) {
        this.left.rotateRR();
      }
      this.rotateLL();
    } else if (rightHeight > leftHeight + 1) {
      let rightLeftHeight = this.right?.left?.height || 0;
      let rightRightHeight = this.right?.right?.height || 0;

      if (rightLeftHeight > rightRightHeight) {
        this.right.rotateLL();
      }
      this.rotateRR();
    }
  }
  rotateRR() {
    let valueBefore = this.value;
    let leftBefore = this.left;
    this.value = this.right.value;
    this.left = this.right;
    this.right = this.right.right;
    this.left.right = this.left.left;
    this.left.left = leftBefore;
    this.left.value = valueBefore;
    this.left.updateInNewLocation();
    this.updateInNewLocation();
  }
  rotateLL() {
    let valueBefore = this.value;
    let rightBefore = this.right;
    this.value = this.left.value;
    this.right = this.left;
    this.left = this.left.left;
    this.right.left = this.right.right;
    this.right.right = rightBefore;
    this.right.value = valueBefore;
    this.right.updateInNewLocation();
    this.updateInNewLocation();
  }
  updateInNewLocation() {
    if (!this.right && !this.left) this.height = 1;
    else if (!this.right || this.left?.height > this.right?.height)
      this.height = this.left.height + 1;
    else if (!this.left || this.right?.height > this.left?.height)
      this.height = this.right.height + 1;
  }
}

console.log('----------AVL END-------------');
console.log('----------TRIES BEGIN-------------');

class TrieNode {
  constructor(string) {
    this.terminus = false;
    this.children = [];
    this.value = string[0] || '';
    if (string.length > 1) {
      this.children.push(new TrieNode(string.slice(1)));
    } else this.terminus = true;
  }
  add(string) {
    let value = string[0];
    let next = string.slice(1);
    for (let child of this.children) {
      if (child.value === value) {
        if (next) child.add(next);
        else child.terminus = true; // terminate child not parent
        return; // return if there is a match
      }
    }
    this.children.push(new TrieNode(string));
  }
  #complete(search, built, suggestions) {
    if (suggestions.length >= 3 || (search && search[0] !== this.value)) {
      return suggestions;
    }
    if (this.terminus) {
      suggestions.push(built + this.value);
    }
    this.children.forEach((child) => {
      child.#complete(search.slice(1), built + this.value, suggestions);
    });
    return suggestions; // remember to return suggestions
  }
  complete(string) {
    let completions = [];
    for (let child of this.children) {
      completions = completions.concat(child.#complete(string, '', []));
    }
    return completions;
  }
}

function printTrie(node, indent = '') {
  if (node.value !== '') {
    console.log(indent + node.value);
    indent += '->';
  }

  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    printTrie(child, indent);
  }
}

const createTrie = (words) => {
  let root = new TrieNode('');
  for (let word of words) {
    root.add(word.toLowerCase());
  }
  return root;
};
const CITY_NAMES = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Philadelphia',
  'Phoenix',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose',
  'Austin',
  'Indianapolis',
  'Jacksonville',
  'San Francisco',
  'Columbus',
];
const root = createTrie(CITY_NAMES.slice(0, 10));

// console.log(printTrie(root));
console.log(root.complete('ph'));
console.log('--------------Tries end----------------');
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
bf = new BloomFilter();
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
console.log('--------------Pathfinding start------------');
const BY_A = 1;
const BY_B = 2;
const NO_ONE = 0;

const generateVisited = (maze) => {
  return maze.map((row, y) =>
    row.map((ele, x) => ({
      opened_by: NO_ONE,
      closed: ele === 1,
      length: 0,
      x,
      y,
    }))
  );
};

function findShortestPathLength(maze, [xA, yA], [xB, yB]) {
  let visited = generateVisited(maze);
  visited[yA][xA].opened_by = BY_A;
  visited[yB][xB].opened_by = BY_B;

  let aQueue = [visited[yA][xA]];
  let bQueue = [visited[yB][xB]];
  let iteration = 0;

  while (aQueue.length && bQueue.length) {
    iteration++;

    let aNeighbours = [];
    // get A neighbours
    while (aQueue.length) {
      let coordinate = aQueue.shift();
      aNeighbours = aNeighbours.concat(
        getNeighbours(visited, coordinate.x, coordinate.y)
      );
    }
    //process B neighbours
    for (let neighbour of aNeighbours) {
      if (neighbour.opened_by === BY_B) return iteration + neighbour.length;
      else if (neighbour.opened_by === NO_ONE) {
        neighbour.length = iteration;
        neighbour.opened_by = BY_A;
        aQueue.push(neighbour);
      }
    }

    let bNeighbours = [];
    // get A neighbours
    while (bQueue.length) {
      let coordinate = bQueue.shift();
      bNeighbours = bNeighbours.concat(
        getNeighbours(visited, coordinate.x, coordinate.y)
      );
    }
    //process B neighbours
    for (let neighbour of bNeighbours) {
      if (neighbour.opened_by === BY_A) return iteration + neighbour.length;
      else if (neighbour.opened_by === NO_ONE) {
        neighbour.length = iteration;
        neighbour.opened_by = BY_B;
        bQueue.push(neighbour);
      }
    }
  }

  return -1;
}
// the coordinates are in (x,y) format but they translate into [y][x]. think of it in that way
function getNeighbours(visited, x, y) {
  const neighbours = [];
  if (x - 1 >= 0 && !visited[y][x - 1].closed) {
    neighbours.push(visited[y][x - 1]);
  }
  if (x + 1 < visited[y].length && !visited[y][x + 1].closed) {
    neighbours.push(visited[y][x + 1]);
  }
  if (y - 1 >= 0 && !visited[y - 1][x].closed) {
    neighbours.push(visited[y - 1][x]);
  }
  if (y + 1 < visited.length && !visited[y + 1][x].closed) {
    neighbours.push(visited[y + 1][x]);
  }
  return neighbours;
}
console.log('----------------pathfinding end------------');
