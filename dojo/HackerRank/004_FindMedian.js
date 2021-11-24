const findTheMedian = arr => {
    // sort the array
    arr = arr.sort(function(a,b){return a-b});
    // console.log(arr);
    // return the middgle element;
    return arr[Math.floor(arr.length / 2)];
}
console.log(findTheMedian([5,3,1,2,4]));
console.log(findTheMedian([0,1,2,4,6,5,300]));
console.log(findTheMedian([0,1,2,3,4,5,6]));
console.log(findTheMedian([1,3,3,6,7,8,9]));









const merge = (arr1, arr2) => {
    let result = [];
    while(arr1.length && arr2.length) {
        if(arr1[0] < arr2[0]) {
            result.push(arr1.shift());
        } else {
            result.push(arr2.shift());
        }
    }
    return result.concat(arr1).concat(arr2);
}
const mergeSort = arr => {
    if(arr.length <= 1) return arr;
    const midPoint = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, midPoint);
    const rightArr = arr.slice(midPoint, arr.length);
    // console.log(leftArr, rightArr)
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
// console.log(mergeSort([5,7,4,8,3,1,9]));

const findTheMedian2 = arr => {
    // sort the array
    arr = mergeSort(arr)
    // console.log(arr);
    // return the middgle element;
    return arr[Math.floor(arr.length / 2)];
}
console.log(findTheMedian2([5,3,1,2,4]));
console.log(findTheMedian2([0,1,2,4,6,5,300]));
console.log(findTheMedian2([0,1,2,3,4,5,6]));
console.log(findTheMedian2([1,3,3,6,7,8,9]));
