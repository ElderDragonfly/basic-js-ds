const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  Node = class {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const addWithin = (node, data) => {
      if (!node) {
        return new this.Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    };

    this.rootNode = addWithin(this.rootNode, data);
  }

  has(data) {
    const searchWithin = (node, data) => {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return searchWithin(node.left, data);
      } else {
        return searchWithin(node.right, data);
      }
    }

    return searchWithin(this.rootNode, data);
  }

  find(data) {
    const findWithin = (node, data) => {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return findWithin(node.left, data);
      } else {
        return findWithin(node.right, data);
      }
    }

    return findWithin(this.rootNode, data);
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    };

    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    if (!this.rootNode) return;

    let node = this.rootNode;
    while(node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootNode) return;

    let node = this.rootNode;
    while(node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};