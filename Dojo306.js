// each node will have it's own value, and a pointer to the next value
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// start an empty singly linked list
class SLList {
    constructor() {
        this.head = null;
    }

    // add method, to add the value to the front of the SSL
    addToFront(value) {
        // create a new node first;
        let node = new Node(value);
        // add the node to the list (it's before the head)
        node.next = this.head
        // we move the head to the added node
        this.head = node;
    }

    // given a value, add it to the back of your singly linked list
    // what if the list is empty
    addToBack(value) {
        // create a new node;
        let node = new Node(value);
        // edge case to avoid empty SLL, if this.head is null, then runner.next will return error, so we just treat the new node as the head
        if(this.head == null) {
            this.head = node;
        }
        // create a runner to keep track of where we at, we start at this.head
        let runner = this.head;
        // if runner.next is not null, we want the runner keep looping till the end (once reached .next = null)
        while(runner.next !== null) {
            runner = runner.next;
        }
        // once runner reached to the end, we set the runner.next as the node we created
        runner.next = node;
    }

    // given a value, print whether the list contains that value
    contains(value) {
        // DONT NEED this edge case if the list is empty, because let runner will = null, then wont enter the while loop, and will return false directly
        // if(this.head == null) {
        //     return false;
        // }
        // create a runner first
        let runner = this.head;
        // keep the runner going till runner reached null
        while(runner.next !== null) {
            // if statement to compare
            if(runner.value == value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // print the singly lnked list
    printValues() {
        // output of empty string
        let output = "";
        // create a runner first
        let runner = this.head;
        // running throught the list
        while(runner) {
            // concat. to output string
            output += runner.value + " -> ";
            runner = runner.next;
        }
        return output;
    }

    // remove the first node from the list
    removeFromFront() {
        // edge case if list is empty
        if(!this.head) {
            return false;
        }
        // swap and delete
        let front = this.head;
        this.head = this.head.next
        // point the next to null, since we cannot delete it, we just point it to null
        front.next = null;
    }

    // remove the last node in the list
    removeFromBack() {
        // edge case if list is empty
        if(!this.head) {
            return false;
        }
        // edge case if list only have one node
        if(this.head.next == null) {
            this.head = null;
        }
        // create a runner first
        let runner = this.head;
        // loop throught the list, and if next.next is not null
        while(runner.next.next !== null) {
            runner = runner.next;
        }
        runner.next = null;
    }

    moveMintoFront() {
        // find the min: send runner throught to identify the minimum value
        // moving that value/node to the front

        // edge case if list is empty
        if(!this.head) {
            return false;
        }
        // create 4 variable: runner to keep track where we are; minNode to compare; before and after minNode to swap;
        let runner = this.head;
        let minNode = this.head
        let beforeMinNode;
        let afterMinNode;
        // while loop to iterate
        while(runner.next !== null) {
            // compare the value
            if(runner.next.value < minNode.value) {
                // identify the minNode; before and after it for swap reason
                minNode = runner.next;
                beforeMinNode = runner;
                afterMinNode = runner.next.next;
            }
            runner = runner.next
        }
        // if the first node is the min, then we will run into problem of swapping, since there's no node before first node
        if(minNode.value !== this.head.value) {
            minNode.next = this.head;
            this.head = minNode;
            beforeMinNode.next = afterMinNode;
        }
    }

    moveMaxtoBack() {
        // edge case if the list is empty
        if(!this.head) {
            return false;
        }
        // create 4 variable: runner to keep track where we are; maxNode to compare; before and after maxNode to swap;
        let runner = this.head;
        let maxNode = this.head
        let beforeMaxNode;
        let afterMaxNode;
        
        while(runner.next) {
            if(runner.next.value > maxNode.value) {
                maxNode = runner.next;
                beforeMaxNode = runner;
                afterMaxNode = runner.next.next;
            }
            runner = runner.next;
        }
        // swaping
        runner.next = maxNode;
        // if we dont have below, it will run into infinate loop
        maxNode.next = null;
        beforeMaxNode.next = afterMaxNode;
    }

    // takes in a value and a location, add a node to the list with the input value BEFORE the given location
    prependValue(value, location) {
        // create a new node
        let node = new Node(value);
        // edge case if the list is empty
        if(!this.head) {
            this.head = node;
        }
        // edge case if the location is 1
        if(location == 1) {
            this.addToFront(value);
        }
        let counter = 1;
        let runner = this.head;
        // we want to plus the counter by 1, before we prepend
        while(runner.next && counter+1 < location) {
            runner = runner.next;
            counter++;
        }
        // we want to link node.next first otherwise we will lose the pointer
        node.next = runner.next;
        runner.next = node;
    }

    // takes in a value and a location, add a node to the list with the input value AFTER given location
    appendValue(value, location) {
        // create a new node
        let node = new Node(value);
        // edge case if the list is empty
        if(!this.head) {
            this.head = node;
        }
        let counter = 1;
        let runner = this.head;
        while(runner.next && counter < location) {
            runner = runner.next;
            counter++;
        }
        // we want to link node.next first otherwise we will lose the pointer
        node.next = runner.next;
        runner.next = node;
    }

    // remove the second to last node in the list
    removeSecondToLast() {
        // edge case, if list is empty
        if(!this.head) {
            return false;
        }
        // edge case, if list is not right long (3x next), only 2 node.
        if(this.head.next.next) {
            this.head = this.head.next;
        }
        // what if only one node???
        //
        let runner = this.head;
        let destroyedNode;

        while(runner.next.next.next) {
            runner = runner.next;
        }
        destroyedNode = runner.next;
        runner.next = runner.next.next;
        destroyedNode.next = null;
    }

    // remove al nodes that have a negative value
    removeNegatives() {
        // edge case, if list is empty
        if(!this.head) {
            return false;
        }
        // edge case ,if list only have one value
        if(this.head.value < 0) {
            this.removeFromFront();
        }

        let runner = this.head;
        let destroyedNode;
        while(runner.next) {
            if(runner.next.value < 0) {
                destroyedNode = runner.next;
                runner.next = runner.next.next;
                destroyedNode.next = null;
                // after the swap and remove, we want to continue running this again, because if we dont, we are bypassing the runner.next and skip if we have negative number continuesly
                continue;
            }
            runner = runner.next;
        }
    }
}

const sll = new SLList();
sll.addToFront(5);      // 5
sll.addToFront(11);      // 11 5
sll.addToFront(9);      // 9 11 5
sll.addToBack(2);       // 9 11 5 2
sll.addToBack(8);       // 9 11 5 2 8
sll.addToBack(-8);       // 9 11 5 2 8
sll.addToBack(-3);       // 9 11 5 2 8 3
sll.addToBack(-8);       // 9 11 5 2 8
sll.addToBack(-3);       // 9 11 5 2 8 3
sll.addToBack(3);       // 9 11 5 2 8 3
sll.removeFromFront();  // 11 5 2 8 3
sll.removeFromBack();   // 11 5 2 8
sll.moveMintoFront();   // 2 11 5 8
sll.moveMintoFront();   // 2 11 5 8
sll.moveMaxtoBack();    // 2 5 8 11
sll.prependValue(4, 3)  // 2 5 4 8 11
sll.appendValue(7, 2)   // 2 5 7 4 8 11
// if the location is out of order, then we will add it to the end
sll.prependValue(4, 11)  // 2 5 4 8 11 4
sll.appendValue(7, 11)   // 2 5 7 4 8 11 4 7
sll.removeSecondToLast();// 2 5 7 4 8 11 7
sll.addToBack(-8);       // 9 11 5 2 8
sll.addToBack(-3);       // 9 11 5 2 8 3
sll.removeNegatives();
console.log(sll.printValues());
// console.log(sll)