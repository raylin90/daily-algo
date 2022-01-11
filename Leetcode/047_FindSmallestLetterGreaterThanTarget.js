// https://leetcode.com/problems/find-smallest-letter-greater-than-target/

/**
Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.

Note that the letters wrap around.

For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.
 */

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

var nextGreatestLetter = function(letters, target) {
    
    for(let i = 0; i < letters.length; i++) {
        if(letters[i] > target) {
            return letters[i];
        }
    }
    return letters[0];
};
console.log(nextGreatestLetter(["c","f","j"], "a"));
console.log(nextGreatestLetter(["c","f","j"], "c"));
console.log(nextGreatestLetter(["c","f","j"], "d"));





var nextGreatestLetter = function(letters, target) {
    
    // if(letters[letters.length - 1] <= target) return letters[0];
    
    let start = 0, end = letters.length - 1;

    while(start <= end) {
        let midPoint = start + Math.floor((end - start) / 2);

        if(letters[midPoint] > target) {
            end = midPoint - 1;
        } else {
            start = midPoint + 1;
        }
        console.log(letters[start], letters[end]);
    }
    return letters[start];
};
// console.log(nextGreatestLetter(["c","f","j"], "a"));
// console.log(nextGreatestLetter(["c","f","j"], "c"));
// console.log(nextGreatestLetter(["c","f","j"], "d"));
console.log(nextGreatestLetter(["c","f","j"], "j"));