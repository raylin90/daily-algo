//  https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    
    // map to store: key as sorted string, value as array of non-sorted string
    let map = new Map();

    for(const str of strs) {
        // sort each string element
        let sortedStr = str.split("").sort().join("");
        // console.log(str);
        // console.log(sortedStr);

        // push as key : value pair
        if(!map.has(sortedStr)) {
            map.set(sortedStr, [str]);
        } else {
            map.set(sortedStr, [...map.get(sortedStr), str]);
        }
    }
    // console.log(map);

    let result = [];

    // loop through to puch each value into final array
    for(const [key, value] of map) {
        // console.log(value);
        result.push(value)
    }
    return result;
};

console.log((groupAnagrams(["eat","tea","tan","ate","nat","bat"])));
console.log((groupAnagrams([""])));
console.log((groupAnagrams(["a"])));