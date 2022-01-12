// https://leetcode.com/problems/intersection-of-two-arrays-ii/

/**
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function(nums1, nums2) {

    let map = {};
    let result = [];

    // store each element and it's occurance into map
    for(let i = 0; i < nums1.length; i++) {
        let key = nums1[i];
        if(!map[key]) {
            map[key] = 1;
        } else {
            map[key] ++;
        }
    }

    // compare each element with map key, if we have the key, meaning we have match
    for(let i = 0; i < nums2.length; i++) {
        let key = nums2[i];
        // once we have the match, we can check it's value, if value > 0, we push to result, and decrease value by 1
        if(map[key] > 0) {
            result.push(key);
            map[key]--;
        }
    }
    // console.log(map)
    return result;
};
console.log(intersect([1,2,2,1],[2,2,2]));
console.log(intersect([4,9,5],[9,4,9,8,4]));