// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    
    let map = new Map();

    for(const num of nums) {
        if(map.has(num)) {
            map.set(num, map.get(num)+1);
        } else {
            map.set(num, 1);
        }
    }
    console.log(map);

    for(const[key, value] of map) {
        // console.log(key, value);
        if(value === 1) {
            return key;
        }

    }
};

console.log(singleNumber([4,1,2,1,2]));