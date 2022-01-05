/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
    
    k = k % nums.length
    if(k === 0) return nums;

    nums.reverse();
    // console.log(nums.slice(0, k));
    // console.log(nums.slice(k, nums.length));
    return [...nums.slice(0, k).reverse(), ...nums.slice(k, nums.length).reverse()]
};
console.log(rotate([1,2,3,4,5,6,7],3));




var rotate = function(nums, k) {

    // instead of think shilf [i] element from right to front, splice from the back and add to front
    let len = nums.length
    k = k % nums.length;
    // console.log(len - k);

    let temp = nums.splice(len - k, k);
    console.log(temp);

    nums.unshift(...temp);
    return nums;
};
console.log(rotate([1,2,3,4,5,6,7],3));