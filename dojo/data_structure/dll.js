class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToFront(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
    }

    addToBack(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
    }

    removeFront() {
        if(!this.head) {
            console.log("empty list");
            return this;
        } else if(!this.head.next) {
            this.head = null;
            this.tail = null;
            return this;
        }
        // console.log(this.head.value)
        let removedNode = this.head;
        this.head = this.head.next;
        removedNode.next = null;
        this.head.previous = null;
    }

    removeBack() {
        if(!this.head) {
            console.log("empty list");
            return this;
        } else if(!this.head.next) {
            this.head = null;
            this.tail = null;
            return this;
        }
        let removedNode = this.tail;
        this.tail = this.tail.previous;
        this.tail.next = null;
        removedNode.previous = null;
    }

    print() {
        let runner = this.head;
        let output = "";
        while(runner) {
            output += runner.value + " <=> "
            runner = runner.next;
        }
        // console.log("head: ", this.head.value);
        // console.log("tail: ", this.tail.value);
        return output;
    }

    reverse() {
        let runner = this.head;
        let arr = [];
        while(runner) {
            arr.push(runner.value);
            runner = runner.next;
        }
        let newList = new DLList();
        for(let i = arr.length - 1; i >= 0; i--) {
            newList.addToBack(arr[i]);
        }
        return newList.print();
    }

    reverseInPlace() {
        let prev = null;
        let current = this.head;
        let after = current.next;
        while(current.next) {
            current.next = prev;
            current.previous = after;
            prev = current;
            current = after;
            after = current.next;
        }
        current.next = prev;
        this.head = current;
        return this.print();
    }
}

let list = new DLList();
list.addToFront(2);
list.addToFront(3);
list.addToFront(12);
list.addToBack(5);
console.log(list.print());
// list.removeFront();
// list.removeFront();
// list.removeFront();
// list.removeFront();
// list.removeBack();
// list.removeBack();
// list.removeBack();
// list.removeBack();
// console.log(list.print());
// console.log(list.reverse());
console.log(list.reverseInPlace());