//AVL TREE

class Tree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else this.root.add(value);
  }
  toObject() {
    return this.root;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.height = 1;
    this.right = null;
    this.left = null;
  }
  add(value) {
    if (value < this.value) {
      if (this.left) {
        // go left
        this.left.add(value);
      } else this.left = new Node(value);
      this.updateHeightInLocation();
    } else {
      // go right
      if (this.right) this.right.add(value);
      else this.right = new Node(value);
      this.updateHeightInLocation();
    }
    this.balance();
  }
  updateHeightInLocation() {
    if (!this.left && !this.right) {
      this.height = 1;
    } else if (!this.right || this.right.height < this.left.height) {
      this.height = this.left.height + 1;
    } else if (!this.left || this.left.height < this.right.height) {
      this.height = this.right.height + 1;
    }
  }
  balance() {
    let leftHeight = this.left?.height || 0;
    let rightHeight = this.right?.height || 0;
    if (leftHeight > rightHeight + 1) {
      let leftLeftHeight = this.left.left?.height; // check if more ? needed
      let leftRightHeight = this.left.right?.height;

      if (leftRightHeight > leftLeftHeight) {
        this.left.rotateRR();
      }
      this.rotateLL();
    } else if (rightHeight > leftHeight + 1) {
      let rightRightHeight = this.right.right?.height;
      let rightLeftHeight = this.right.left?.height;

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
    this.left.right = this.right.left;
    this.right = this.right.right;
    this.left.left = leftBefore;
    this.left.value = valueBefore;
    this.left.updateHeightInLocation();
    this.updateHeightInLocation();
  }
  rotateRR() {
    let valueBefore = this.value;
    let rightBefore = this.right;
    this.value = this.left.value;
    this.right = this.left;
    this.right.left = this.left.right;
    this.left = this.left.left;
    this.right.right = rightBefore;
    this.right.value = valueBefore;
    this.right.updateHeightInLocation();
    this.updateHeightInLocation();
  }
}

const tree = new Tree();
// Add values to the tree
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(3);
tree.add(8);

// Print the tree structure
console.log(tree.toObject());
// Expected output:
// {
//   value: 10,
//   left: {
//     value: 5,
//     left: {
//       value: 3,
//       left: null,
//       right: null,
//       height: 1
//     },
//     right: {
//       value: 8,
//       left: null,
//       right: null,
//       height: 1
//     },
//     height: 2
//   },
//   right: {
//     value: 15,
//     left: null,
//     right: null,
//     height: 1
//   },
//   height: 3
// }
console.log('----------AVL END-------------');

/**
 * updateInNewLocation
 * If the node has no left child and no right child (i.e., it is a leaf node), then its height is set to 1. This is because a leaf node is considered to have a height of 1.

If the node has no right child or its left child's height is greater than its right child's height, then its height is set to the height of its left child plus 1. This is because the node's height is determined by the height of its left subtree.

If the node has no left child or its right child's height is greater than its left child's height, then its height is set to the height of its right child plus 1. This is because the node's height is determined by the height of its right subtree.
 */
