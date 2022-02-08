class RandomizedSet {
    constructor() {
        // map since it's key is unique, arr to better retrive element
        this.map = new Map();
        this.arr = [];
    }

    /** 
     * @param {number} val
     * @return {boolean}
     */
    insert = function(val) {
        if(!this.map.has(val)) {
            // key as val, and value as array's last index
            this.map.set(val, this.arr.length);
            this.arr.push(val);
            return true
        } else {
            return false;
        }
    };


    /** 
     * @param {number} val
     * @return {boolean}
     */
    remove = function(val) {
        if(this.map.has(val)) {

            // two index: current index of what we need to delete, and array's last index
            let currentIndex = this.map.get(val);
            let lastIndex = this.arr.length -1 ;
            // console.log(currentIndex, lastIndex);
            // console.log("before swap", currentIndex, lastIndex);

            // IMPORTANT, updatae map key for the value we going to swap
            this.map.set(this.arr[lastIndex], currentIndex);
            [this.arr[currentIndex], this.arr[lastIndex]] = [this.arr[lastIndex], this.arr[currentIndex]];

            // console.log("after swap", currentIndex, lastIndex);
            // remove from the list
            this.arr.pop();


            this.map.delete(val);
            return true;
        }
        return false
    };

    /**
     * @return {number}
     */
    getRandom = function() {
        // get a random index and return from this.arr
        let randomIdx = Math.floor(Math.random() * this.arr.length);
        return this.arr[randomIdx];
    }
}

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
var obj = new RandomizedSet()
obj.insert(3);
obj.insert(4);
obj.insert(6);
obj.insert(8);
console.log(obj.map);
console.log(obj.arr);
obj.remove(3);
console.log(obj.map);
console.log(obj.arr);
console.log(obj.getRandom());