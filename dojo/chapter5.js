class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLists {
    constructor() {
        this.head = null;
    }

    // Rudy isn’t nice: he cuts in line in front of everyone else. Given a pointer to the first ListNode and a value, create a new node, assign it to the list head, and return a pointer to the new head node.
    addFront(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    // Sam thinks Tad might be somewhere in a very long line waiting to attend the Superman movie. Given a ListNode pointer and a val, return whether val is found in any node in the list.
    contains(value) {
        if(!this.head) return null;
        let runner = this.head;
        while(runner) {
            if(runner.value === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // Ha! Rudy is getting what he deserves – kicked out of line. Given a pointer to the first node in a list, remove the head node and return the new list head node. If list is empty, return null.
    removeFront() {
        if(!this.head) return null;

        if(!this.head.next) {
            this.head = null;
            return this;
        }

        let removedNode = this.head;
        this.head = this.head.next;
        removedNode.next = null;
        return this;
    }

    // Finally, Tad and Sam reach the front of the line to get movie tickets. Oh no – only one seat remains! Who was earlier in line: Tad or Sam? Return the value (not the node) at the head of the list. If list is empty, return null.
    getFront() {
        if(!this.head) return null;
        return this.head.value;
    }

    // Create display(node) for debugging that returns a string containing all list values. Build what you wish console.log(myList) did!
    display() {
        if(!this.head) return null;
        let runner = this.head;
        let output = "";
        while(runner) {
            output += runner.value + "->";
            runner = runner.next;
        }
        return output;
    }

    // July 20, 2013: about 5000 people wait in line for a chance to audition for American Idol. Create a function that accepts a pointer to the first list node, and returns number of nodes in that SList.
    length() {
        if(!this.head) return null;
        let count = 0;
        let runner = this.head;
        while(runner) {
            count++;
            runner = runner.next;
        }
        return count;
    }

    // American Idol seems to air singers that are the best, and a few that seem like the worst! Create function max(node) to return list’s largest val.
    getMax() {
        if(!this.head) return null;
        if(!this.head.next) return this.head.value;
        let max = this.head.value;
        let runner = this.head;
        while(runner) {
            if(runner.value > max) {
                max = runner.value;
            }
            runner = runner.next;
        }
        return max;
    }

    // Create min(node) to return list’s smallest val.
    getMin() {
        if(!this.head) return null;
        if(!this.head.next) return this.head.value;
        let min = this.head.value;
        let runner = this.head;
        while(runner) {
            if(runner.value < min) {
                min = runner.value;
            }
            runner = runner.next;
        }
        return min;
    }
    
    // Create average(node) to return average val.
    getAverage() {
        if(!this.head) return null;
        if(!this.head.next) return this.head.value;
        let sum = 0;
        let runner = this.head;
        let count = this.length();
        while(runner) {
            sum += runner.value;
            runner = runner.next;
        }
        return sum / count;
    }

    // Create a function that accepts a ListNode pointer and returns the last value in the list.
    getBack() {
        if(!this.head) return null;
        if(!this.head.next) return this.head.value;
        let runner = this.head;
        while(runner.next) {
            runner = runner.next;
        }
        return runner.value;
    }

    // Create a standalone function that removes the last ListNode in the list and returns the new list.
    removeBack() {
        if(!this.head) return null;
        if(!this.head.next) {
            this.head = null;
            return this.display();
        }
        let runner = this.head;
        while(runner.next.next) {
            runner = runner.next;
        }
        runner.next = null;
        // console.log(runner.value)
        return this.display();
    }

    // Create a function that creates a ListNode with given value and inserts it at end of a linked list.
    addBack(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            return this;
        }
        let runner = this.head;
        while(runner.next) {
            runner = runner.next;
        }
        runner.next = newNode;
        return this.display();
    }

    // Create a standalone function that locates the minimum value in a linked list, and moves that node to the front of the list. Return the new list, with all nodes still present, and all (except for the new head node) in their original order.
    moveMinToFront() {
        if(!this.head) return null;
        if(!this.head.next) return this.head.value;

        let runner = this.head;
        let min = this.head;
        let beforeMin, afterMin;
        while(runner.next) {
            if(runner.next.value < min.value) {
                beforeMin = runner;
                min = runner.next
                afterMin = runner.next.next;
            }
            runner = runner.next;
        }
        // console.log(min)
        // console.log(beforeMin)
        // console.log(afterMin)

        if(this.head.value === min.value) {
            return this.display();
        } else {
            beforeMin.next = afterMin;
            min.next = this.head;
            this.head = min;
            return this.display();
        }
    }

    // Create a standalone function that locates the maximum value in a linked list, and moves that node to the back of the list. Return the new list, with all nodes still present, and all in their original order except for the node you moved to the end of the singly linked list.
    moveMaxToBack() {
        if(!this.head) return null;
        if(!this.head.next) return this.head.value;
        let runner = this.head;
        let max = this.head;
        let beforeMax, afterMax;

        while(runner.next) {
            if(runner.next.value > max.value) {
                beforeMax = runner;
                max = runner.next
                afterMax = runner.next.next;
            }
            runner = runner.next;
        }
        // console.log(max)
        // console.log(beforeMax)
        // console.log(afterMax)
        // console.log(runner.value)

        if(runner.value === max.value) {
            return this.display();
        } else if(this.head.value === max.value) {
            this.head = this.head.next;
            runner.next = max;
            max.next = null;
            return this.display();
        } else {
            beforeMax.next = afterMax;
            runner.next = max;
            max.next = null;
            return this.display();
        }
    }

    // Create prependVal(ListNode,val,before) to insert a new ListNode with val immediately before the node containing before (or at end, if no node contains before). Return the new list.
    prependVal(val,before) {
        if(!this.head) {
            this.addFront(val);
            return this;
        }
        if(this.head.value === before) {
            this.addFront(val);
            return this;
        }

        let newNode = new Node(val);
        let afterNode;

        let runner = this.head;
        while(runner.next) {
            if(runner.next.value === before) {
                afterNode = runner.next;
                runner.next = newNode;
                newNode.next = afterNode;
                return this.display();
            }
            runner = runner.next;
        }
        runner.next = newNode;
        return this.display
    }

    // Create appendVal(list,val,after) that inserts a new ListNode containing given val immediately after the node containing after (or at end, if after not found). Return the new list.
    appendVal(val,after) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            return this;
        }
        let runner = this.head;
        let afterNode;
        while(runner.next) {
            if(runner.value === after) {
                afterNode = runner.next;
                runner.next = newNode;
                newNode.next = afterNode;
                return this.display();
            }
            runner = runner.next;
        }
        runner.next = newNode;
        return this.display
    }

    // Create removeVal(ListNode,val). Given a pointer to the head ListNode, remove the node with the given val. Return the new list. What will you do if val is not found?
    removeVal(value) {
        if(!this.head) return null;
        if(this.head.value === value) return this.removeFront();
        let runner = this.head;
        let before, after, removedNode;
        let found = false;

        while(runner.next) {
            if(runner.next.value === value) {
                found = true;
                removedNode = runner.next;
                before = runner;
                after = runner.next.next;
            }
            runner = runner.next;
        }

        if(found === false) {
            console.log("no found");
            return -1;
        } else if(runner.value === value) {
            this.removeBack();
        } else {
            before.next = after;
            removedNode.next = null;
        }
        return this.display();
    }

    // Create splitOnVal(list,num) that, given number, splits a list in two. The latter half of the list should be returned, starting with node containing num. E.g.: splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3), and the return value will be (5=>2=>4).
    splitOnValue(num) {
        let firstHalf = new SLists();
        let secondHalf = new SLists();
        let breakPoint = false;

        let runner = this.head;
        while(runner) {
            if(runner.value === num) {
                breakPoint = true;
            }
            if(breakPoint) {
                secondHalf.addBack(runner.value);
            } else {
                firstHalf.addBack(runner.value);
            }
            runner = runner.next;
        }
        console.log("first: ", firstHalf.display());
        return secondHalf.display();
    }

    // Given a pointer to the head node of a singly linked list, remove any nodes containing negative values and return (a pointer to) the new list.
    removeNegatives() {
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
        // console.log(runner.value)
        if(this.head.value < 0) {
            this.removeFront();
        }
        if(runner.value < 0) {
            this.removeBack();
        }
    }

    // Given two pointers to separate linked lists, concatenate the second list to the end of the first one, and return the new list.
    concatList(list2) {
        let runner = list2.head;
        while(runner) {
            this.addBack(runner.value);
            runner = runner.next;
        }
        return this,this.display();
    }

    // Create partition(ListNode,value) that locates the first node with that value, and moves all nodes with values less than that value to be earlier, and all nodes with values greater than that value to be later. Otherwise, original order need not be perfectly preserved. Return the new head ListNode.
    partition(value) {
        let arr = [];
        let runner = this.head;
        while(runner) {
            arr.push(runner.value);
            runner = runner.next;
        }
        // console.log("start", arr);
        let start = 0;
        let end = arr.length - 1;
        while(start < end) {
            while(arr[start] < value) {
                start++;
            }
            while(arr[end] > value) {
                end--;
            }
            if(start < end) {
                [arr[start],arr[end]] = [arr[end],arr[start]];
                // console.log(arr);
            }
        }
        // console.log("end", arr);
        for(let i = 0; i < arr.length; i++) {
            this.addBack(arr[i]);
            this.removeFront();
        }
        return this.display();
    }

    // Create a standalone function that, given a pointer to the first node in a singly linked list, will return the second-to-last value in that list. What will you return if the list is not long enough?
    getSecondToLastValue() {
        if(!this.head.next) {
            return -1;
        }
        let runner = this.head;
        while(runner.next.next) {
            runner = runner.next;
        }
        return runner.value;
    }

    // Create ListNode method removeSelf() to disconnect (remove) itself from linked lists that include it. Note: the node might be the first in a list (it won’t be the last), and you do NOT have a pointer to the previous node. Also, don’t lose any subsequent nodes pointed to by .next.
    removeSelf(remove) {
        let runner = this.head;
        while(runner.next) {
            if(runner.next.value === remove) {
                let removedNode = runner.next;
                runner.next = runner.next.next;
                removedNode.next = null;
                // console.log(runner.next.value)
                continue;
            }
            runner = runner.next;
        }
        if(this.head.value === remove) {
            this.removeFront();
        }
        return this.display();
    }

    // Given a pointer to a singly linked list, return a copy of that list. Do not return the same list, but instead make a copy of each node in the list and connect them in the same order as the original.
    copyList() {
        let newList = new SLists();
        let runner = this.head;
        while(runner) {
            newList.addBack(runner.value);
            runner = runner.next;
        }
        return `new list: ${newList.display()}`;
    }

    // Given a headNode, a lowVal and a highVal, remove from the list any nodes that have values less than lowVal or higher than highVal. Return the new list.
    filterList(lowVal, highVal) {
        let runner = this.head;
        while(runner.next) {
            if(runner.next.value < lowVal || runner.next.value > highVal) {
                // remove;
                let removedNode = runner.next;
                runner.next = runner.next.next;
                removedNode.next = null;
                continue;
            } 
            runner = runner.next;
        }
        if(this.head.value < lowVal || this.head.value > highVal) {
            this.removeFront();
        }
        return this.display();
    }

    // Given a pointer to the first node in a singly linked list, return the second-largest value contained in the list.
    getSecondLargestValue() {
        let arr = [];
        let runner = this.head;
        while(runner) {
            arr.push(runner.value)
            runner = runner.next;
        }
        console.log(arr);
        return arr.sort(function(a,b){return a-b})[arr.length-2]
    }

    // Provided two pointers to independent linked lists, ‘zip’ the two lists together by alternating nodes. Start with the first list, and return the new combined list.
    zipIt(list2) {
        console.log(this.display());
        console.log(list2.display());

        let newList = new SLists();
        while(this.head && list2.head) {
            newList.addBack(this.getFront());
            newList.addBack(list2.getFront());
            this.removeFront();
            list2.removeFront();
        }
        if(this.head) {
            let runner = this.head;
            while(runner) {
                newList.addBack(runner.value)
                runner = runner.next;
            }
        }
        if(list2.head) {
            let runner = list2.head;
            while(runner) {
                newList.addBack(runner.value)
                runner = runner.next;
            }
        }
        return newList.display();
    }

    // Remove nodes with duplicate values. Following this call, all remaining nodes should have unique values. Retain only first instance of each value.
    removeDuplicate() {
        let obj = {};
        let firstNode = this.head.value;
        obj[firstNode] = 1;
        // console.log(obj);
        let runner = this.head;
        while(runner.next) {
            if(obj[runner.next.value]) {
                let removedNde = runner.next;
                runner.next = runner.next.next;
                removedNde.next = null;
                continue;
            } else {
                obj[runner.next.value] = 1;
            }
            runner = runner.next;
        }
        return this.display();
    }
}

let list = new SLists();

list.addFront(9);
list.addFront(5);
list.addFront(-2);
list.addFront(6);
list.addFront(-2);
list.addFront(-5);
list.addFront(-5);
list.addFront(9);
list.addFront(-5);
// list.removeFront();
// list.removeFront();
// list.removeFront();
// console.log(list.contains(2));
// console.log(list.getFront());
// console.log(list.length());
// console.log(list.getMax());
// console.log(list.getMin());
// console.log(list.getAverage());
console.log(list.display());
// console.log(list.addBack(99));
// console.log(list.getBack());
// console.log(list.moveMinToFront());
// console.log(list.moveMaxToBack());
// list.prependVal(3,100)
// list.appendVal(3,20)
// list.removeVal(200);
// console.log(list.splitOnValue(20))
// list.removeNegatives();
// console.log(list.partition(6));
// console.log(list.getSecondToLastValue());
// console.log(list.removeSelf(-5));
// console.log(list.copyList());
// console.log(list.filterList(-4,5));
// console.log(list.getSecondLargestValue());
console.log(list.removeDuplicate());

// let listA = new SLists();
// listA.addFront(-5);
// listA.addFront(-2);
// listA.addFront(5);

// let listB = new SLists();
// listB.addFront(6);
// listB.addFront(-4);
// listB.addFront(-5);
// listB.addFront(-9);
// listA.addFront(20);
// listA.addFront(11);
// listA.addFront(7);
// console.log(listA.concatList(listB));
// console.log(listA.zipIt(listB));