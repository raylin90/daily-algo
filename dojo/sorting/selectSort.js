//Selection Sort: move the smallest value to front
// Given an array of numbers, sort the numbers by finding the smallest number in the array and moving it to the beginning. Then iterate through everything except the first number, which is now sorted, and find the next smallest value and move it to index 1. Keep doing this until all values are sorted. 
// Ex:
// [7,5,2,8,4] -> [2,7,5,8,4] -> [2,4,7,5,8] -> [2,4,5,7,8]
// Image: https://www.w3resource.com/w3r_images/selection-short.png



// APPROACH 1:
// edge case: if length === 1, then it's sorted;
// first loop to run through the array (i);
    // we set the min Index as i;
        // second loop for inner comparison (j);
            // find the min Index of the inner array (j), when we found it, we set min Index as j;
    // once inner loop is done, we have found the minIndex, we can performance swap;
    // back to first loop again;

const selectSort = arr => {

    if(arr.length === 1) return arr;

    for(let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}
console.log(selectSort([7,10,5,4,1,8]));
console.log(selectSort([7]));