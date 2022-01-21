// https://leetcode.com/problems/contains-duplicate-ii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function(nums, k) {
    
    let map = new Map();

    // loop throught the nums array
    for(let i = 0; i < nums.length; i++) {

        // if we have match element vs. map key, they our [i] and [j] element are equal
        if(map.has(nums[i])) {
            // we subtract our two indexs, and see if see if it's less equal to k
            if(Math.abs(map.get(nums[i]) - i) <= k) {
                return true;
            }
        }

        map.set(nums[i], i);
    }
    // console.log(map)
    return false;
};

console.log(containsNearbyDuplicate([1,2,3,1],3));
console.log(containsNearbyDuplicate([1,0,1,1],1));
console.log(containsNearbyDuplicate([1,2,3,1,2,3],2));
console.log(containsNearbyDuplicate([-1,-1],1));