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

/**
 * If the node has no left child and no right child (i.e., it is a leaf node), then its height is set to 1. This is because a leaf node is considered to have a height of 1.

If the node has no right child or its left child's height is greater than its right child's height, then its height is set to the height of its left child plus 1. This is because the node's height is determined by the height of its left subtree.

If the node has no left child or its right child's height is greater than its left child's height, then its height is set to the height of its right child plus 1. This is because the node's height is determined by the height of its right subtree.
 */
