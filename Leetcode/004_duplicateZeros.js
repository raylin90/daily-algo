// https://leetcode.com/problems/duplicate-zeros/
// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.

1. loop through the array, if we found zero
2. insert a zero
3. REMOVE the last element, because the length is fixed
 */

var duplicateZeros = function(arr) {
    
    let n = arr.length;

    for(let i = 0; i < n; i++) {

        if(arr[i] === 0) {
            // insert after i, and remove last index
            arr.splice(i,0,0);
            arr.pop();
            // increase i, so we can skip added 0
            i++;
        }
        
    }
    // console.log(arr);
};
console.log(duplicateZeros([1,0,2,3,0,4,5,0]));     // [1,0,0,2,3,0,0,4]
console.log(duplicateZeros([1,2,3]));     // [1,2,3]



// without build-in
const pushBackArr = (arr, idx) => { 
    for(let i = arr.length; i > idx; i--) {
        arr[i] = arr[i-1];
    }
    return arr;
}
// console.log(pushBackArr([1,2,3,4,5],2));

var duplicateZeros = function(arr) {
    
    let n = arr.length;

    for(let i = 0; i < n; i++) {

        if(arr[i] === 0) {
            pushBackArr(arr, i);
            i++;
            arr.pop()
        }
        
    }
    console.log(arr);
};
console.log(duplicateZeros([1,0,2,3,0,4,5,0]));     // [1,0,0,2,3,0,0,4]