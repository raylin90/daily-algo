// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    
    let set = new Set();

    for(const num of nums) {
        // if set has the element, then we have duplicate
        if(set.has(num)) {
            return true;
        } else {
            // else add to set
            set.add(num);
        }
    }
    // if iteration is done, then we have no duplicate
    return false;
};
console.log(containsDuplicate([1,2,3,1]));