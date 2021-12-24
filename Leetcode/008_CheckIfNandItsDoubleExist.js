// https://leetcode.com/problems/check-if-n-and-its-double-exist/

/*
Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
*/

/**
 * @param {number[]} arr
 * @return {boolean}

1. nested for loop to check each possible occurance
2. use obj to keep track of each element, see if obj[key] has element/2, or element*2. if yes, then true, else set a new key
 */
var checkIfExist = function(arr) {
    // nested for loop to check current i and all following element
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            // if current element *2 or /2 equal to any following element, then we have a match
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





// obj to store each occurance and compare
var checkIfExist = function(arr) {
    let obj = {};
    // loop to check current element with obj's key
    for(const num of arr) {
        // console.log(num);
        if(obj[num * 2] || obj[num / 2]) {
            return true;
        } else {
            obj[num] = 1;
        }
    }
    return false;
};
console.log(checkIfExist([10,2,5,3]));      // true
console.log(checkIfExist([7,1,14,11]));      // true
console.log(checkIfExist([3,1,7,11]));      // false
