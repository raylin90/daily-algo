// Given a binary array nums, return the maximum number of consecutive 1's in the array.
/**
 * @param {number[]} nums
 * @return {number}

You need to think about two things as far as any window is concerned. One is the starting point for the window. How do you detect that a new window of 1s has started? The next part is detecting the ending point for this window. How do you detect the ending point for an existing window? If you figure these two things out, you will be able to detect the windows of consecutive ones. All that remains afterward is to find the longest such window and return the size.
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