const partition = (array, start, end) => {
    let pivot = array[start];
    let index = start;
    while(start < end) {
        while(array[start] <= pivot) {
            start++;
        }
        while(array[end] > pivot) {
            end--;
        }
        if(start < end) {
            [array[start], array[end]] = [array[end], array[start]];
        }
    }
    [array[end], array[index]] = [array[index], array[end]];
    return end;
}
// let arr = [7,1,6,5,8,2,3];
// console.log(partition(arr, 0, arr.length-1));
// let arr2 = [5,1,6,3,7,4];
// console.log(partition(arr2, 0, arr2.length-1));



const quickSort = (array, start, end) => {
    if(start < end) {
        pIndex = partition(array, start, end)
        quickSort(array, start, pIndex);
        quickSort(array, pIndex+1, end)
    }
    return array
}
let arr = [7,1,6,5,8,2,3];
console.log(quickSort(arr, 0, arr.length-1));
let arr2 = [5,1,6,3,7,4];
console.log(quickSort(arr2, 0, arr2.length-1));