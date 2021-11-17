class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.child = null;
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

    prependValue(value, location) {
        if(location <= 1) {
            this.addToFront(value);
            return this;
        }
        let newNode = new Node(value);
        let runner = this.head;
        let count = 1;
        while(runner.next && count < location-1) {
            runner = runner.next;
            count++;
        }
        // console.log(count);
        // console.log(runner.value)
        let nextNode = runner.next;
        runner.next = newNode;
        newNode.next = nextNode;
        // console.log(runner.next.value)
    }

    appendValue(value, location) {
        if(location === 0) {
            this.addToFront(value);
            return this;
        }
        let newNode = new Node(value);
        let runner = this.head;
        let count = 1;
        while(runner.next && count < location) {
            runner = runner.next;
            count++;
        }
        // console.log(count);
        // console.log(runner.value)
        let nextNode = runner.next;
        runner.next = newNode;
        newNode.next = nextNode;
        // console.log(runner.next.value)
    }

    removeSecondToLast() {
        if(!this.head) {
            return this;
        }
        if(!this.head.next || !this.head.next.next) {
            this.removeFromFront();
            return this;
        }
        if(!this.head.next.next) {

        }
        let runner = this.head;
        while(runner.next.next.next) {
            runner = runner.next;
        }
        let removedNode = runner.next;
        runner.next = runner.next.next;
        removedNode.next = null;
    }
// 1, 2, 3
    removeNegative() {
        let runner = this.head;
        while(runner.next) {
            if(runner.next.value < 0) {
                let removedNode = runner.next;
                runner.next = runner.next.next;
                removedNode.next = null;
                continue;
            }
            runner = runner.next;
        }
        if(this.head.value < 0) {
            this.removeFromFront();
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

    reverse() {
        let runner = this.head;
        let arr = [];
        while(runner) {
            arr.push(runner.value);
            runner = runner.next;
        }
        let newList = new SLL();
        for(let i = arr.length -1 ; i >=0; i--) {
            newList.addToBack(arr[i]);
        }
        console.log(newList.print());
    }

    reverseInPlance() {
        let previous = null;
        let current = this.head;
        let after = current.next;

        while(current.next) {
            current.next = previous;
            previous = current;
            // console.log("after: ", after.value);
            current = after;
            after = current.next;
        }
        current.next = previous;
        this.head = current;
        console.log(this.print());
    }

    addChild() {
        let runner = this.head;
        while(runner) {
            let NumberOfChild = Math.floor(Math.random() * 5);
            if(NumberOfChild > 0) {
                let childList = new SLL();
                for(let i = 0; i < NumberOfChild; i++) {
                    childList.addToBack(Math.floor(Math.random() * 5) + 1)
                }
                runner.child = childList;
            }
            runner = runner.next;
        }
    }

    printWithChild() {
        let output = "";
        let runner = this.head;
        while(runner) {
            output += runner.value + " => ";
            if(runner.child) {
                let s2Runner = runner.child.head;
                output += "(";
                while(s2Runner) {
                    output += s2Runner.value + " => "; 
                    s2Runner = s2Runner.next;
                }
                output += ")";
            }
            runner = runner.next;
        }
        console.log(output);
    }

    flattenChild() {
        console.log("***");
        let runner = this.head;
        while(runner) {
            if(runner.child) {
                let s2Runner = runner.child.head;
                while(s2Runner.next) {
                    s2Runner = s2Runner.next;
                }
                s2Runner.next = runner.next
                runner.next= runner.child.head;
                runner.child = null;
            }
            runner = runner.next
        }
        
        console.log("***");
        console.log(this.print());
    }
}

let list = new SLL();
list.addToBack(-2);
list.addToBack(3);
list.addToBack(-11);
list.addToBack(4);
list.addToBack(-7);
list.addToBack(-17);
list.addToBack(-13);
list.addToBack(1);
list.addToFront(-31);
list.addToBack(-5);
// console.log(list.print());
// list.moveMinToFront();
// list.moveMaxToBack();
// list.removeFromFront();
// list.removeFromFront();
// list.appendValue(50,1);
// list.appendValue(3,100);
// list.prependValue(101,50)
// list.removeFromBack();
// console.log(list.contains(2));
// list.removeNegative();
// list.removeSecondToLast();
// list.reverse();
// list.reverseInPlance();
list.addChild();
list.printWithChild();
list.flattenChild();
list.printWithChild();
// console.log(list.print());