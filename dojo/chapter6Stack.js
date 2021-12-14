class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    // Create push(val) that adds val to our stack.
    push(val) {
        let newNode = new Node(val);
        if(!this.top) {
            this.top = newNode;
            return this;
        }
        let runner = this.top;
        while(runner.next) {
            runner = runner.next;
        }
        runner.next = newNode;
    }

    // Return (not remove) the stack’s top value.
    getTop() {
        if(!this.top) return null;
        return this.top.value;
    }

    // Return whether the stack is empty.
    isEmpty() {
        if(!this.top) {
            return "empty";
        } else {
            return "not empty";
        }
    }

    // Create pop() to remove and return the top val.
    pop() {
        if(!this.top) return null;
        let removedNode = this.top;
        this.top = this.top.next;
        removedNode.next = null;
        return removedNode.value;
    }

    // Return whether given val is within the stack.
    contains(value) {
        let runner = this.top;
        while(runner) {
            if(runner.value === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // Return the number of stacked values.
    size() {
        let runner = this.top;
        let count = 0;
        while(runner) {
            count++;
            runner = runner.next;
        }
        return count;
    }

    // return all the elemet in the given stack
    display() {
        let runner = this.top;
        let output = "";
        while(runner) {
            output += runner.value + "=>";
            runner = runner.next;
        }
        return output;
    }

    // Given two Stack objects, create a standalone function to return whether they are equal. Stacks are equal only if they have equal elements in identical order. You can use an additional third Stack for storage; you will need it because you must return the given Stacks to their original condition upon exit.
    compare(stack2) {
        let newStack = new Stack();
        while(this.top && stack2.top) {
            if(this.top.value === stack2.top.value) {
                newStack.push(this.top.value);
                this.pop();
                stack2.pop();
            } else {
                return false;
            }
        }
        // console.log(this.display());
        // console.log(stack2.display());
        if(!this.top && !stack2.top) {
            console.log("match");
            return newStack.display();
        } else {
            return false;
        }
    }

    // Numerous values are stored in a Stack. Divide the values into a group of positive numbers and a group of zero-or-negative numbers. Rearrange the Stack’s values so that when popping, all non-positive values come before all positive numbers. The original order can otherwise be disregarded. Use only one Queue for additional storage.
    
    partition() {
        let arr = [];
        let runner = this.top;
        while(runner) {
            arr.push(runner.value);
            runner = runner.next;
        }
        console.log(arr);

        let start = 0;
        let end = arr.length - 1;
        while(start < end) {
            while(arr[start] < 0) {
                start ++;
            }
            while(arr[end] > 0) {
                end --;
            }
            if(start < end) {
                [arr[start],arr[end]] = [arr[end],arr[start]];
            }
        }
        return arr;
    }

    // Given a Stack containing numerical values, write a standalone function that returns a boolean to represent whether the stack’s values are sorted from smallest (at Stack top) to largest (at bottom). Use only one another Stack or a Queue (not both) for storage.
    isSorted() {
        let runner = this.top;
        while(runner.next) {
            if(runner.value < runner.next.value) {
                runner = runner.next
            } else {
                return false;
            }
        }
        return true;
    }
}

let s = new Stack();
s.push(10);
s.push(-20);
s.push(30);
s.push(-40);
s.push(50);
// console.log(s.display());
// console.log(s.getTop());
// console.log(s.isEmpty());
// console.log(s.pop());
// console.log(s.pop());
// console.log(s.contains(5));
// console.log(s.size());
// console.log(s.display());
console.log(s.partition());
console.log(s.isSorted());

// let s1 = new Stack();
// s1.push(5);
// s1.push(9);
// s1.push(2);

// let s2 = new Stack();
// s2.push(5);
// s2.push(7);
// s2.push(2);
// console.log(s1.compare(s2));