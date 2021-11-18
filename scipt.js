countEvensAndOdd([1, 2, 5, 8, 8, 8]);
countEvensAndOdd([1, 2, 3, 4, 5, 6, 7, 8]);
countEvensAndOdd([2, 2, 1, 1, 6, 6, 5, 5, 5, 5, 5, 5]);
countEvensAndOdd([1, 1, 2, 1, 1, 3, 3]);
// Even more so!
// That's odd!
// That's odd!
// That's odd!







// USE OBJ
// Ex1: "y(3(p)p(3)r)s" => true
// Ex2: "n(0(p)3" => false
// Ex3: "n)0(t(o)k" => false

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[]}}(){}{()}" --> true





// slque -> interleaveQueue
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

    }
    dequene() {

    }
    print() {

    }
}
let queue = new SLQueue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
console.log(queue.print());





// binary recursive algo
console.log(binarySearh([5,8,9,15,17,23,24,34,77,100], 2));




// binary search tree
class Node {
    constructor(value) {

    }
}

class BST {
    constructor() {

    }

    add(value) {

    }

    print(root) {

    }

    findMin() {

    }

    findMax() {

    }

    size(root) {

    }

    height(root) {

    }

    contains(value) {

    }
}

let tree = new BST();
tree.add(20);
tree.add(28);
tree.add(2);
tree.add(5);
tree.add(22);
tree.add(6);
// console.log(tree.findMin());
// console.log(tree.findMax());
// tree.print(tree.root);
// console.log(tree.contains(23));
// console.log(tree.size(tree.root));
console.log(tree.height(tree.root));






function inOrderSubset(nums) {

}
console.log(inOrderSubset([1,2,3]));









class Node {
    constructor(letter) {
        this.letter = letter;
        this.child = {};
        this.isWord = false;
    }
}

class Tries {
    constructor() {
        this.root = new Node(""); 
    }
    
    add(string) {

    }

    print(root = this.root, str="") {

    }

    contains(str) {

    }

    contains2(str) {

    }

    autocomplete(str) {

    }
}

let t = new Tries();
t.add("cat");
t.add("cab");
t.add("can");
t.add("cbb");
t.add("dog");
// t.print();
// console.log(t.contains2("cac"))
// console.log(t.contains("cat"))
console.log(t.autocomplete("c"))