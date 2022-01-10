// // https://leetcode.com/problems/find-k-closest-elements/

// /**
//  * @param {number[]} arr
//  * @param {number} k
//  * @param {number} x
//  * @return {number[]}
//  */


/*
case 1: x - A[mid] < A[mid + k] - x, need to move window go left
-------x----A[mid]-----------------A[mid + k]----------

case 2: x - A[mid] < A[mid + k] - x, need to move window go left again
-------A[mid]----x-----------------A[mid + k]----------

case 3: x - A[mid] > A[mid + k] - x, need to move window go right
-------A[mid]------------------x---A[mid + k]----------

case 4: x - A[mid] > A[mid + k] - x, need to move window go right
-------A[mid]---------------------A[mid + k]----x------
*/

var findClosestElements = function(arr, k, x) {
    let start = 0, end = arr.length - k;

    while(start < end) {
        // find midPoint
        let midPoint = Math.floor((start+end)/2);

        // console.log(start, midPoint, end);

        // compare the midPoint element with midPoint + k element, if see which is farer than x
        if(x - arr[midPoint] > arr[midPoint + k] - x) {
            // move window to right
            start = midPoint + 1;
            // move windwo to left
        } else {
            end = midPoint;
        }
    }

    // once done, we will have start === end, which is our left index
    let result = [];
    for(let i = start; i < start+k; i++) {
        result.push(arr[i]);
    }
    return result;
};
console.log(findClosestElements([1,2,3,4,5],4,3));      // [1,2,3,4]
console.log(findClosestElements([1,2,3,4,5],4,-1));     // [1,2,3,4]
console.log(findClosestElements([0,0,0,1,3,5,6,7,8,8],2,2));     // [1,3]





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