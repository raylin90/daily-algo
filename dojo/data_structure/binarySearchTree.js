class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(value) {
        let newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        let runner = this.root;
        while(runner) {
            if(value > runner.value) {
                if(!runner.right) {
                    // console.log("right")
                    runner.right = newNode;
                    break;
                } else {
                    runner = runner.right;
                }
            } else if(value < runner.value) {
                // console.log("left")
                if(!runner.left) {
                    runner.left = newNode;
                    break;
                } else {
                    runner = runner.left;
                }
            } else {
                console.log("no duplicate allow")
                return this;
            }
        }
    }

    print(root) {
        console.log("node ", root.value)
        let runner = root;
        if(runner.left) {
            console.log("current node is: ", runner.value, " left: ", runner.left.value);
            this.print(runner.left);
        }
        if(runner.right) {
            console.log("current node is: ", runner.value, " right: ", runner.right.value);
            this.print(runner.right);
        }
    }

    findMin() {
        let runner = this.root;
        while(runner.left) {
            runner = runner.left;
        }
        return runner.value;
    }

    findMax() {
        let runner = this.root;
        while(runner.right) {
            runner = runner.right;
        }
        return runner.value;
    }

    size(root) {
        if(root === null) {
            return false;
        }
        return 1 + (this.size(root.left)) + (this.size(root.right));
    }

    height(root) {
        let left, right;
        if(root === null) {
            return false;
        } else {
            left = this.height(root.left) + 1;
            right = this.height(root.right) + 1;
        }
        if(left > right) {
            return left;
        } else {
            return right;
        }
    }

    contains(value) {
        let runner = this.root;
        while(runner) {
            if(value === runner.value) {
                return true;
            } else if(value > runner.value) {
                runner = runner.right;
            } else {
                runner = runner.left;
            }
        }
        return false;
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