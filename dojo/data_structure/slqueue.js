class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLStack {
    constructor() {
        this.top = null;
    }

    push(value) {
        let newNode = new Node(value);
        if(!this.top) {
            this.top = newNode;
            return this;
        }
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if(!this.top) {
            console.log("empty stack")
            return this;
        }
        let removedNode = this.top;
        this.top = this.top.next;
        removedNode.next = null;
    }

    getTop() {
        return this.top.value
    }

    print() {
        let runner = this.top;
        let output = "";
        while(runner) {
            output += runner.value + " => ";
            runner = runner.next;
        }
        return output;
    }
}

let stack = new SLStack();
stack.push(2);
stack.push(3);
stack.push(5);
console.log(stack.print());
stack.pop();
// stack.pop();
console.log(stack.getTop());
console.log(stack.print());