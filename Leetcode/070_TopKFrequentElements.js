// https://leetcode.com/problems/top-k-frequent-elements/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {

    // map to store each occurance
    let map = new Map();
    for(const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    // console.log(map)

    // convert map to array, sort it, and slice and get it's first element
    let result = ([...map.entries()].sort((a, b) => b[1] - a[1])).slice(0, k).map(key => key[0]);
    // console.log(result)
    return result;

};
console.log(topKFrequent([1,1,1,2,2,3,2,2,2,3,3,3],2))





var topKFrequent = function(nums, k) {

    // map to store each occurance
    let map = new Map();
    for(const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    // console.log(map)

    // a new map to sort by it's value
    let newMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    // console.log(newMap)

    // get top k'th element from the new Map
    let result = []
    let count = 1
    for(let[key, value] of newMap) {
        result.push(key)
        if(count === k) break;
        count++;
    }
    return result;
};
console.log(topKFrequent([1,1,1,2,2,3,2,2,2,3,3,3],2))





