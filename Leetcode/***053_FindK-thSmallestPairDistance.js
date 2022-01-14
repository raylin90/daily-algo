// https://leetcode.com/problems/find-k-th-smallest-pair-distance/

/**
The distance of a pair of integers a and b is defined as the absolute difference between a and b.

Given an integer array nums and an integer k, return the kth smallest distance among all the pairs nums[i] and nums[j] where 0 <= i < j < nums.length.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var smallestDistancePair = function(nums, k) {

    let result = [];
    
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i+1; j < nums.length; j++) {
            // console.log(nums[i], nums[j]);
            let diff = Math.abs(nums[i] - nums[j]);
            // console.log(diff);
            result.push(diff);
        }
    }

    result.sort(function(a,b){return a-b});
    // console.log(result);
    return result[k-1];
};

console.log(smallestDistancePair([1,3,1], 1));
console.log(smallestDistancePair([1,1,1], 2));
console.log(smallestDistancePair([1,6,1], 3));
console.log(smallestDistancePair([62,100,4], 2));





var smallestDistancePair = function (nums, k) {

    nums.sort((a,b) => a-b);
    // console.log(nums);
    let max = nums[nums.length - 1] - nums[0];
    // console.log(max);
    let result = new Array(max + 1).fill(0);

        
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i+1; j < nums.length; j++) {
            // console.log(nums[i], nums[j]);
            let diff = Math.abs(nums[i] - nums[j]);
            // console.log(diff);
            result[diff] ++;
        }
    }
    // console.log(result);

    let total = 0;
    for(let i = 0; i < result.length; i++) {
        total += result[i];
        if(total >= k) {
            return i;
        }
    }
};


console.log(smallestDistancePair([1,3,1], 1));
console.log(smallestDistancePair([1,1,1], 2));
console.log(smallestDistancePair([1,6,1], 3));
console.log(smallestDistancePair([62,100,4], 2));






function numDifferences(nums, difference) {
    let i = 0,
        j = 0,
        result = 0;
    
    while (i < nums.length - 1) {
        while (j < nums.length && nums[j] - nums[i] <= difference) {
            j++;
        }
        
        result += (j - i - 1);
        i++;
    }
    
    return result;
}


function smallestDistancePair(nums, k) {
    // sort the array, so we can perform binary search
    nums.sort((a,b) => a-b);
    // console.log(nums)
    
    let start = 0,
        end = nums[nums.length - 1] - nums[0];

    while (start < end) {
        const mid = start + Math.floor((end - start) / 2);



        const count = numDifferences(nums, mid);

        console.log(start, end, mid, count);
        
        if (count < k) {
        start = mid + 1;
        } else {
            end = mid;
        }
    }
    
    return start;
};

console.log(smallestDistancePair([1,3,1], 1));
// console.log(smallestDistancePair([1,1,1], 2));
// console.log(smallestDistancePair([1,6,1], 3));
// console.log(smallestDistancePair([62,100,4], 2));
