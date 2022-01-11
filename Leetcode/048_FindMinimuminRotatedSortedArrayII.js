// Find Minimum in Rotated Sorted Array II

/**
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,4,4,5,6,7] might become:

[4,5,6,7,0,1,4] if it was rotated 4 times.
[0,1,4,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.

You must decrease the overall operation steps as much as possible.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function(nums) {
    
    let start = 0, end = nums.length - 1;

    // edge case check, if array is sorted already
    if(nums[start] < nums[end]) {
        return nums[start];
    }

    while(start < end) {
        // find the midPoint
        let midPoint = start + Math.floor((end-start)/2);

        // console.log(nums[start], nums[midPoint], nums[end])
        
        // anytime we encounter midPoint - 1 element > midPoint element, then we have our smallest number
        if(nums[midPoint] < nums[midPoint-1]) {
            return nums[midPoint];
        } else if (nums[midPoint] > nums[end]) {
            // if midPoint element is larger than end element, then smallest is on the right side
            start = midPoint+1;
            // if midPoint element is smaller than end element, then smallest is on the left side
        } else if(nums[midPoint] < nums[end]) {
            end = midPoint - 1;
            // else we might have a match, then just decrease right side;
        } else {
            end --;
        }
    }
    // console.log(nums[start], nums[end]);
    return nums[start];
};

console.log(findMin([1,3,5]));
console.log(findMin([2,2,2,0,1]));
console.log(findMin([3,3,1,3]));
console.log(findMin([3,1,3,3]));