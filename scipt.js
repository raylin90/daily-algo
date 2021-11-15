countEvensAndOdd([1, 2, 5, 8, 8, 8]);
countEvensAndOdd([1, 2, 3, 4, 5, 6, 7, 8]);
countEvensAndOdd([2, 2, 1, 1, 6, 6, 5, 5, 5, 5, 5, 5]);
countEvensAndOdd([1, 1, 2, 1, 1, 3, 3]);
// Even more so!
// That's odd!
// That's odd!
// That's odd!







// USE OBJ
// Ex1: "y(3(p)p(3)r)s" => true
// Ex2: "n(0(p)3" => false
// Ex3: "n)0(t(o)k" => false

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[]}}(){}{()}" --> true





// slque -> interleaveQueue
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
    enqueue(value) {

    }
    dequene() {

    }
    print() {

    }
}
let queue = new SLQueue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
console.log(queue.print());