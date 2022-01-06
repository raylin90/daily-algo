// https://leetcode.com/problems/find-peak-element/

/**
 * @param {number[]} nums
 * @return {number}

1. the idea is to find the larges number, for ex:
    1. [1,2,3]
    2. [1,3,2]
    3. [3,2,1]
    4. [3,1,2]
    5. those 4 combination, if we have the largest number, it’s larger than it’s adjecent neighbor
2. linear way
    1. for loop from i till nums.length;
    2. whenever i element is > then i+1 element, we have our largest index
3. binary search, consider the nums as two sorted array, one ascending, other descending
    1. start = 0, end = nums.length - 1, and find the midPoint
    2. while(start < end), not ≤, because we will get start === end, inifite loop
    3. if midPoint element > midPoint +1 element, we are descending, we want to check left by end = midPoint
    4. else we are ascending, we want to check right, start = midPoint + 1
    5. end = midPoint and start = midPoint+1, think in for loop way, we want to comapre i with i+1 element, so start we move up +1, end, we still want to consider midPoint element
 */

var findPeakElement = function(nums) {
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[i+1]) {
            return i;
        }
    }
    return nums.length-1
};

console.log(findPeakElement([1,2,3,1]));
console.log(findPeakElement([1,2,1,3,5,6,4]));




var findPeakElement = function(nums) {
    
    let start = 0, end = nums.length - 1;

    // since we don't two number to meet, so just <
    while(start < end) {

        // find midPoint
        let midPoint = Math.floor((start+end)/2);

        // console.log(nums[start], nums[midPoint], nums[end]);

        //This means we are in the descending part of the array
        if(nums[midPoint] > nums[midPoint+1]) {
            // move left, not midPoint+1 because we still want to compare the midPoint with left side element
            end = midPoint;
        //This means we are in the ascending part of the array
        } else {
            // move to right, because we compared midPoint already, no need to compare again, so we +1
            start = midPoint + 1;
        }
    }
    return start;
};

console.log(findPeakElement([1,2,3,1]));
console.log(findPeakElement([1,2,1,3,5,6,4]));