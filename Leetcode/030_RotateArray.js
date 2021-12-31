// https://leetcode.com/problems/rotate-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {

    // instead of think shilf [i] element from right to front, we can add front element to back
    let len = nums.length
    k = k % nums.length;
    // console.log(len - k);

    for(let i = 0; i < len - k; i++) {
        nums.push(nums[i]);
    }
    // and then remove the front park
    nums.splice(0, len-k);
    return nums;
};
console.log(rotate([1,2,3,4,5,6,7],3));     // [5,6,7,1,2,3,4]
console.log(rotate([-1,-100,3,99],2));     // [3,99,-1,-100]





const reverse = (arr,start,end) => {
    while(start < end) {
        [arr[start],arr[end]] = [arr[end],arr[start]];
        start ++;
        end --;
    }
}
var rotate = function(nums, k) {

    let len = nums.length - 1;
    k = k % nums.length

    // reverse the entire array;
    reverse(nums,0,len);
    // console.log(nums);

    // reverse the begin till k-1 postion
    reverse(nums,0,k-1);
    // console.log(nums);

    // reverse rest of the array
    reverse(nums,k,len);
    // console.log(nums);
    return nums;
};
console.log(rotate([1,2,3,4,5,6,7],3));     // [5,6,7,1,2,3,4]
console.log(rotate([-1,-100,3,99],2));     // [3,99,-1,-100]





var rotate = function(nums, k) {

    // instead of think shilf [i] element from right to front, splice from the back and add to front
    let len = nums.length
    k = k % nums.length;
    // console.log(len - k);

    let temp = nums.splice(len - k, k);
    // console.log(nums.splice(len - k, k));
    nums.unshift(...temp);
    return nums;
};
console.log(rotate([1,2,3,4,5,6,7],3));     // [5,6,7,1,2,3,4]
console.log(rotate([-1,-100,3,99],2));     // [3,99,-1,-100]

