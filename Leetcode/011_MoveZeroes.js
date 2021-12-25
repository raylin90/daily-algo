// https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {

    for(let i = 0; i < nums.length; i++) {
        console.log(i)
        if(nums[i] === 0) {
            nums.splice(i,1);
            nums.push(0);
        }
    }

    // for(let i = nums.length - 1; i >= 0; i--) {
    //     console.log(i)
    //     if(nums[i] === 0) {
    //         nums.splice(i,1);
    //         nums.push(0);
    //     }
    // }
    return nums;
};

// console.log(moveZeroes([0,1,0,3,12]));      // [1,3,12,0,0]
console.log(moveZeroes([0,0,1]));      // [1,3,12,0,0]