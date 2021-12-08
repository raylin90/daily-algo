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
}

let list = new SLists();
list.addFront(-5);
list.addFront(20);
list.addFront(2);
list.addFront(5);
list.addFront(6);
list.addFront(4);
list.addFront(-2);
list.addFront(9);
list.addFront(-9);
// list.removeFront();
// list.removeFront();
// list.removeFront();
// console.log(list.contains(2));
// console.log(list.getFront());
// console.log(list.length());
// console.log(list.getMax());
// console.log(list.getMin());
console.log(list.getAverage());
console.log(list.display());