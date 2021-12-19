const coutingSort = arr => {
    // empty array to hold the output;
    let countingArray = [];
    // fill coutingArray with 0 for lenghth of array;
    for(let i = 0; i < arr.length; i++) {
        countingArray.push(0)
    }
    // console.log(countingArray);

    // run thought the arr input again, and increment the coutingArray index accordingly.
    // ex: we have three 1 in arr, then we put 3 at coutingArray index 1.
    for(let i = 0; i < arr.length; i++) {
        countingArray[arr[i]]++;
    }
    return countingArray;
}
console.log(coutingSort([1,0,3,1,3,1]));







const coutingSort = arr => {
    // create an array with length 100, fill with 0.
    let counts = Array(100).fill(0);
    // console.log(counts);
    // iterate the arr input, and increase the coount index accordingly;
    arr.forEach(item => {++counts[item];});
    return counts;
}
console.log(coutingSort([1,0,3,1,3,1]));








function countingSort(arr) {
    // create an empty array, with 100 index, fill with 0s
    let result = Array(100).fill(0);
    // console.log(result.length)

    // iterate the arr input, and store the occurance under result index;
    arr.forEach(num => result[num]++)
    return result;
}
console.log(countingSort([1,1,3,2,1]));