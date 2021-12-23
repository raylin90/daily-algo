/*
Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
*/

/**
 * @param {number[]} arr
 * @return {boolean}

1. nested for loop to check each possible occurance

 */
var checkIfExist = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] * 2 === arr[j] || arr[i] / 2 === arr[j]) {
                return true;
            }
        }
    }
    return false;
};
console.log(checkIfExist([10,2,5,3]));      // true
console.log(checkIfExist([7,1,14,11]));      // true
console.log(checkIfExist([3,1,7,11]));      // false
