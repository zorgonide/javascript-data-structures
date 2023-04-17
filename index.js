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

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    let current = this.head;
    if (!current) {
      this.head = node;
      this.tail = node;
      this.length++;
      return node;
    }
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.tail = node;
    this.length++;
    return node;
  }
  #find(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    let current = this.head;
    let i = 0;
    while (i++ < index) {
      current = current.next;
    }
    return current;
  }
  get(index) {
    return this.#find(index)?.value || undefined;
  }
  #findValue(value) {
    let current = this.head;
    while (current && current.value !== value) current = current.next;
    return current;
  }
  getValue(value) {
    return this.#findValue(value) || undefined;
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
  pop() {
    return this.delete(this.length - 1)?.value;
  }
  deleteValue(value) {
    if (!this.#findValue(value)) {
      console.log('Not found');
      return null;
    }
    let nodeToBeDeleted = this.#findValue(value);
    let current = this.head;
    if (current.value === value) {
      this.head = current.next;
      if (!this.head) this.tail = null;
      this.length--;

      return;
    }
    while (current.next.value !== nodeToBeDeleted.value) {
      current = current.next;
    }
    if (!current.next.next) {
      this.tail = current;
    }
    current.next = current.next.next;
    if (this.length <= 0) {
      this.head = null;
      this.tail = null;
    }
    this.length--;
  }
  delete(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    let nodeToBeDeleted;
    if (index === 0) {
      nodeToBeDeleted = this.head;
      this.head = this.head.next;
    } else {
      let i = 0,
        current = this.head;
      while (i++ < index - 1) current = current.next;
      nodeToBeDeleted = current.next;
      if (!current.next.next) this.tail = current;
      current.next = current.next.next;
    }
    this.length--;
    if (this.length === 0) this.tail = null;
    return nodeToBeDeleted;
  }
}

let ll = new LinkedList();
ll.push(1);
ll.push(2);
ll.push(3);
ll.push(4);

ll.printLinkedList();

console.log(ll.getValue(1));
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
ll.pop();
ll.pop();
ll.pop();
ll.delete(0);
ll.printLinkedList();
console.log('Head', ll.head);
console.log('Length', ll.length);
console.log('Tail', ll.tail);

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
    } else {
      let leftHeight = this.height(node.left);
      let rightHeight = this.height(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
  add(val) {
    let node = new TreeNode(val);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (1) {
        if (val < current.value) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = node;
            break;
          }
        } else {
          if (current.right) {
            current = current.right;
          } else {
            current.right = node;
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
}

let tree = new BST();
tree.add(5).add(3).add(7).add(1).add(9);
console.log(tree.height()); // Output: 2
