// https://leetcode.com/problems/minimum-size-subarray-sum/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}

1. two pointer, sliding window
 */

var minSubArrayLen = function(target, nums) {
    // two pointer, left, right = 0
    let left = 0,
        right = 0,
        sum = 0,
        count = 0;
        minLength = Infinity;

    // sliding window from 0 idx to entire array;
    while(right < nums.length) {
        // add up the sum and count ++;
        sum += nums[right];
        count++;
        // whenever the sum is bigger or equal to target, that's when we need to slide down the window
        while(sum >= target) {
            // we set the minLength, by comapring current minLength and count
            minLength = Math.min(minLength, count);

            // move up the left side
            sum -= nums[left];
            left++;
            count--;
        }
        right++;
    }
    return minLength === Infinity ? 0 : minLength;
};
console.log(minSubArrayLen(7,[2,3,1,2,4,3]));      // 2
console.log(minSubArrayLen(4,[1,4,4]));      // 4
console.log(minSubArrayLen(11,[1,1,1,1,1,1,1,1]));      // 0