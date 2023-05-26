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
