// https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */


const bubbleSort = arr => {
    // bubble sort
    for(let j = 0; j < arr.length; j++) {
        // compare j and j+1, if >, then we need to swap
        if(arr[j] > arr[j+1]) {
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            // repeat the process till end
            return bubbleSort(arr);
        }
    }
    return arr;
}

var sortedSquares = function(nums) {
    
    // sqr each element, and store back into array
    for(let i = 0; i < nums.length; i++) {
        nums[i] = Math.pow(nums[i],2);
    }

    // lazy sort by a call back function
    // return nums.sort(function(a,b){return a-b});

    // calling bubble sort
    return bubbleSort(nums);
};
console.log(sortedSquares([-4,-1,0,3,10]));     // [0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11]));     // [4,9,9,49,121]





var sortedSquares = function(nums) {
    // new array to hold output
    let output = [];
    let newIdx = nums.length - 1;
    // two pointer to track of start and end element
    let start = 0;
    let end = nums.length - 1;
    // we need <= because if we only do <, we will missing [0] element as empty
    while(start <= end) {
        // square both element
        let squaredStart = Math.pow(nums[start], 2);
        let squaredEnd = Math.pow(nums[end], 2);
        // console.log(squaredStart, squaredEnd)

        // find the largest number after squre, and set the last index of output to that largest number
        if(squaredStart >= squaredEnd) {
            output[newIdx] = squaredStart;
            start++;
        } else {
            output[newIdx] = squaredEnd;
            end--;
        }
        newIdx--;
    }
    return output;
};

console.log(sortedSquares([-4,-1,0,3,10]));     // [0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11]));     // [4,9,9,49,121]