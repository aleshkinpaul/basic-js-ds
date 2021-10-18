const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor () {
    this.value = null;
  }

  getUnderlyingList() {
    return this.value;
  }

  enqueue(value) {
    if (!this.value) {
      this.value = new ListNode(value);
      return;
    }
    let lastItem = this.value;
    while (lastItem.next) lastItem = lastItem.next;
    lastItem.next = new ListNode(value);
  }

  dequeue() {
    let headElement = this.value.value;
    this.value = this.value.next;
    return headElement;
  }

}
