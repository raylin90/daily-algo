// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

1. O(2 logN) time complicity, because 1st binary, we will find the target, and search whatever on the left
    1. 2nd binary, we need to find the target, and search right portion
    2. set index = -1 to start the search, because if we cannot find it, then -1 is outcome
    3. set start and end, while(start ≤end), find midPoint
    4. if we have midPoint element === target, we change our index (this line at end, because we can to check some condition first)
    5. if midPoint element ≥ target, we can keep check the left side to find the starting index
    6. else opposite, check right side, it’s important of ≥ and ≤, because even it’s matching, we want to keep search
 */

var findStartingIndex = function(nums, target) {
    let start = 0, end = nums.length - 1;
    let index = -1;

    while(start <= end) {
        let midPoint = Math.floor((start+end)/2);

        // if we have match to midPoint, we want to check left side as well
        if(nums[midPoint] >= target) {
            end = midPoint - 1;
        } else {
            start = midPoint + 1;
        }
        // if we found the match, we set to out index first
        if(nums[midPoint] === target) index = midPoint;
    }
    return index;
}

var findEndingIndex = function(nums, target) {
    let start = 0, end = nums.length - 1;
    let index = -1;

    while(start <= end) {
        let midPoint = Math.floor((start+end)/2);
        
        // if we have match, we still want to check right portion
        if(nums[midPoint] <= target) {
            start = midPoint + 1;
        } else {
            end = midPoint - 1;
        }
        if(nums[midPoint] === target) index = midPoint;
    }
    return index;
}

var searchRange = function(nums, target) {
    let result = [];
    // O(2 log N), since we need to find two binary search, finding the left index, and right index
    result[0] = findStartingIndex(nums, target);
    result[1] = findEndingIndex(nums, target);
    return result;
};
console.log(searchRange([5,7,7,8,8,10],8));     // [3,4]
console.log(searchRange([5,7,7,8,8,10],6));     // [-1,-1]
console.log(searchRange([],0));     // [-1,-1]