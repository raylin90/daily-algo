// https://leetcode.com/problems/third-maximum-number/

// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

/**
 * @param {number[]} nums
 * @return {number}
 * 
1. set, store each element into set, if set.size is < 3, return Math.max, otherwise, delete two Math.max, return the Max
2. convert to set, sort, and return
3. sort, for loop to remove duplicate number, check length, and return accordingly
4. three variable, loop once, push num to the largest max
 */

var thirdMax = function(nums) {
    // create a set
    let set = new Set();
    // store each element from input array
    for(const num of nums) {
        set.add(num);
    }
    // check size, if more than 3, then return Math.max
    if(set.size < 3) return Math.max(...set);
    // else, delete two largest num, return max
    set.delete(Math.max(...set));
    set.delete(Math.max(...set));
    return Math.max(...set);
};
console.log(thirdMax([3,2,1]));      // 1
console.log(thirdMax([1,2]));        // 2
console.log(thirdMax([2,2,3,1]));        // 1
console.log(thirdMax([1,2,2,5,3,5]));           // 2





var thirdMax = function(nums) {
    // set to remove duplicate, and sort, the nreturn base on length
    nums = [...new Set(nums)].sort((a,b) => b-a);
    return (nums.length <= 2)? nums[0] : nums[2];
};
console.log(thirdMax([3,2,1]));      // 1
console.log(thirdMax([1,2]));        // 2
console.log(thirdMax([2,2,3,1]));        // 1
console.log(thirdMax([1,2,2,2,2,5,3,5]));           // 2





var thirdMax = function(nums) {
    // sort the array first
    nums.sort(function(a,b){return a-b});
    // remove every duplicated number
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i+1]) {
            nums.splice(i+1,1);
            i--;
        }
    }
    // return base on length
    return nums.length < 3 ? nums[nums.length-1] : nums[nums.length-3];
};
console.log(thirdMax([3,2,1]));      // 1
console.log(thirdMax([1,2]));        // 2
console.log(thirdMax([2,2,3,1]));        // 1
console.log(thirdMax([1,2,2,2,2,5,3,5]));           // 2




var thirdMax = function(nums) {
    // edge case, if we only have 1 or 2 element;
    if(nums.length === 1) {
        return nums[0];
    } else if(nums.length === 2) {
        return nums[0] >= nums[1] ? nums[0] : nums[1];
    }

    // if we have three or more element in array
    // 1 is the least, 3 is the most;
    let max1 = Number.NEGATIVE_INFINITY;
    let max2 = Number.NEGATIVE_INFINITY;
    let max3 = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > max1) {
            max3 = max2;
            max2 = max1;
            max1 = nums[i];
        } else if(nums[i] > max2 && nums[i] !== max1) {
            max3 = max2;
            max2 = nums[i];
        } else if(nums[i] > max3 && nums[i] !== max2 && nums[i] !==max1) {
            max3 = nums[i];
        } 
        // console.log(max1,max2,max3);
    }

    return max3 === Number.NEGATIVE_INFINITY ? max1 : max3;
};
console.log(thirdMax([3,2,1]));      // 1
console.log(thirdMax([1,2]));        // 2
console.log(thirdMax([2,2,3,1]));        // 1
console.log(thirdMax([1,2,2,2,2,5,3,5]));           // 2