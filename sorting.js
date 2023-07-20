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
// bubbleSort();

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

// insertionSort();
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
  // better to take a pivot from the middle of the array to avoid worst case => which
  //  occurs if the list is nearly sorted or sorted and pivot is picked as first or last
  //  element, in which case the complexity become n^2 because it gives you n groups that
  // each need to be iterated through n times, hence the O(n^2) complexity.
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
// consider example of 4 and 1000 in array. how would you get nums[3] from that array in such a way you get 4 and 0 respectively
const getLongest = (nums) => {
  return Math.max(...nums).toString().length;
};

function radixSort(array) {
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
  return -1;
};
console.log('After', radixSort(nums));
console.log('After Search', binarySearch(radixSort(nums), 43));
