// https://leetcode.com/problems/remove-element/

/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
*/


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}

1. loop through the array
2. if we encouter the val, we splice it out,
3. once we splice out, REMEMBER, i--, because we want to re-check, otherwise i will jump to i+1 after removal
 */

// easy build-in appraoch
var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === val) {
            // remove the value in current index after matching to val
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
};
console.log(removeElement([3,2,2,3],3));        // Output: 2, nums = [2,2,_,_]
console.log(removeElement([0,1,2,2,3,0,4,2],2));        // Output: 5, nums = [0,1,4,0,3,_,_,_]
console.log(removeElement([3,2,2,3],3));        // Output: 5, nums = [0,1,4,0,3,_,_,_]





// self wrote removeAtIndex method
const removeAtIndex = (arr, start) => {
    for(let i = start; i < arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr.pop();
    return arr;
}
// console.log(removeAtIndex([3,2,1,3],2));

var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === val) {
            removeAtIndex(nums, i);
            i--;
        }
    }
    return nums.length;
};
console.log(removeElement([3,2,2,3],3));        // Output: 2, nums = [2,2,_,_]
console.log(removeElement([0,1,2,2,3,0,4,2],2));        // Output: 5, nums = [0,1,4,0,3,_,_,_]
console.log(removeElement([3,2,2,3],3));        // Output: 5, nums = [0,1,4,0,3,_,_,_]