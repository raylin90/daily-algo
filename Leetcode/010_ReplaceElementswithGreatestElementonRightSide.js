// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

/**
 * @param {number[]} arr
 * @return {number[]}

1. for loop backward, becase the last number will consider the largest
    a. create tempArr to hold a copy of the input
    b. each iteration backward, to compare input arr and temp arr's i+1 element
    c. set the inputArr[i] = Math.max(arr[i+1],tempArr[i+1]);
2. nested loop, first loop to keep track of i element, inner loop to get the biggest value at the right
3. first loop to keep track of i element, use Math.max to find rest of max element (temp Array of arr.slice)
 */

var replaceElements = function(arr) {
    // make a copy of the input array
    let tempArr = [...arr];

    for(let i = arr.length - 2; i >= 0; i--) {
        // console.log(Math.max(arr[i+1], tempArr[i+1]));
        arr[i] = Math.max(arr[i+1], tempArr[i+1]);
    }
    arr[arr.length - 1] = -1;
    return arr;
};
console.log(replaceElements([17,18,5,4,6,1]));      // [18,6,6,6,1,-1]





var replaceElements = function(arr) {
    // first loop to keep track of current element
    for(let i = 0; i < arr.length; i++) {
        // inner loop to check maxNum, since contraint is all elment < 1, and replace last idx as -1. we can set max as -1
        let maxNum = -1;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] > maxNum) {
                maxNum = arr[j];
            }
        }
        // replace i element
        arr[i] = maxNum;
    }
    return arr;
};
console.log(replaceElements([17,18,5,4,6,1]));      // [18,6,6,6,1,-1]





var replaceElements = function(arr) {
    // temp array as copy of input arr
    let tempArr = [...arr];

    // first loop to keep track of current element
    for(let i = 0; i < arr.length-1; i++) {
        // every iteration, remove first temp arr element
        tempArr.shift();
        // inner loop to check maxNum, since contraint is all elment < 1, and replace last idx as -1. we can set max as -1
        let maxNum = Math.max(...tempArr);

        // replace i element
        arr[i] = maxNum;
    }
    arr[arr.length-1] = -1;
    return arr;
};
console.log(replaceElements([17,18,5,4,6,1]));      // [18,6,6,6,1,-1]





var replaceElements = function(arr) {
    // first loop to keep track of current element
    for(let i = 0; i < arr.length-1; i++) {
        // inner loop to check maxNum, since contraint is all elment < 1, and replace last idx as -1. we can set max as -1
        let maxNum = Math.max(...arr.slice(i+1));

        // replace i element
        arr[i] = maxNum;
    }
    arr[arr.length-1] = -1;
    return arr;
};
console.log(replaceElements([17,18,5,4,6,1]));      // [18,6,6,6,1,-1]