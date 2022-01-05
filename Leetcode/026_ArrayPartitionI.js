// https://leetcode.com/problems/array-partition-i/

/**
 * @param {number[]} nums
 * @return {number}

1. sort the array, and since we need to find the sum of a pair (add yo minimum element), then in sorted array, i+=2 with for loop
 */

var arrayPairSum = function(nums) {
    let sum = 0;
    nums.sort(function(a,b){return a-b});

    // console.log(nums);

    for(let i = 0; i < nums.length; i+=2) {
        sum += nums[i];
        // console.log(sum);s
    }
    return sum;
};
console.log(arrayPairSum([1,4,3,2]));        // 4
console.log(arrayPairSum([6,2,6,5,1,2]));        // 9




const partition = (arr, start,end) => {
    // console.log(arr[start]);
    // console.log(arr[end]);
    let pivot = arr[start];
    // console.log(pivot);
    let index = start;

    while(start < end) {
        while(arr[start] <= pivot) {
            start++;
        }
        while(arr[end] > pivot) {
            end--;
        }

        if(start < end) {
            [arr[start],arr[end]] = [arr[end],arr[start]];
        }
        console.log(arr);
    }
    [arr[index],arr[end]] = [arr[end],arr[index]];
    return end;
}
const quickSort = (arr,start,end) => {
    if(start < end) {
        let pIdx = partition(arr, start,end);
        // console.log(pIdx);
        quickSort(arr,start,pIdx);
        quickSort(arr,pIdx+1,end);
    }
    return arr;
}
let array = [100,6,2,7,5,1,3]
console.log(quickSort(array,0,array.length-1));