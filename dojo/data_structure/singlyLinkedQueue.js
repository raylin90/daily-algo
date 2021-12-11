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
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }

    dequeue() {
        if(!this.head) {
            console.log("empty queue");
            return this;
        }
        let removedNode = this.head;
        this.head = this.head.next;
        return removedNode.value;
    }

    contains(value) {
        let runner = this.head;
        while(runner) {
            if(runner.value === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    removeMin() {
        if(!this.head) {
            console.log("empty list")
            return this;
        }
        let minNode = this.head;
        let runner = this.head;
        let beforeMin, afterMin;
        while(runner.next) {
            if(runner.next.value < minNode.value) {
                beforeMin = runner;
                minNode = runner.next;
                afterMin = runner.next.next;
            }
            runner = runner.next;
        }
        // console.log(beforeMin.value);
        console.log("minNode is: ", minNode.value);
        // console.log(afterMin.value);
        if(this.head.value === minNode.value) {
            this.dequeue();
        } else if(this.tail.value === minNode.value) {
            beforeMin.next = null;
            this.tail = beforeMin;
        } else {
            beforeMin.next = afterMin;
            minNode.next = null;
        }
    }
    
    print() {
        console.log("head is: ", this.head.value)
        let runner = this.head;
        let output = "";
        while(runner) {
            output += runner.value + " => ";
            runner = runner.next;
        }
        console.log("tail is: ", this.tail.value);
        return output;
    }

    size() {
        let runner = this.head;
        let count = 0;
        while(runner) {
            count++;
            runner = runner.next;
        }
        // console.log("total: ", count);
        return count;
    }

    interleaveQueue() {
        let midPoint = Math.ceil(this.size()/2);
        let tempQueue = new SLQueue();
        // console.log(midPoint);
        for(let i = 0; i < midPoint; i++) {
            tempQueue.enqueue(this.dequeue());
        }
        let length = tempQueue.size();
        for(let j = 1; j <= length; j++) {
            tempQueue.enqueue(tempQueue.dequeue());
            if(j < length) {
                tempQueue.enqueue(this.dequeue());
            }
        }
        console.log("temp: ", tempQueue.print());
        // console.log("this: ", this.print());
    }

    isPallindrome() {
        let runner = this.head;
        let arr = [];
        while(runner) {
            arr.push(runner.value)
            runner = runner.next;
        }
        for(let i = 0; i < arr.length / 2; i++) {
            let j = arr.length - 1 - i;
            if(arr[i] !== arr[j]) {
                return false;
            }
        }
        return true;
    }
}

let queue = new SLQueue();
// queue.enqueue(-10)
// queue.enqueue(-30)
// queue.enqueue(2)
// queue.enqueue(4)
// queue.enqueue(8)
// queue.enqueue(12)
// queue.enqueue(5)
// queue.enqueue(11)
// queue.enqueue(-5)
// queue.enqueue(-33)

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
console.log(queue.print());
// queue.dequeue();
// queue.dequeue();
// console.log(queue.contains(32));
// queue.removeMin();
// queue.size();
queue.interleaveQueue();
// console.log(queue.isPallindrome());
// console.log(queue.print());