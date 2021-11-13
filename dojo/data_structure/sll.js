class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addToFront(value) {
        let newNode = new Node(value)
        if(!this.head) {
            this.head = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    addToBack(value) {
        let newNode = new Node(value)
        if(!this.head) {
            this.head = newNode;
            return this;
        }
        let runner = this.head;
        while(runner.next) {
            runner = runner.next;
        }
        runner.next = newNode;
    }

    removeFromFront() {
        if(!this.head) {
            console.log("empty list")
            return this;
        }
        if(this.head.next === null) {
            this.head = null;
            return this;
        }
        let removedNode = this.head;
        this.head = this.head.next;
        removedNode.next = null;
    }

    removeFromBack() {
        if(!this.head) {
            console.log("empty list")
            return this;
        }
        if(this.head.next === null) {
            this.head = null;
            return this;
        }
        let runner = this.head;
        while(runner.next.next) {
            runner = runner.next;
        }
        runner.next = null;
    }

    moveMinToFront() {
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
                // console.log(beforeMin);
                // console.log(minNode);
                // console.log(afterMin);
            }
            runner = runner.next;
        }
        if(this.head.value === minNode.value) {
            return this;
        } else {
            beforeMin.next = afterMin;
            minNode.next = this.head;
            this.head = minNode;
        }
    }

    moveMaxToBack() {
        if(!this.head) {
            console.log("empty list")
            return this;
        }
        let maxNode = this.head;
        let runner = this.head;
        let beforeMax, afterMax;
        while(runner.next) {
            if(runner.next.value > maxNode.value) {
                beforeMax = runner;
                maxNode = runner.next;
                afterMax = runner.next.next;
                // console.log("before ", beforeMax.value);
                // console.log(maxNode.value);
                // console.log("after ", afterMax.value);
            }
            runner = runner.next;
        }
        if(runner.value === maxNode.value) {
            return this;
        } else if(this.head.value === maxNode.value) {
            this.head = this.head.next;
            runner.next = maxNode;
            maxNode.next = null;
        } else {
            beforeMax.next = afterMax;
            runner.next = maxNode;
            maxNode.next = null;
        }
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

    print() {
        let runner = this.head;
        let output = "";
        while(runner) {
            output += runner.value + " => "
            runner = runner.next;
        }
        return output;
    }
}



let list = new SLL();
list.addToBack(2);
list.addToBack(3);
list.addToBack(11);
list.addToBack(4);
list.addToBack(7);
list.addToBack(1);
list.addToFront(31);
console.log(list.print());
// list.moveMinToFront();
list.moveMaxToBack();
// list.removeFromFront();
// list.removeFromFront();
// list.removeFromBack();
// console.log(list.contains(2));
console.log(list.print());