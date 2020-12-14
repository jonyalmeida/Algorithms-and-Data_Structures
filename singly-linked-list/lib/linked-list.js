const { Node } = require("./node");

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //getter methods
    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    getLength() {
        return this.length;
    }

    addToHead(value) {
        const newNode = new Node(value);

        //check if head exists
        if (!this.head) {
            //both head & tail are new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            //add new node to head
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    addToTail(value) {
        const newNode = new Node(value);

        //check if head exists
        if (!this.head) {
            //both head & tail are new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            //add new tail
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    set(idx, val) {
        const foundNode = this.get(idx);
        if (foundNode) {
            foundNode.value = val;
            return true;
        }

        return false;
    }

    insert(index, val) {
        if (index < 0 || index >= this.length) return false;
        if (index === this.length) return !!this.addToTail(val);
        if (index === 0) return !!this.addToHead(val);

        const newNode = new Node(val);
        const prev = this.get(index - 1);
        const temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.removeHead();
        if (index === this.length - 1) return this.removeTail();
        const previousNode = this.get(index - 1);
        const removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    get(idx) {
        if (idx >= this.length || this.length === 0) return null;

        let count = 0;

        let currNode = this.head;
        while (count < idx) {
            currNode = currNode.next;
            count++;
        }

        return currNode;
    }

    contains(value) {
        //initialize current node
        let currNode = this.head;

        //traverse linked list until find value or end list
        while (currNode) {
            if (currNode.value === value) {
                return true;
            }
            currNode = currNode.next;
        }

        //return null if value not in list
        return false;
    }

    removeHead() {
        if (!this.head) return;

        const oldHead = this.head;
        this.head = this.head.next;

        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return oldHead;
    }

    removeTail() {
        if (!this.head) return;

        let currNode = this.head;
        let newTail = currNode;

        while (currNode.next) {
            newTail = currNode;
            currNode = currNode.next;
        }
        this.tail = newTail;
        this.tail.next = null;

        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return currNode;
    }
}

module.exports = {
    LinkedList,
};
