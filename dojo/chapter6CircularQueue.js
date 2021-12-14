class CirQueue {
    constructor() {
        this.storage = [];
        this.head = 0;
        this.tail = 0;
        this.size = 0;
        this.cap = 5;
    }

    // Create enqueue(val) that adds val to our CirQueue, or returns false. Wrap if needed!
    enqueue(value) {
        if(this.isFull()) throw new Error("Queue is full");
        this.storage[this.tail] = value;
        this.tail = (this.tail + 1) % this.cap;
        this.size++;
        return this;
    }

    // Create CirQueue method dequeue() that removes/returns front value, or null on fail.
    dequeue() {
        if(this.size === 0) return null;
        let data = this.storage[this.head];
        this.head = (this.head + 1) % this.cap;
        this.size --;
        return this;
    }

    // Return (not remove) the queue’s front value.
    getFront() {
        return this.storage[this.head];
    }

    display() {
        let output = "";
        for(let i = this.head; i < this.storage.length; i++) {
            output += this.storage[i] + "->";
        }
        console.log("tail: ", this.tail)
        console.log("head: ", this.head)
        // if(this.tail <= this.head) {
        for(let i = 0; i < this.tail; i++) {
            output += this.storage[i] + "->";
            // console.log(this.storage[i])
        }
        // }
        return output;
    }

    // return wehther queue is full;
    isFull() {
        if(this.size == this.cap) {
            // console.log("full");
            return true;
        }
    }

    // Return whether queue is empty.
    isEmpty() {
        if(this.size === 0) return "empty";
    }

    // Return number of queued vals (not capacity).
    getSize() {
        return this.size;
    }

    // Return whether given val is within the queue.
    contains(value) {
        for(let i = 0; i < this.storage.length; i++) {
            if(this.storage[i] === value) {
                return true;
            }
        }
        return false;
    }

    // (advanced) Create method grow(newSize) that expands a CirQueue to a new given size.
    grow(num) {
        this.cap = num;
    }

    // Rob sees the world in clear black-and-white terms. Scott, however, is more likely to say “it depends” and see shades of grey. Create a standalone function that accepts a Queue of numbers, sequenced in absolute-value order, such as (10,-20,30,-40,50). Using only an additional Stack for storage, reorder the Queue values so that they are in increasing order, such as (-40,-20,10,30,50).
    reorder() {
        this.storage.sort(function(a,b) {return a-b});
        return this.storage;
    }

    // Numerous values are stored in a Stack. Divide the values into a group of positive numbers and a group of zero-or-negative numbers. Rearrange the Stack’s values so that when popping, all non-positive values come before all positive numbers. The original order can otherwise be disregarded. Use only one Queue for additional storage.
    partition() {
        let start = 0;
        let end = this.storage.length - 1;
        while(start < end) {
            while(this.storage[start] < 0) {
                start++;
            }
            while(this.storage[end] > 0) {
                end --;
            }
            if(start < end) {
                [this.storage[start], this.storage[end]] = [this.storage[end], this.storage[start]];
            }
        }
        return this.storage;
    }
}

let q = new CirQueue();
q.enqueue(10).enqueue(-20).enqueue(30).enqueue(-40).enqueue(50);
// q.dequeue().dequeue().dequeue();
// q.enqueue(6).enqueue(7).enqueue(1);
// console.log(q.getFront());
// console.log(q.isEmpty());
// console.log(q.contains(3));
// q.grow(6);
// q.enqueue(2).dequeue().enqueue(3).dequeue().enqueue(4)
// console.log(q.display());
console.log(q.storage);
// console.log(q.reorder());
// console.log(q.getSize());
console.log(q.partition());