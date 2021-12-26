// https://leetcode.com/problems/find-pivot-index/

/*
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
*/

/**
 * @param {number[]} nums
 * @return {number}
1. first loop to run though the entire given array;
    a. first inner loop run from 0 till 1
    b. second inner loop run from i+1 till the end
    c. compare left and right

2. find the sum first, and compare left and right
 */

var pivotIndex = function(nums) {
    
    for(let i = 0; i < nums.length; i++) {
        let leftSum = 0, rightSum = 0;

        for(let x = 0; x < i; x++) {
            leftSum += nums[x];
        }

        for(let y = i+1; y < nums.length; y++) {
            rightSum += nums[y];
        }

        if(leftSum === rightSum) {
            return i;
        }
    }
    return -1;
};
console.log(pivotIndex([1,7,3,6,5,6]));     // 3
console.log(pivotIndex([1,2,3]));     // -1
console.log(pivotIndex([2,1,-1]));     // 0





var pivotIndex = function(nums) {
    // get the total
    let total = nums.reduce((a,b)=> a+b);
    // console.log(total)

    let leftSum = 0;

    for(let i = 0; i < nums.length; i++) {
        leftSum += (nums[i - 1] || 0);

        if(leftSum === total - leftSum - nums[i]) {
            return i;
        }
    }
    return -1;
};
console.log(pivotIndex([1,7,3,6,5,6]));     // 3
console.log(pivotIndex([1,2,3]));     // -1
console.log(pivotIndex([2,1,-1]));     // 0