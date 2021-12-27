// https://leetcode.com/problems/plus-one/

/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/


/**
 * @param {number[]} digits
 * @return {number[]}

1. for loop backward:
    a. if digit[i] is 9, we set i element as 0, and add 1 to next i element
    b. else , just add one, and break;
    c. if we reach 0 index, and it's a 9, then we need to unshift 1 at the begining

2. join the input as string, convert to BIGIN add 1n, convert back to string,split into array, and return as number in each element

*HINT* combine array into string, convert to int, and add one, convert back to string, and for loop push back to array (not working due to JS parseInt cannot conver large integer)
 */

var plusOne = function(digits) {
    // loop backward
    for(let i = digits.length - 1; i >= 0; i--) {
        // if it's 9, we need to change 1
        if(digits[i] === 9) {
            // add one and carry one, but if we hit 0 index, we need to add 1 at the front
            digits[i] = 0;
            if(i === 0) {
                digits.unshift(1);
            }
        // if it's not 9, just simply add 1 and break the loop
        } else {
            digits[i] = digits[i] + 1;
            break;
        }
    }
    return digits;
};
console.log(plusOne([1,2,3]));
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
console.log(plusOne([9]));





var plusOne = function(digits) {
    // convert to BigInt and add 1n at the end
    let intResult = BigInt(digits.join('')) + 1n;
    // convert back to string, and split into array
    let stringResult = intResult.toString().split("");
    // return the array is Number
    return stringResult.map(Number);
};
console.log(plusOne([1,2,3]));
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
console.log(plusOne([9]));