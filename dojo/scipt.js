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






const partition = (arr, start, end) => {

}
let arr = [7,10,1,4,3,5,8, 11];
console.log(partition(arr, 0 , arr.length - 1))

const quickSort = (arr, start, end) => {

}
let arr = [7,10,1,4,3,5,8, 11];
console.log(quickSort(arr, 0 , arr.length - 1))








const stringRotation = (str, n) => {

}
// console.log(stringRotation("Hello World", 3))
// console.log(stringRotation("Hello World", 7))



const isStringRotation = (str1, str2) => {

}
console.log(isStringRotation("Hello World", "rldHello Wo"))
console.log(isStringRotation("Hello World", "o WorldHell"))
console.log(isStringRotation("Hello World", "Hi"))







const intersectSortedArr = (arr1, arr2) => {

}

console.log(intersectSortedArr([1,2,2,3,4,5], [2,2,4,6,7,8]))   // [2,4]
console.log(intersectSortedArr([1,1,1,2,3,4],[1,1,3,4,5]))   // [1,3,4]







// left child of parent: 2 * parent
// right child of parent: 2 * parent + 1
// parent: Math.floor(child / 2)

class minHeap {
    constructor() {
        this.heap = [null]
    }

    size() {
    }

    top() {
    }

    print() {
    }

    insert(value) {

    }

    remove() {

    }
}

let heap = new minHeap();
// console.log(heap.size());
// console.log(heap.top());
heap.print();
heap.insert(5);
heap.insert(10);
heap.insert(9);
heap.insert(3);
heap.insert(7);
heap.insert(4);
heap.remove();
heap.print();




const clockAngle = time => {

}
console.log(clockAngle(360))
console.log(clockAngle(180))
console.log(clockAngle(45))


let x = 1
let y = "1"
console.log(x === y)




// Lance is writing his opus: Epitome, an epic tome of beat poetry. Always ready for a good rhyme, he constantly seeks words that end with the same letters. Write a function that, when given a word array, returns the largest suffix (word-end) common to all words in the array. For inputs ["deforestation", "citation", "conviction", "incarceration"], return "tion" (not all that creative a rhyming point). If it is ["nice", "ice", "baby"], return "", because that’s just ... not.