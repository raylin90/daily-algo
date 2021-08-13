// SLStack
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// a stack operates on the principal of "first in - last out" like waiting n line of something

class SLStack {
    constructor() {
        this.top = null;
    }
    
    // add a given value to your stack
    push(value) {
        // create a new node
        let node = new Node(value);
        // if stack has value, we swap
        if(this.top) {
            node.next = this.top;
            this.top = node;
        } else {
            // we set top as the new node
            this.top = node;
        }

    }

    // remove and return the top value
    pop() {
        // edge case if the stack is empty
        if(!this.top) {
            return false;
        }
        
        let destroy = this.top;
        this.top = this.top.next;
        destroy.next = null;
        return destroy.value;
    }

    // return (don't remove) the top value of a stack
    getTop() {
        return this.top.value;
    }

    print() {
        let runner = this.top;
        let output = "";
        while(runner) {
            output += runner.value + " - "
            runner = runner.next;
        }
        return output;
    }
}

const s = new SLStack();
s.push(3);
s.push(5);
console.log(s.pop());
console.log(s.getTop());
s.push(3);
s.push(5);
console.log(s.print());