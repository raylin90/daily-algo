// https://leetcode.com/problems/sort-array-by-parity/

// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

/**
 * @param {number[]} nums
 * @return {number[]}

1. for loop the array, if we encounter even number, splice from the array and unshift to front
2. build-in filter, filter our even and odd, then return both
3. partition kind, if even, start ++, if odd, end--, if start < end, swap
 */

var sortArrayByParity = function(nums) {
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0) {
            // unshift even # to front
            nums.unshift(...nums.splice(i, 1));
        }
    }
    return nums;
};
console.log(sortArrayByParity([3,1,2,4]));      // [4,2,3,1], [2,4,1,3], and [4,2,1,3] (either one)
console.log(sortArrayByParity([1,3]));





var sortArrayByParity = function(nums) {
    
    // console.log(nums.filter(num => num % 2 === 0));
    // console.log(nums.filter(num => num % 2 !== 0));

    // return array, element are copy of filtered array
    return [...nums.filter(num => num % 2 === 0), ...nums.filter(num => num % 2 !== 0)]
};
console.log(sortArrayByParity([3,1,2,4]));      // [4,2,3,1], [2,4,1,3], and [4,2,1,3] (either one)
console.log(sortArrayByParity([1,3]));





var sortArrayByParity = function(nums) {
    
    let start = 0, end = nums.length - 1;

    while(start < end) {
        if(nums[start] % 2 === 0) {
            start++;
        }
        if(nums[end] % 2 !== 0) {
            end--;
        }
        if(start < end) {
            [nums[start],nums[end]] = [nums[end],nums[start]];
        }
    }
    return nums;
};
console.log(sortArrayByParity([3,1,2,4]));      // [4,2,3,1], [2,4,1,3], and [4,2,1,3] (either one)
console.log(sortArrayByParity([1,3]));





var sortArrayByParity = function(nums) {
    
    return nums.sort(num=> num & 1 ? 1: -1);
};
console.log(sortArrayByParity([3,1,2,4]));      // [4,2,3,1], [2,4,1,3], and [4,2,1,3] (either one)
console.log(sortArrayByParity([1,3]));