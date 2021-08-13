// SLQueue

class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// a queue operates on the principal of "first in, first out" like waiting in line for something
class SLQueue{
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    // add a node with the given value to the queue
    enqueue(value) {
        // create a new node;
        let node = new Node(value);
        // if the list is empty, we set the head and tail = new node
        if(!this.head) {
            this.head = node;
            this.tail = node;
        }
        // otherwise: we put the new node after the tail
        this.tail.next = node;
        // and assign the new tail to the node we just added
        this.tail = node;
    }

    // remove ad return the front value from the queue
    dequeue() {
        // edge case is the queue is empty
        if(this.head == null) {
            return false;
        }
        // assign the this.head value to temp variable
        let temp = this.head.value;
        // move the head to the next in line
        this.head = this.head.next;
        // assign the temp.next to null value
        // temp.next = null;
        // return temp
        return temp;
    }

    // return true/false based on whether you find the given value in a queue
    contains(value) {
        // edge case is the queue is empty
        if(this.head == null) {
            return false;
        }
        // set up runner
        let runner = this.head;
        // keep loop as long us runner is not null
        while(runner) {
            if(runner.value == value) {
                return true;
            }
            runner = runner.next;
        }
        // No need to check the tail value at the end, same as SLL
        // if(this.tail.value == value) {
        //     return true;
        // }
        return false;
    }

    // remove the minimum value in the queue (remeber your edgecases and pointers!)
    removeMin() {
        // edge case is the queue is empty
        if(this.head == null) {
            return false;
        }
        // set up runner
        let runner = this.head;
        // set up minQ value
        let min = this.head.value;
        // keep loop as long as runner is not null
        while(runner) {
            if(runner.value < min) {
                min = runner.value;
            }
            runner = runner.next;
        }

        // once we find the min value, we need to remove by loop again to locate the location.
        // first cover the edge case first to check the first node value
        if(this.head.value == min) {
            this.head = this.head.next;
        }
        // then check rest of node expect tail, we need to do next.next because if we only run .next, it will trigger error of null
        runner = this.head;
        while(runner.next.next !== null){
            if(runner.next.value == min) {
                runner.next = runner.next.next;
            }
            runner = runner.next;
        }
        if(runner.next.value == min) {
            this.tail = runner;
            runner.next = null;
        }

    }

    // print all the value in the queue
    print() {
        if(!this.head) {
            return false;
        }
        let output = "";
        let runner = this.head;
        while(runner.next) {
            output += runner.value + " - ";
            runner = runner.next;
        }
        output += this.tail.value;
        console.log(output);
    }

    // reorder SLQueue value to alternate first half vallue with second half values in order.
    // ex:
    //  1 - 2 - 3 - 4 - 5 -
    //  1 - 2 - 3           4 - 5
    //  1 - 4 - 2 - 5 - 3

    // find the size first
    size() {
        let runner = this.head;
        let counter = 0;
        while(runner) {
            runner = runner.next;
            counter++;
        }
        return counter;
    }

    interleaveQueue(queue) {
        // find the mid point from the size
        let midpt = Math.ceil(this.size()/2);
        // create a new queue to store the value
        let tempQueue = new SLQueue();
        // for loop to midpoint and doing enqueue (add to the end) and dequede(this list, remove from the front) at this time
        for(let i = 0; i < midpt; i++) {
            tempQueue.enqueue(this.dequeue);
        }

        let length = tempQueue.size();
        // second loop to enqueue from the dequeue the tempqueue
        for(let j = 1; j <= length; j++) {
            tempQueue.enqueue(tempQueue.dequeue());
            if(j < length) {
                tempQueue.enqueue(this.dequeue());
            }
        }
        tempQueue.print();
    }
}

const q = new SLQueue();
q.enqueue(4);           // 4
q.enqueue(5);           // 4 - 5
q.enqueue(2);           // 4 -5 - 2
q.enqueue(7);           // 4 -5 -2 -7
console.log(q.contains(7))
q.enqueue(-1);
q.removeMin();
q.print();              // 4 -5 -2 -7
console.log(q.size());  // 4
q.interleaveQueue();