//Bubble Sort: move the biggest value to back
// Given an array of numbers, sort the numbers by swapping adjacent values that are in the wrong order
// Ex:
// [5,9,2,7,6] -> [5,2,7,6,9] -> [2,5,7,6,9] -> [2,5,6,7,9]
// Image: https://miro.medium.com/max/776/1*7QsZkfrRGhAu5yxxeDdzsA.png


// APPROACH 1:
// first loop to run throught the array (i)
    // second loop for inner comparison (j)
        // if arr[j] > arr[j+1], we need to move the bigger number to right
            // we swap;
const bubbleSort = arr => {
    for(let i = 0; i < arr.length ; i++) {
        for(let j = 0; j < arr.length; j++) {
            // console.log(arr[j])
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(bubbleSort([7,10,5,4,1,8]));



// APPROACH 2:
// first loop to run throught the array (i)
    // any time we encouter arr[i] > arr[i+1], we need to swap;
    // once swapped, we recursive call function again, so it can run at begining;
const bubbleSort2 = arr => {
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i + 1]) {
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            return bubbleSort2(arr);
        }
    }
    return arr;
}
console.log(bubbleSort2([7,10,5,4,1,8]));