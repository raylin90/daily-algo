// https://leetcode.com/problems/binary-search/

/**
Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var binarySearch = function(nums, target, start, end) {
    // <= is important for ex: [2,5],5. if we only do <, once 2 was checked, it wont come to 5
    while(start <= end) {
        // find out the midPoint
        let midPoint = Math.floor((start + end) / 2);
        // console.log(nums[midPoint])
        
        // if match, we have the indice to return
        if(nums[midPoint] === target) {
            return midPoint;
        } else if(nums[midPoint] > target) {
            // check left; recursive call by descrease midPoint - 1
            return binarySearch(nums, target, start, midPoint-1)
        } else {
            // check right, recursive call by increase midPoint + 1
            return binarySearch(nums, target, midPoint+1, end)
        }
    }
    return -1;
}

var search = function(nums, target) {

    // // check edge case like [5],5
    // if(nums.length === 1) {
    //     return nums[0] === target ? 0 : -1;
    // }
    
    // otherwise, we set start and end indices
    let start = 0;
    let end = nums.length - 1;
    // recursive call since we need to find index, we need to keep counting start, and end position
    return binarySearch(nums, target, start, end)

};

console.log(search([-1,0,3,5,9,12],9));
console.log(search([-1,0,3,5,9,12],2));
console.log(search([2],2));
console.log(search([2,5],5));




var search = function(nums, target) {
    // set start and end point
    let start = 0;
    let end = nums.length - 1;

    // keep loop till we finish entire array
    while(start <= end) {
        // find midPoint, so we can compare midPoint element
        let midPoint = Math.floor((start + end ) / 2);

        // if midPoint match, we return midPoint
        if(nums[midPoint] === target) {
            return midPoint;
        } else if(nums[midPoint] > target) {
            // decrease midPoint to check left side
            end = midPoint - 1;
        } else {
            // increase midPoint to check right side;
            start = midPoint + 1;
        }
    }
    
    // edge case if we dealing with target is at even indices, or length == 1 array
    // if(nums[start] === target) {
    //     return start
    // } else {
    //     return -1;
    // }
    return -1;
};

console.log(search([-1,0,3,5,9,12],9));
console.log(search([-1,0,3,5,9,12],2));
console.log(search([2],2));
console.log(search([2,5],5));