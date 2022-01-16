// https://leetcode.com/problems/split-array-largest-sum/

/**
Given an array nums which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays.

Write an algorithm to minimize the largest sum among these m subarrays.
 */

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */

var helper = function(nums, largestSum) {
    let pieces = 1;
    let tempSum = 0;
    for(const num of nums) {
        if(tempSum + num > largestSum) {
            tempSum = num;
            pieces++;
        } else {
            tempSum += num;
        }
    }
    return pieces;
}

var splitArray = function(nums, m) {

    let n = nums.length;
    let max = 0;
    let sum = 0;

    // find the max number in the array, and total sum in the array
    for(const num of nums) {
        max = Math.max(num, max);
        sum += num;
    }
    
    let lo = max;
    let hi = sum;
    // console.log(lo, hi)

    while(lo < hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        // console.log("low:", lo, "high:", hi, "mid:", mid);

        let pieces = helper(nums, mid);
        
        // if(pieces > m) {
        //     low = mid + 1;
        // } else {
        //     high = mid;
        // }
        if (pieces <= m) hi = mid - 1
        else lo = mid + 1
    }
    return lo;
};
console.log(splitArray([7,2,5,10,8], 2));
console.log(splitArray([1,2,3,4,5], 2));
console.log(splitArray([1,4,4], 3));





var splitArray = function(nums, m) {
    let left = Math.max(...nums)
    let right = nums.reduce((a, b) => a + b)
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        console.log("left:", left, "right:", right, "mid:", mid);
        let sum = 0
        let count = 1
        
        for (const num of nums) {
            if (sum + num > mid) {
                if (++count > m) break
                sum = num
            } else {
                sum += num
            }
        }

        if (count <= m) {
            right = mid - 1
            // console.log("move left")
        } else {
            left = mid + 1
            // console.log("move right")
        }
    }
    return left
};
console.log(splitArray([7,2,5,10,8], 2));
console.log(splitArray([1,2,3,4,5], 2));
console.log(splitArray([1,4,4], 3));