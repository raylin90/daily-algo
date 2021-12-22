// Given an array nums of integers, return how many of them contain an even number of digits.
// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

/**
 * @param {number[]} nums
 * @return {number}
 */

var findNumbers = function(nums) {
    
    let eventCount = 0;

    nums.forEach(num=> {
        // convert number to string and check it's length, if divisible by 2, then it's even number
        let tempString = num.toString().length;
        // console.log(tempString)

        if(tempString % 2 === 0) {
            eventCount++;
        }
    })

    return eventCount;
};

console.log(findNumbers([12,345,2,6,7896]));        // 2
console.log(findNumbers([555,901,482,1771]));        // 1





var findNumbers2 = function(nums) {
    // reducer are like loop
    // count , 0, set initial count as 0
    return nums.reduce((count, value) => (value.toString().length % 2 === 0) ? count + 1 : count, 0)
};

console.log(findNumbers2([12,345,2,6,7896]));        // 2
console.log(findNumbers2([555,901,482,1771]));        // 1