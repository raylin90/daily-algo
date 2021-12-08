class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLists {
    constructor() {
        this.head = null;
    }

    // Rudy isn’t nice: he cuts in line in front of everyone else. Given a pointer to the first ListNode and a value, create a new node, assign it to the list head, and return a pointer to the new head node.
    addFront(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    // Sam thinks Tad might be somewhere in a very long line waiting to attend the Superman movie. Given a ListNode pointer and a val, return whether val is found in any node in the list.
    contains(value) {
        if(!this.head) return null;
        let runner = this.head;
        while(runner) {
            if(runner.value === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // Ha! Rudy is getting what he deserves – kicked out of line. Given a pointer to the first node in a list, remove the head node and return the new list head node. If list is empty, return null.
    removeFront() {
        if(!this.head) return null;

        if(!this.head.next) {
            this.head = null;
            return this;
        }

        let removedNode = this.head;
        this.head = this.head.next;
        removedNode.next = null;
        return this;
    }

    // Finally, Tad and Sam reach the front of the line to get movie tickets. Oh no – only one seat remains! Who was earlier in line: Tad or Sam? Return the value (not the node) at the head of the list. If list is empty, return null.
    getFront() {
        if(!this.head) return null;
        return this.head.value;
    }

    // Create display(node) for debugging that returns a string containing all list values. Build what you wish console.log(myList) did!
    display() {
        if(!this.head) return null;
        let runner = this.head;
        let output = "";
        while(runner) {
            output += runner.value + "->";
            runner = runner.next;
        }
        return output;
    }

    // July 20, 2013: about 5000 people wait in line for a chance to audition for American Idol. Create a function that accepts a pointer to the first list node, and returns number of nodes in that SList.
    length() {
        if(!this.head) return null;
        let count = 0;
        let runner = this.head;
        while(runner) {
            count++;
            runner = runner.next;
        }
        return count;
    }

    // American Idol seems to air singers that are the best, and a few that seem like the worst! Create function max(node) to return list’s largest val.
    getMax() {
        if(!this.head) return null;
        if(!this.head.next) return this.head.value;
        let max = this.head.value;
        let runner = this.head;
        while(runner) {
            if(runner.value > max) {
                max = runner.value;
            }
            runner = runner.next;
        }
        return max;
    }

    // Create min(node) to return list’s smallest val.
    getMin() {
        if(!this.head) return null;
        if(!this.head.next) return this.head.value;
        let min = this.head.value;
        let runner = this.head;
        while(runner) {
            if(runner.value < min) {
                min = runner.value;
            }
            runner = runner.next;
        }
        return min;
    }
    
    // Create average(node) to return average val.
    getAverage() {
        if(!this.head) return null;
        if(!this.head.next) return this.head.value;
        let sum = 0;
        let runner = this.head;
        let count = this.length();
        while(runner) {
            sum += runner.value;
            runner = runner.next;
        }
        return sum / count;
    }

    // Create a function that accepts a ListNode pointer and returns the last value in the list.
    getBack() {
        if(!this.head) return null;
        if(!this.head.next) return this.head.value;
        let runner = this.head;
        while(runner.next) {
            runner = runner.next;
        }
        return runner.value;
    }

    // Create a standalone function that removes the last ListNode in the list and returns the new list.
    removeBack() {
        if(!this.head) return null;
        if(!this.head.next) {
            this.head = null;
            return this.display();
        }
        let runner = this.head;
        while(runner.next.next) {
            runner = runner.next;
        }
        runner.next = null;
        // console.log(runner.value)
        return this.display();
    }

    // Create a function that creates a ListNode with given value and inserts it at end of a linked list.
    addBack(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            return this;
        }
        let runner = this.head;
        while(runner.next) {
            runner = runner.next;
        }
        runner.next = newNode;
        return this.display();
    }

    // Create a standalone function that locates the minimum value in a linked list, and moves that node to the front of the list. Return the new list, with all nodes still present, and all (except for the new head node) in their original order.
    moveMinToFront() {
        if(!this.head) return null;
        if(!this.head.next) return this.head.value;

        let runner = this.head;
        let min = this.head;
        let beforeMin, afterMin;
        while(runner.next) {
            if(runner.next.value < min.value) {
                beforeMin = runner;
                min = runner.next
                afterMin = runner.next.next;
            }
            runner = runner.next;
        }
        // console.log(min)
        // console.log(beforeMin)
        // console.log(afterMin)

        if(this.head.value === min.value) {
            return this.display();
        } else {
            beforeMin.next = afterMin;
            min.next = this.head;
            this.head = min;
            return this.display();
        }
    }

    // Create a standalone function that locates the maximum value in a linked list, and moves that node to the back of the list. Return the new list, with all nodes still present, and all in their original order except for the node you moved to the end of the singly linked list.
    moveMaxToBack() {
        if(!this.head) return null;
        if(!this.head.next) return this.head.value;
        let runner = this.head;
        let max = this.head;
        let beforeMax, afterMax;

        while(runner.next) {
            if(runner.next.value > max.value) {
                beforeMax = runner;
                max = runner.next
                afterMax = runner.next.next;
            }
            runner = runner.next;
        }
        // console.log(max)
        // console.log(beforeMax)
        // console.log(afterMax)
        // console.log(runner.value)

        if(runner.value === max.value) {
            return this.display();
        } else if(this.head.value === max.value) {
            this.head = this.head.next;
            runner.next = max;
            max.next = null;
            return this.display();
        } else {
            beforeMax.next = afterMax;
            runner.next = max;
            max.next = null;
            return this.display();
        }
    }
}

let list = new SLists();

list.addFront(-5);
// list.addFront(2);
// list.addFront(5);
// list.addFront(20);
// list.addFront(6);
// list.addFront(4);
// list.addFront(-2);
// list.addFront(-9);

// list.removeFront();
// list.removeFront();
// list.removeFront();
// console.log(list.contains(2));
// console.log(list.getFront());
// console.log(list.length());
// console.log(list.getMax());
// console.log(list.getMin());
// console.log(list.getAverage());
console.log(list.display());
// console.log(list.addBack(99));
// console.log(list.getBack());
// console.log(list.moveMinToFront());
console.log(list.moveMaxToBack());