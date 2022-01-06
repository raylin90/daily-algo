// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}

1. binary search, start = 0, end = nums.length - 1
    before we start the search, we can check if start element < end element, if true, then array is sorted, return start element, no need to search

    a. while(start < end), find midPoint
    b. pattern:
        i. when we experience decrease, then we have our min
        ii. so if midPoint element < midPoint - 1, we have our min
        iii. else think like two sorted arrays
        if midPoint element > starting element, then left side is sorted, the minimum might be the at left side or right side. so we need another check to narrow dowm: if midPoint element > end element, if true, then right portion array is less than left portion array, we move to right
        else, move to left side.


 */

var findMin = function(nums) {
    
    let start = 0, end = nums.length - 1;

    // before we run into binary search, we  can check if start < end element, if true, then it's sorted, no need to waste time to search
    if(nums[start] < nums[end]) {
        return nums[start];
    }

    while(start < end) {

        let midPoint = Math.floor((start+end)/2);

        // the break point, when midPoint - 1 > midPoint element, we have our minimun number
        if(nums[midPoint] < nums[midPoint-1]) {
            return nums[midPoint];
            // need to use >= because [2,1], after first loop, we left with [1], compare the midPoint with start & end elemnt to deterime which side to go
        } else if(nums[midPoint] >= nums[start] && nums[midPoint] > nums[end]) {
            start = midPoint + 1; 
        } else {
            end = midPoint - 1;
        }
    }
    // console.log(nums[start], nums[end])

    // once loop is done, start and end element should match,
    return nums[start];
};
console.log(findMin([3,4,5,1,2]));      // 1
console.log(findMin([4,5,6,7,0,1,2]));      // 0
console.log(findMin([11,13,15,17]));      // 11
console.log(findMin([2,1]))     // 1