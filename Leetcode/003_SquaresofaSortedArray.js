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