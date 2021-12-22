// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// https://leetcode.com/problems/max-consecutive-ones/

/**
 * @param {number[]} nums
 * @return {number}

1) think about start window and end window
2) have two variables, current and max to keep track of consercutive occurance
 */

const findMaxConsecutiveOnes = function(nums) {

    let currentCount = 0;
    let maxCount = 0;

    for(let i = 0; i < nums.length; i++) {
        // starting window, increase currentCount by 1
        if(nums[i] === 1) {
            currentCount++;
        // ending window, zero out the currentCount if not consecutive
        } else {
            currentCount = 0;
        }
        // anytime we encouter larger number, we set into maxCount
        if(currentCount > maxCount) {
            maxCount = currentCount;
        }
    }

    return maxCount;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));     // 3
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));     // 2