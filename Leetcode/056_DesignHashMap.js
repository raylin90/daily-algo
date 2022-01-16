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



class MyHashMap {
    constructor() {
        this.obj = new Array(100000).fill(-1);;
    }
    
    put(key, value) {
        this.obj[key] = value;
    }
    
    get(key, value) {
        return this.obj[key] >= 0 ? this.obj[key] : -1
    }
    
    remove(key, value) {
        return this.obj[key] = -1;
    }
}
let map = new MyHashMap();
map.put(1,1);
map.put(2,2);
map.put(2,5);
map.put(11,0);
console.log(map.get(11));
map.remove(2,2)
console.log(map.obj)

