// https://leetcode.com/problems/merge-sorted-array/

/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.

1. how to check the last index of given two array? i & j, because we need to compare the last element first
2. since we need to return nums1 array with m+n length, so last index is -1
3. we compare the last element btw. nums1 and nums2, whatever greater goes to m+n-1 at nums
4, whenever we pushed to nums1, we need to decrease i OR j and k each iteration, so we can comapre next element and fill correct index
 */

var merge = function(nums1, m, nums2, n) {

    let k = m+n-1
    let i = m-1
    let j = n-1
    
    while(j >= 0){
        if(nums1[i]>nums2[j]){
            nums1[k]=nums1[i] 
            i--
            console.log("i--: ", nums1);
        }
        else{
            nums1[k]=nums2[j]
            j--
            console.log("j--: ", nums1);
        }
        k--
        console.log("k-- ", nums1);
    }
    return nums1 
};
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));      // [1,2,2,3,5,6]
// console.log(merge([1],1,[],0));     // [1]  
// console.log(merge([0],0,[1],1));        // [1]






var merge = function(nums1, m, nums2, n) {

    // set i to keep track of nums1's last idx, and j to keep track of nums2's last idx
    let i = m - 1;
    let j = n - 1;

    // total amount of length will be m + n, -1 will be the last index
    let totalIndex = m + n - 1;

    // since we need to apend num2 to num1, we actively track nums2's index
    while(j >=0) {
        // if nums1's last index is larger, then we set last of totalIndex as nums1[i], i--
        if(nums1[i] > nums2[j]) {
            nums1[totalIndex] = nums1[i];
            i--;
        }
        // if nums2's last index is larger, then we set last of totalidex as nums2[j], j--
        else {
            nums1[totalIndex] = nums2[j];
            j--;
        }
        // everytime we appended a value to the list, we decrease the totalIndex
        totalIndex--;
    }
    return nums1;
};
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));      // [1,2,2,3,5,6]
console.log(merge([1],1,[],0));     // [1]  
console.log(merge([0],0,[1],1));        // [1]