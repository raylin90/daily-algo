// https://leetcode.com/problems/find-the-duplicate-number/

/**
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var findDuplicate = function(nums) {
    let map = new Map();

    for(const num of nums) {
        // if map has the num, which means we have duplicate
        if(map.has(num)) {
            return num;
            // else we set the num as key, and value can be whatever
        } else {
            map.set(num, 1);
        }
    }
};
console.log(findDuplicate([1,3,4,2,2]));
console.log(findDuplicate([3,1,3,4,2]));





var findDuplicate = function(nums) {
    let set = new Set();

    for(const num of nums) {
        // if set has the num, which means we have duplicate
        if(set.has(num)) {
            return num;
            // else we add the num to set
        } else {
            set.add(num);
        }
    }
};
console.log(findDuplicate([1,3,4,2,2]));
console.log(findDuplicate([3,1,3,4,2]));





// using floyd's tort and hare algorithm
var findDuplicate = function(nums) {

    let tort=nums[0];
    let hare=nums[tort];

    // first phase tort will move 1 step at a time and hare will move 2   
    while(tort !== hare) {
        tort=nums[tort];
        hare=nums[nums[hare]];
    }
    // console.log(nums[tort], nums[hare]);
    tort=0;
    
    // In  second phase both will move one step at a time
    while(tort !== hare) {
        tort=nums[tort];
        hare=nums[hare];
    }
    // console.log(nums[tort], nums[hare]);
    return hare;

};
console.log(findDuplicate([1,3,4,2,2]));
console.log(findDuplicate([3,1,3,4,2]));