// // https://leetcode.com/problems/find-k-closest-elements/

// /**
//  * @param {number[]} arr
//  * @param {number} k
//  * @param {number} x
//  * @return {number[]}
//  */

// var findClosestElements = function(arr, k, x) {
    
//     let start = 0, end = arr.length - 1;
//     console.log(start, end);

//     while(start < end) {
//         let midPoint = Math.floor((start+end)/2);
//         console.log(arr[start], arr[midPoint], arr[end]);

//         if(x - arr[midPoint] > arr[midPoint + k] - x) {
//             start = midPoint + 1;
//         } else {
//             end = midPoint;
//         }
//         // console.log(start,end);
//     }

//     let result = [];

//     for(let i = start; i < start+ k; i++) {
//         result.push(arr[i]);
//     }
//     return result;
// };
// // console.log(findClosestElements([1,2,3,4,5],4,3));      // [1,2,3,4]
// // console.log(findClosestElements([1,2,3,4,5],4,-1));     // [1,2,3,4]
// console.log(findClosestElements([0,0,0,1,3,5,6,7,8,8],2,2));     // [1,3]





var findClosestElements = function(arr, k, x) {
    
    let i = 0, j = arr.length - 1;
    console.log(i, j);
    while(j-i > k) {
        if(x - arr[i] > arr[j] - x) {
            i++
        } else {
            j--;
        }
        console.log(i,j);
    }
    console.log(arr[i], arr[j]);
    return arr.slice(i,j)
};
// console.log(findClosestElements([1,2,3,4,5],4,3));      // [1,2,3,4]
// console.log(findClosestElements([1,2,3,4,5],4,-1));     // [1,2,3,4]
console.log(findClosestElements([0,0,0,1,3,5,6,7,8,8],2,2));     // [1,3]