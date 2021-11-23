//Insertion Sort: left side sorted, right side unsorted; search right side and insert the value in left side;
// Given an array of numbers, sort the numbers by placing values into their correct position at the front (sorted part) of the array
// Ex:
// [9,5,2,7,1] -> [5,9,2,7,1] -> [2,5,9,7,1] -> [2,5,7,9,1] -> [1,2,5,7,9]

// edge case, if arr.length === 1, and it's sorted
// first loop start at 1 because for insert sort, we assume first element is sorted;
    // compare if arr[i] < arr[i-1], if yes, we need to performance some kind of swap
        // inner loop backward through the sorted part, j = i; j > 0; j--
            // if arr[j] < arr[j-1]
                // we swap j and j -1;

const insertSort = arr => {

    if(arr.length === 1) return arr;

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i - 1]) {
            // console.log("i is: ", arr[i])
            for(let j = i; j > 0; j--) {
                if(arr[j] < arr[j-1]) {
                    // console.log("j is: ", arr[j], " and j-1: ", arr[j-1])
                    [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
                }
            }
        }
    }
    return arr;
}
console.log(insertSort([5,7,4,8,3,1]));