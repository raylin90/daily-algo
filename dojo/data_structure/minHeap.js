// left child of parent: 2 * parent
// right child of parent: 2 * parent + 1
// parent: Math.floor(child / 2)

class minHeap {
    constructor() {
        this.heap = [null]
    }

    size() {
        return this.heap.length - 1;
    }

    top() {
        return this.heap[1] ? this.heap[1] : null;
    }

    print() {
        console.log(this.heap)
    }

    insert(value) {
        this.heap.push(value);
        let current = this.heap.length-1
        
        // console.log(current)
        // console.log(this.heap[parentHeap])
        while(this.heap[current] < this.heap[Math.floor(current / 2)]) {
            [this.heap[current], this.heap[Math.floor(current / 2)]] = [this.heap[Math.floor(current / 2)], this.heap[current]];
            current = Math.floor(current / 2);
        }
    }

    remove() {
        this.heap.splice(1,1)
        for(let i = this.heap.length - 1; i > 0; i--) {
            if(this.heap[Math.floor(i / 2)] > this.heap[i]) {
                [this.heap[Math.floor(i / 2)], this.heap[i]] = [this.heap[i], this.heap[Math.floor(i / 2)]]
            }
        }
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