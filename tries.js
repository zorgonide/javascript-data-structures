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
