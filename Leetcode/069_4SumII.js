// https://leetcode.com/explore/learn/card/hash-table/187/conclusion-hash-table/1134/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */

var fourSumCount = function(nums1, nums2, nums3, nums4) {

    // split into 2/2 nested for loop, so we are looking at O(n^2)
    let map = new Map();
    let count = 0;

    // first two for loop run thought first two array, and put it's total into map
    for(let a = 0; a < nums1.length; a++) {
        for(let b = 0; b < nums1.length; b++) {
            let total = nums1[a] + nums2[b]
            // console.log(total)
            map.set(total, (map.get(total) || 0) + 1)
        }
    }
    // console.log(map)

    // run though each element, sum them up.
    for(let c = 0; c < nums3.length; c++) {
        for(let d = 0; d < nums3.length; d++) {
            let total = nums3[c] + nums4[d]
            // console.log(total)

            // similair to two sum, get the remianing and check if map has it or not
            let remaining = 0 - total;
            // console.log(remaining)
            if(map.has(remaining)) {
                count += map.get(remaining);
            }
        }
    }
    return count;
};
console.log(fourSumCount([1,2],[-2,-1],[-1,2],[0,2]))





var fourSumCount = function(nums1, nums2, nums3, nums4) {

    let count = 0;

    // 4 nested loop to run through each possible occurance
    for(let a = 0; a < nums1.length; a++) {
        for(let b = 0; b < nums2.length; b++) {
            for(let c = 0; c < nums3.length; c++) {
                for(let d = 0; d < nums4.length; d++) {
                    // console.log(nums1[a], nums2[b], nums3[c], nums3[d])
                    if(nums1[a]+nums2[b]+nums3[c]+nums3[d] === 0) {
                        count++;
                    }
                }
            }
        }
    }
    return count;
};
console.log(fourSumCount([1,2],[-2,-1],[-1,2],[0,2]))