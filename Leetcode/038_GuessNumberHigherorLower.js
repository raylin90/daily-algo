// https://leetcode.com/problems/guess-number-higher-or-lower/


/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

var guessNumber = function(n) {

    // two pointer for binary search
    let start = 0, end = n, mid;
    // console.log(guess(n));
    
    while(start <= end) {
        // find mid
        mid = Math.floor((start + end) / 2);
        // console.log(mid)
        
        // use build-in API to check ===, > or <
        if(guess(mid) === 0) {
            return mid
        } else if(guess(mid) === -1) {
            // mid is higher than number
            end = mid - 1;
        } else {
            // mid is lower than number
            start = mid + 1;
        }
    }
};