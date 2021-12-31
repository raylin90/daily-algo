// https://leetcode.com/problems/valid-mountain-array/

/*
Recall that arr is a mountain array if and only if:

    1. arr.length >= 3
    2. There exists some i with 0 < i < arr.length - 1 such that:
        a. arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
        b. arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
*/


/**
 * @param {number[]} arr
 * @return {boolean}

1. two pointer method like partition, keep track of start and end element
        a. once finishd looping, start should === end, then we have a mo,untain(start !== 0, and end !== arr.length -1, because those two needs to move)

2. find the max index
        a. if max index = 0, or = arr.length - 1, then false
        b. if first max index ! === last max index, then false
        c. for loop, before maxindex, increasing
        d. after maxindex, decreasing
 */


var validMountainArray = function(arr) {

    if(arr.length < 3) return false;

    // keep track of start and end index element
    let start = 0;
    let end = arr.length - 1;

    // start to compare the start with start + 1, and end with end - 1
    while(start < end) {
        if(arr[start] < arr[start+1]) {
            start++;
        } else if(arr[end] < arr[end - 1]) {
            end--;
        } else {
            break;
        }
    }

    // and th end, start and end should meet, and start and end need to be different than 0 and arr.length - 1
    if(start === end && start !== 0 && end !== arr.length-1) {
        return true;
    } else {
        return false;
    }
};
console.log(validMountainArray([0,2,3,4,5,2,1,0]));     // ture
console.log(validMountainArray([2,1]));     // false
console.log(validMountainArray([0,2,3,3,5,2,1,0]));     // false
console.log(validMountainArray([3,5,5]));     // false
console.log(validMountainArray([0,3,2,1]));     // true
console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9]));     // false






var validMountainArray = function(arr) {

    if(arr.length < 3) return false;

    let breakIdx = arr.indexOf(Math.max(...arr));
    if( breakIdx === 0 || 
        breakIdx === arr.length - 1 || 
        arr.indexOf(Math.max(...arr)) !== arr.lastIndexOf(Math.max(...arr))) return false;


    for(let i = 0; i < arr.length; i++) {
        if(i < breakIdx & arr[i] >= arr[i+1]) {
            return false;
        } else if(i > breakIdx && arr[i] <= arr[i+1]) {
            return false;
        }
    } 
    return true;
}
console.log(validMountainArray([0,2,3,4,5,2,1,0]));     // ture
console.log(validMountainArray([2,1]));     // false
console.log(validMountainArray([0,2,3,3,5,2,1,0]));     // false
console.log(validMountainArray([3,5,5]));     // false
console.log(validMountainArray([0,3,2,1]));     // true
console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9]));     // false