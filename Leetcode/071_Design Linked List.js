class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

var MyLinkedList = function() {
    this.head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let count = 0;
    let runner = this.head;

    if(!this.head) {
        return -1;
    }

    while(runner) {
        if(count === index) {
            return runner.value;
        }
        runner = runner.next;
        count++;
    }

    return -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);

    if(!this.head) {
        this.head = newNode;
        return;
    }

    newNode.next = this.head;
    this.head = newNode;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);

    if(!this.head) {
        this.head = newNode;
        return;
    }

    let runner = this.head;
    while(runner.next) {
        runner = runner.next;
    }
    runner.next = newNode;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index === 0) {
        let newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            return;
        }
    
        newNode.next = this.head;
        this.head = newNode;
        return;
    }

    // ["MyLinkedList","addAtIndex","get"]
    // [[],[1,0],[0]]
    if(!this.head) {
        return null;
    }

    let runner = this.head;
    let count = 1;
    let newNode = new Node(val);

    while(runner.next) {
        if(count === index) {
            newNode.next = runner.next;
            runner.next = newNode;
        }
        runner = runner.next;
        count++;
    }
    if(count === index) {
        newNode.next = runner.next;
        runner.next = newNode;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {

    if(index === 0 && !this.head.next) {
        this.head = null;
        return;
    }
    if(index === 0 && this.head.next) {
        this.head = this.head.next;
    }

    let runner = this.head;
    let count = 1;

    while(runner.next) {
        if(index === count) {
            runner.next = runner.next.next;
            return;
        }
        runner = runner.next;
        count++;
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

let sll = new MyLinkedList();
// sll.addAtHead(1);
// sll.addAtTail(3);
// sll.addAtTail(3);
sll.addAtIndex(1,2)
// console.log(sll.get(1));
// sll.deleteAtIndex(0);
// console.log(sll.get(0));
console.log(sll.get(0));
// console.log(sll.head.next);
// console.log(sll.head.next.next);