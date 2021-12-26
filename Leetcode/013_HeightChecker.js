// https://leetcode.com/problems/height-checker/

/**
 * @param {number[]} heights
 * @return {number}

1. sort the array input, and compare with element in sorted, and input array, have a counter to count how many times different
2. 
 */

var heightChecker = function(heights) {
    
    let expected = heights.slice().sort(function(a,b){return a-b});

    let count = 0;
    for(let i = 0; i < heights.length; i++) {
        if(heights[i] !== expected[i]) {
            count++;
        }
    }
    return count;
};
console.log(heightChecker([1,1,4,2,1,3]));

