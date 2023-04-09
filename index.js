let nums = [10, 9, 8,4, 2, 1, 3]
console.log("Before", nums)
const bubbleSort = () => {
    for (let i = 0; i < nums.length; i++) {
        let swap = false;
        for (let j = 1; j < nums.length - i; j++) {
            if (nums[j] < nums[j-1]) {
                [nums[j-1], nums[j]] = [nums[j], nums[j-1]]
                swap = true
            }
        }
        if (!swap)
            break
    }
    return nums
}
// bubbleSort()
const insertionSort = () => {
    for (let i = 1 ; i < nums.length ; i++){
        let num = nums[i]
        let j 
        for (j = i - 1 ; j >=0 ; j--) {
            if (nums[j] > num) {
                nums[j+1] = nums[j]
            }
            else break
        }
        nums[j+1] = num
    }
}
// insertionSort()
const mergeSort = (nums) => {
    if (nums.length <= 1)
        return nums
    let length = Math.floor(nums.length/2)
    let l = nums.slice(0, length)
    let r = nums.slice(length)
    l = mergeSort(l)
    r = mergeSort(r)
    return merge(l,r)
}
const merge = (l, r) => {
    let results = []
    while (l.length && r.length) {
        if (l[0] < r[0]) {
          results.push(l.shift());
        } else results.push(r.shift());
      }
    return [...results, ...l,...r]
}
const quickSort = (nums) => {
    if (nums.length <2) {
        return nums
    }
    let pivot = nums.pop()
    let l = []
    let r = []
    for (let e of nums) {
        if (e < pivot)
            l.push(e)
        else r.push(e)
    }
    l = quickSort(l)
    r = quickSort(r)
    return [...l, pivot, ...r]
}
console.log("After", quickSort(nums))