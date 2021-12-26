

/*
You are given an integer array nums where the largest integer is unique.

Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.
*/

/**
 * @param {number[]} nums
 * @return {number}
1. find the max value in the array, then loop each elelemt, and compare element * 2 with max val
2. find the max and next max number, if max > nextMax * 2, then return index, else -1;
 */

var dominantIndex = function(nums) {
    
    let largestNum = Math.max(...nums);
    // console.log(largestNum);

    for(const num of nums) {
        
        if(num === largestNum) {
            continue;
        }
        if(largestNum < 2* num) {
            return -1;
        }
    }
    return nums.indexOf(Math.max(...nums));
};
console.log(dominantIndex([3,6,1,0]));      // 1
console.log(dominantIndex([1,2,3,4]));      // -1
console.log(dominantIndex([0]));      // 0





var dominantIndex = function(nums) {
    
    let largeNum = -1;
    let smallNum = -1;
    let idx = 0;

    // find the max number and next max number
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > largeNum) {
            smallNum = largeNum;
            largeNum = nums[i];
            idx = i;
        } else if(nums[i] > smallNum) {
            smallNum = nums[i];
        }
    }

    // console.log(largeNum, smallNum)
    // if max > next max * 2, then return idx, else -1
    return largeNum >= smallNum * 2 ? idx : -1;

};
console.log(dominantIndex([3,6,1,0]));      // 1
console.log(dominantIndex([1,2,3,4]));      // -1
console.log(dominantIndex([0]));      // 0