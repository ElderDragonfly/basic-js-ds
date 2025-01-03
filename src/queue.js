const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
 class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // Голова очереди
    this.tail = null; // Хвост очереди
  }

  getUnderlyingList() {
    return this.head; // Возвращаем связный список, начиная с головы
  }

  enqueue(value) {
    const newNode = new ListNode(value); // Создаем новый узел
    if (this.tail) {
      this.tail.next = newNode; // Присоединяем новый узел к хвосту
    }
    this.tail = newNode; // Обновляем хвост
    if (!this.head) {
      this.head = newNode; // Если очередь была пустой, обновляем голову
    }
  }

  dequeue() {
    if (!this.head) {
      return undefined; // Если очередь пуста
    }
    const value = this.head.value; // Сохраняем значение головы
    this.head = this.head.next; // Перемещаем голову на следующий узел
    if (!this.head) {
      this.tail = null; // Если очередь стала пустой, обнуляем хвост
    }
    return value;
  }
}


module.exports = {
  Queue
};
