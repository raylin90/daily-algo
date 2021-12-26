// https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.

1. for loop i++, need two pointer, if we only use one, somehow,it will mess up the index, when j element == 0, splice j and push 0;
2. for loop i--, if encouter 0, splice and push
3. two pointer, while loop to decrease i and j
    a. if i element is 0, we splice and push to end, j--
    b. just keep going with i
 */

var moveZeroes = function(nums) {
    // somehow, we need seperate idx to keep track of the current position, one pointer will loss the index while we splice two 0 in a row
    let seperateIdx = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[seperateIdx] === 0) {
            nums.splice(seperateIdx,1);
            nums.push(0);
        } else {
            seperateIdx++;
        }
    }
    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));      // [1,3,12,0,0]
console.log(moveZeroes([0,0,1]));      // [1,3,12,0,0]





var moveZeroes = function(nums) {

    // backward loop, splice and push while we found 0
    for(let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));      // [1,3,12,0,0]
console.log(moveZeroes([0,0,1]));      // [1,3,12,0,0]





var moveZeroes = function(nums) {

    // two pointer
    let i = 0;
    let j = nums.length - 1;

    // if we found i element is 0, splice and push back, need to decrease j otherwise will be infinite loop at the end
    while(i <= j) {
        if(nums[i] === 0) {
            nums.splice(i,1)
            nums.push(0);
            j--;
        } else {
            i++;
        }
    }
    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));      // [1,3,12,0,0]
console.log(moveZeroes([0,0,1]));      // [1,3,12,0,0]