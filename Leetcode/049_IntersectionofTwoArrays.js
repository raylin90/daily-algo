// https://leetcode.com/problems/intersection-of-two-arrays/

/**
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
    
    let map = new Map();
    // first loop to run through each value in nums1
    for(let i = 0; i < nums1.length; i++) {
        if(!map.has(nums1[i])) {
            map.set(nums1[i],1);
        }
    }

    // if any duplicate, we increase value by 1
    for(let i = 0; i < nums2.length; i++) {
        if(map.has(nums2[i])) {
            map.set(nums2[i], map.get(nums2[i])+1);
        }
    }

    let result = [];
    
    // if any key has value > 1, it appears twice in nums1 and num2 array, return that key
    map.forEach(function(value, key) {
        if(value > 1) {
            result.push(key);
        }
    })
    // console.log(map);
    return result;
};
console.log(intersection([1,2,2,1],[2,2]));
console.log(intersection([4,9,5],[9,4,9,8,4]));





var intersection = function(nums1, nums2) {
    // since set value is unique, we can convert both array to set to remove duplicates
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    // use filter to filter out set2 has set1 values
    return [...set1].filter(num => set2.has(num));
};
console.log(intersection([1,2,2,1],[2,2]));
console.log(intersection([4,9,5],[9,4,9,8,4]));