// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

/**
 * @param {number[]} nums
 * @return {number[]}

1. couting sort, if count array element = 0, then it's the number we missing
2. using set to get the unique #'s
    a. then loop through the origin input array, to check if set has input[i] or not, if not, then push to result
 */

var findDisappearedNumbers = function(nums) {
    
    let count = new Array(nums.length+1).fill(0);
    let result = [];

    for(const num of nums) {
        count[num]++;
    }

    console.log(count);

    for(let i = 1; i < count.length; i++) {
        if(count[i] === 0) {
            result.push(i);
        }
    }

    return result;
};
console.log(findDisappearedNumbers([1,1]));     // 2
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));     // 2





var findDisappearedNumbers = function(nums) {
    
    let set = new Set(nums);
    let result = [];

    console.log(set);
    for(let i = 0; i < nums.length; i++) {
        if(!set.has(i+1)) {
            result.push(i+1);
        }
    }
    return result;
};
console.log(findDisappearedNumbers([1,1]));     // 2
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));     // 2