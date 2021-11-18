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
        let runner = this.root;
        for(let i = 0; i < string.length; i++) {
            // console.log(string[i])
            if(!runner.child[string[i]]) {
                let newNode = new Node(string[i])
                runner.child[string[i]] = newNode;
            }
            runner = runner.child[string[i]]
        }
        runner.isWord = true;
    }

    print(root = this.root, str="") {
        if(root.isWord === true) {
            console.log(str);
        }
        for(const key in root.child) {
            this.print(root.child[key], str+key);
        }
    }

    contains(str) {
        let runner = this.root;
        for(let i = 0; i < str.length; i++) {
            if(runner.child[str[i]]) {
                runner = runner.child[str[i]]
                if(runner.isWord === true) {
                    return true;
                }
            }
        }
        return false;
    }

    contains2(str) {
        let runner = this.root;
        for(let i = 0; i < str.length; i++) {
            if(runner.child[str[i]] == null) return false;
            runner = runner.child[str[i]]
        }
        if(runner.letter === str[str.length -1] && runner.isWord === true) {
            return true;
        } else{
            return false;
        }
    }

    autocomplete(str) {
        const searchTries = (root, newStr, arr) => {
            if(root.isWord) {
                arr.push(newStr);
            }
            for(const key in root.child) {
                arr = searchTries(root.child[key], newStr+key, arr)
                console.log(arr)
            }
            return arr;
        }

        let runner = this.root;
        for(let i = 0; i < str.length; i++) {
            if(!runner.child[str[i]]) return [];
            runner = runner.child[str[i]];
        }
        // console.log(runner.letter)
        return searchTries(runner, str, []);
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