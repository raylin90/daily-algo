// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// var search = function(nums, target) {
    
//     let start = 0, end = nums.length - 1;

//     while(start <= end) {

//         let midPoint = Math.floor((start + end) /2);

//         if(nums[midPoint] === target) {
//             return midPoint;
        
//         // compare with start element instaed of target, because we have TWO kind of sorted number
//         } else if(nums[midPoint] > nums[start]) {

//             // how to move midPoint is tricky
//             if(target >= nums[start] && target < nums[midPoint]) {
//                 // narrow to left
//                 end = midPoint -1;
//             } else {
//                 // narrow to right
//                 start = midPoint + 1;
//             }

//         } else {
//             // check right
//             if(target < nums[end] && target >= nums[midPoint]) {
//                 start = midPoint + 1;
//             } else {
//                 end = midPoint - 1;
//             }
//         }
//     }

//     return - 1;
// };
// console.log(search([4,5,6,7,0,1,2], 0));
// console.log(search([4,5,6,7,0,1,2], 3));
// console.log(search([1], 0));




var search = function(nums, target) {

    let start = 0, end = nums.length - 1;

    while(start <= end) {

        let midPoint = Math.floor((start + end) / 2);

        if(nums[midPoint] === target) {
            return midPoint;
        
            // left sorted portion
        } else if(nums[midPoint] >= nums[start]) {
            // check left if target is within left range
            if(target >= nums[start] && target < nums[midPoint]) {
                // for sure it's left
                end = midPoint - 1;
            } else {
                // check right
                start = midPoint + 1;
            }
            // right sorted portion
        } else {
            // check right if tartget is witnin right range
            if(target > nums[midPoint] && target <= nums[end]) {
                start = midPoint + 1;
            } else {
                end = midPoint - 1;
            }
        }
    }
    return -1;
};