// // https://leetcode.com/problems/design-hashset/

// /**
// Design a HashSet without using any built-in hash table libraries.

// Implement MyHashSet class:

//     void add(key) Inserts the value key into the HashSet.
//     bool contains(key) Returns whether the value key exists in the HashSet or not.
//     void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
//  */


var MyHashSet = function() {
    this.set = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    // check contains function if the value exist or not
    // if not, add to last index
    if(this.contains(key)) {
        return;
    }
    this.set[this.set.length] = key;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    // for loop, once we find the element, delete from array and stop function
    for(let i = 0; i < this.set.length; i++) {
        if(this.set[i] === key) {
            this.set.splice(i, 1);
            break;
        }
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    // loop thought the array, and check if any element === to key
    for(let i = 0; i < this.set.length; i++) {
        if(key === this.set[i]) {
            return true;
        }
    }
    return false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
let newSet = new MyHashSet();
newSet.add(1);      // set = [1]
newSet.add(2);      // set = [1, 2]
console.log(newSet.contains(3)); // return False, (not found)
newSet.add(2);      // set = [1, 2]
console.log(newSet.contains(2)); // return True
newSet.remove(2);   // set = [1]
console.log(newSet.set);
console.log(newSet.contains(2)); // return False, (already removed)
console.log(newSet.set.length);











var MyHashSet = function() {
    this.set = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if(this.set.length === 0) {
        this.set.push(key);
        return this;
    }

    let start = 0, end = this.set.length - 1

    while(start <= end) {
        let mid = start + Math.floor((end-start)/2);

        if(key === this.set[mid]) {
            break;
        } else if(key > this.set[mid]) {
            // look right
            start = mid + 1;
        } else {
            // look left
            end = mid - 1;
        }
    }
    // console.log(start, " and ", end, "num", this.set[end])
    if(this.set[start] !== key) {
        return this.set.splice(start, 0, key);
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let start = 0, end = this.set.length -1;
    while(start <= end) {
        let mid = start + Math.floor((end-start)/2);

        if(key === this.set[mid]) {
            return this.set.splice(mid, 1);
        } else if(key > this.set[mid]) {
            // look right
            start = mid + 1;
        } else {
            // look left
            end = mid - 1;
        }
    }
    // console.log(start, " and ", end, "and and")
    return false;
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let start = 0, end = this.set.length -1;

    while(start <= end) {
        let mid = start + Math.floor((end-start)/2);

        if(key === this.set[mid]) {
            return true;
        } else if(key > this.set[mid]) {
            // look right
            start = mid + 1;
        } else {
            // look left
            end = mid - 1;
        }
    }
    return false;
};
