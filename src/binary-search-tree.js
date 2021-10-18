const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  root() {
    return this.data || null;
  }

  add(data) {
    this.data = addNode(this.data, data);

    function addNode(node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;

      if (data > node.data) node.right = addNode (node.right, data)
      else node.left = addNode (node.left, data);

      return node;
    }
  }

  has(data) {
    return findValue(this.data, data);

    function findValue(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      return (data > node.data) ? findValue(node.right, data) : findValue(node.left, data);
    }
  }

  find(data) {
    return findNode(this.data, data);

    function findNode(node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      return (data > node.data) ? findNode(node.right, data) : findNode(node.left, data);
    }
  }

  remove(data) {
    this.data = removeNode(this.data, data);
    
    function removeNode(node, data) {
      if (!node) return null;

      if (node.data === data) {
        if (!node.left && !node.right) {
          return null;
        }

        if (node.left && node.right) {
          let minNodeFromRight = node.right;

          while (minNodeFromRight.left) minNodeFromRight = minNodeFromRight.left;

          node.data = minNodeFromRight.data;
          node.right = removeNode(node.right, minNodeFromRight.data);
  
          return node;
        }

        return (!node.right) ? node.left : node.right;
      }

      if (data > node.data) node.right = removeNode(node.right, data)
      else node.left = removeNode(node.left, data);

      return node;
    }
  }

  min() {
    return findMinValue(this.data);

    function findMinValue(node) {
      if (!node) return null;
      return (node.left) ? findMinValue(node.left) : node.data;
    }
  }

  max() {
    return findMaxValue(this.data);

    function findMaxValue(node) {
      if (!node) return null;
      return (node.right) ? findMaxValue(node.right) : node.data;
    }
  }

}