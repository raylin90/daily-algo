const findTheMedian = arr => {
    // sort the array
    arr = arr.sort(function(a,b){return a-b});
    // console.log(arr);
    // return the middle element;
    return arr[Math.floor(arr.length / 2)];
}
console.log(findTheMedian([5,3,1,2,4]));
console.log(findTheMedian([0,1,2,4,6,5,300]));
console.log(findTheMedian([0,1,2,3,4,5,6]));
console.log(findTheMedian([1,3,3,6,7,8,9]));








// merge sort approach
const merge = (arr1, arr2) => {
    // new array to hold the output;
    let result = [];
    // if both array has length left
    while(arr1.length && arr2.length) {
        // we compare the first index value
        if(arr1[0] < arr2[0]) {
            // push accordingly by shift the first value;
            result.push(arr1.shift());
        } else {
            result.push(arr2.shift());
        }
    }
    return result.concat(arr1).concat(arr2);
}
const mergeSort = arr => {
    // recursion stop case
    if(arr.length <= 1) return arr;
    // find the middle index
    const midPoint = Math.floor(arr.length / 2);
    // split the array into left and right half
    const leftArr = arr.slice(0, midPoint);
    const rightArr = arr.slice(midPoint, arr.length);
    // console.log(leftArr, rightArr)
    // recursively call mergeSort, to it can split into each length = 1(tree), then we merge together
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
// console.log(mergeSort([5,7,4,8,3,1,9]));


function findMedian(arr) {
    arr = mergeSort(arr);
    console.log(arr);
    let midPoint = Math.floor(arr.length/2);
    return arr[midPoint];
}

console.log(findMedian([5,7,4,8,3,1,9]));