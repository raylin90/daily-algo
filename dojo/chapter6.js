class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Create SLQueue method enqueue(val) to add the given value to end of our queue. Remember, SLQueue uses a singly linked list (not an array).
    enqueue(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        let runner = this.head;
        while(runner.next) {
            runner = runner.next;
        }
        runner.next = newNode;
        this.tail = newNode;
    }

    // Create SLQueue method front() to return the value at front of our queue, without removing it.
    front() {
        if(!this.head) return null;
        return this.head.value;
    }

    // Create SLQueue method isEmpty() that returns whether our queue contains no values.
    isEmpty() {
        if(!this.head) return "empty";
        return "not empty";
    }

    // Create SLQueue method dequeue() to remove and return value at front of queue. Remember, SLQueue uses singly linked list (not array).
    dequeue() {
        if(!this.head) return null;
        if(!this.head.next) {
            let value = this.head.value;
            this.head = null;
            this.tail = null;
            return value;
        }
        let removedNode = this.head;
        this.head = this.head.next;
        removedNode.next = null;
        return removedNode.value;
    }

    // Given two SLQueue objects, create a standalone function that returns whether they are equal. Queues are equal only if they have equal elements in identical order. Allocate no other object, and return the queues in their original condition upon exit.
    compare(list2) {
        while(this.head && list2.head) {
            if(!this.head.value === list2.head.value) {
                return false;
            }
            this.dequeue();
            list2.dequeue();
        }
        if(!this.head && !list2.head) {
            return true;
        } else {
            return false;
        }
    }

    // Create method contains(val) to return whether given value is found within our queue.
    contains(val) {
        let runner = this.head;
        while(runner) {
            if(runner.value === val) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // Create SLQueue method size() that returns the number of values in our queue.
    size() {
        let runner = this.head;
        let count = 0;
        if(!this.head) return null;
        while(runner) {
            count++;
            runner = runner.next;
        }
        return count;
    }

    // Create a standalone function to remove an SLQueue’s lowest value, otherwise leaving values in the same sequence. Use only local variables; allocate no other objects. Remove all duplicates of this value.
    removeMin() {
        let runner = this.head;
        let min = this.head;
        while(runner.next) {
            if(runner.next.value < min.value) {
                min = runner.next;
            }
            runner = runner.next;
        }
        console.log(min.value);

        // let beforeMin, afterMin;
        runner = this.head;
        while(runner.next.next) {
            if(runner.next.value === min.value) {
                let removedNode = runner.next;
                runner.next = runner.next.next;
                removedNode.next = null;
                continue;
            }
            runner = runner.next;
        }
        if(this.head.value === min.value) {
            this.dequeue();
        }
        if(runner.next.value === min.value) {
            runner.next = null;
            this.tail = runner;
        }
        return this.display();
    }

    // Bonus: Remove only the last minimum value. Convert [7,2,5,2,4] to [7,2,5,4].
    removeMin2() {
        let runner = this.head;
        let min = this.head;
        let beforeMin, afterMin;
        while(runner.next.next) {
            if(runner.next.value <= min.value) {
                beforeMin = runner;
                min = runner.next;
                afterMin = runner.next.next;
            }
            runner = runner.next;
        }
        console.log(min.value);
        if(this.tail.value <= min.value) {
            runner.next = null;
            this.tail = runner;
            return this.display();
        } else if(!beforeMin) {
            this.dequeue();
            return this.display();
        } else {
            beforeMin.next = afterMin;
            min.next = null;
            return this.display();
        }
    }

    // Reorder SLQueue values to alternate first half values with second half values, in order. For example: (1,2,3,4,5) becomes (1,4,2,5,3). You may create one additional SLQueue, if needed.
    interleave() {
        let length = Math.ceil(this.size()/2);
        let newQueue = new SLQueue();
        for(let i = 0; i < length; i++) {
            newQueue.enqueue(this.dequeue());
        }
        for(let j = 0; j < length; j++) {
            newQueue.enqueue(newQueue.dequeue());
            if(this.head) {
                newQueue.enqueue(this.dequeue());
            }
        }

        return newQueue.display();
        // console.log("this ", this.display());

    }

    display() {
        let runner = this.head;
        let output = "";
        while(runner) {
            output += runner.value + "->";
            runner = runner.next;
        }
        console.log(`head: ${this.head.value}, and tail: ${this.tail.value}`);
        return output;
    }
}


let q = new SLQueue();
// q.enqueue(-10);
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
// q.enqueue(-8);
q.enqueue(4);
q.enqueue(5);

console.log(q.display());
// console.log(q.front());
// console.log(q.isEmpty());
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.contains(-15));
// console.log(q.size());
// console.log(q.removeMin());
// console.log(q.removeMin());
// console.log(q.removeMin2());
// console.log(q.display());
console.log("*************************")
console.log(q.interleave());


// let q2 = new SLQueue();
// q2.enqueue(12);
// q2.enqueue(8);
// q2.enqueue(20);
// q2.enqueue(3);
// q2.enqueue(-5);
// q2.enqueue(-5);

// let q3 = new SLQueue();
// q3.enqueue(12);
// q3.enqueue(8);
// q3.enqueue(20);
// q3.enqueue(3);
// q3.enqueue(-5);
// console.log(q2.compare(q3));