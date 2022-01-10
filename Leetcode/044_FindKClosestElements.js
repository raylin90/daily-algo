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

    // keep the loop going as long as arr.length > k limit
    while(arr.length > k) {

        // compare the different betw. start vs end element
        let diffStart = Math.abs(x - arr[0]);
        let diffEnd = Math.abs(arr[arr.length-1] - x);
        // console.log(diffStart, diffEnd)

        // remove whichever the greater different from the array
        if(diffStart > diffEnd) {
            arr.shift();
        } else {
            arr.pop();
        }
        // console.log(arr);
    }
    return arr;
    
}

console.log(findClosestElements([1,2,3,4,5],4,3));      // [1,2,3,4]
console.log(findClosestElements([1,2,3,4,5],4,-1));     // [1,2,3,4]
console.log(findClosestElements([0,0,0,1,3,5,6,7,8,8],2,2));     // [1,3]






var findClosestElements = function(arr, k, x) {


    let closestChain = [];

    for(let i=0; i<arr.length; i++){
        // push each key: value different to map, and push into output array
        let mapIn = {};
        mapIn.key = arr[i];
        mapIn.val = Math.abs(arr[i] - x);
        closestChain.push(mapIn);
    }
    // console.log(closestChain)

    // sort array by it's value
    closestChain.sort((a,b)=>a.val-b.val);
    // console.log(closestChain)

    // slice out and sort by key
    return closestChain.slice(0,k).map(a=>a.key).sort((a,b)=>a-b);
};

console.log(findClosestElements([1,2,3,4,5],4,3));      // [1,2,3,4]
console.log(findClosestElements([1,2,3,4,5],4,-1));     // [1,2,3,4]
console.log(findClosestElements([0,0,0,1,3,5,6,7,8,8],2,2));     // [1,3]



