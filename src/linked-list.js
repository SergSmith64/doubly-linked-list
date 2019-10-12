const Node = require('./node');

class LinkedList {
    constructor() {
        this.lenght = 0;
        this._head = 0;
        this._tail = 0;
    }

    append(data) {
        const node = new Node(data, this._tail);
        if (this._tail) this._tail.next = node;
        this._tail = node;
        if (!this._head) this._head = node;
        this.length++;
        return this;
    }

    head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        return this._tail ? this._tail.data : null;
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {
        return !this._head;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.lenght = 0;
        return this;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {
        let curr = this._head;
        for (let i = 0; curr !== null; i++) {
          if (curr.data === data) {
            return i;
          }
          curr = curr.next;
        }
        return -1;
      }
    }

module.exports = LinkedList;
