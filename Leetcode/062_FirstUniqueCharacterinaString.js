// https://leetcode.com/problems/first-unique-character-in-a-string/


/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {

    // have a map to count each occurance, and it's index
    let map = new Map();
    for(let i = 0; i < s.length; i++) {
        if(!map.has(s[i])) {
            map.set(s[i], {count: 1, index: i});
        } else {
            // console.log("Match", map.get(s[i]).count);
            let occurance = map.get(s[i]).count;
            occurance++
            // console.log(occurance);
            map.set(s[i], {count: occurance, index: i});
        }
    }
    // console.log(map);
    
    // loop throught the map, to get the count === 1, that's our first unique occurance, and return it's index
    for(const [key, value] of map) {
        // console.log(value.count);
        if(value.count === 1) {
            return value.index;
        }
    }
    return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));





var firstUniqChar = function(s) {
    let map = new Map();
    for(const char of s) {
        if(!map.has(char)) {
            map.set(char, 1);
        } else {
            map.set(char, map.get(char) + 1);
        }
    }
    // console.log(map);

    for(const [key, value] of map) {
        // console.log(key, value);
        if(value === 1) {
            return s.indexOf(key);
        }
    }
    return -1;
};