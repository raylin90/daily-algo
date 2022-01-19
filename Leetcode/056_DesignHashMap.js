// https://leetcode.com/problems/design-hashmap/

/**
Design a HashMap without using any built-in hash table libraries.

Implement the MyHashMap class:

MyHashMap() initializes the object with an empty map.
void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
 */


var MyHashMap = function() {
    this.obj = {};
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.obj[key] = value
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    return this.obj[key] ? this.obj[key] : -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    this.obj.hasOwnProperty(key) ? delete this.obj[key] : ""
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */


const hash = function(string, size) {
    string = string.toString();
    // set initial idx = 0
    let idx = 0;
    // for loop the string, and add up each corresponding code
    for(let i = 0; i < string.length; i++) {
        idx += string.charCodeAt(i);
    }
    // our end idx will be large, so we modulo to it's map size to get smaller index
    return idx % size;
}

class MyHashMap {
    constructor() {
        this.map = new Array(3);
    }
    
    put(key, value) {
        // get hashed index from helper function
        let index = hash(key, this.map.length);
        // console.log(index);
        // console.log("map", this.map[index])
        // console.log("index", index)

        // if no element at hashed index, we set the key, value as nesterd array
        if(this.map[index] === undefined) {
            this.map[index] = [
                [key, value]
            ]
            // else we might have 1 or more element, we what to parse through (THE HASHED INDEX) and see if key:value already existed or not
        } else {
            let isInserted = false;
            for(let i = 0; i < this.map[index].length; i++) {
                // if we found matching key, override the value
                if(this.map[index][i][0] == key) {
                    this.map[index][i][1] = value;
                    isInserted = true;
                }
            }
            // once parse is done, and we cannot find the key, then push a new array into the map array
            if(isInserted === false) {
                this.map[index].push([key, value]);
            }
        }
    }
    
    get(key, value) {
        // get hashed index from helper function
        let index = hash(key, this.map.length);


        // if hashed index is false, no need to perform anything
        if(!this.map[index]) {
            return -1;
        } else {
            // console.log(this.map[index])
            // parse throught the hashed index array, find the key, and delete from the list
            for(let i = 0; i < this.map[index].length; i++) {

                if(this.map[index][i][0] == key) {
                    return this.map[index][i][1];
                    // console.log(this.map[index][i][1])
                }
            }

        }
        return -1;
    }
    
    remove(key, value) {
        // get hashed index from helper function
        let index = hash(key, this.map.length);

        // if hashed index is false, no need to perform anything
        if(!this.map[index]) {
            return;
        } else {
            // parse throught the hashed index array, find the key, and delete from the list
            for(let i = 0; i < this.map[index].length; i++) {
                if(this.map[index][i][0] == key) {
                    return this.map[index].splice(i,1)
                }
            }
        }
    }
}

let map = new MyHashMap();
map.put(1,1);
map.put(2,2);
console.log(map.map)
map.put(2,1)
console.log(map.get(2));
// map.get(6);
// map.get(7);
// map.remove(1);
console.log(map.map)