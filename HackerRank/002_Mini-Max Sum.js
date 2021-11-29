function miniMaxSum(arr) {
    // sum variable to store total; min to store min value, and max to store max value;
    let sum = 0;
    // iterate the array list
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    // console.log(sum)
    let min = sum;
    let max = 0;
    // find max
    for(let i = 0; i < arr.length; i++) {
        // console.log(sum - arr[i])
        if(sum - arr[i] > max) {
            max = sum - arr[i];
        }
        if(sum - arr[i] < min) {
            min = sum - arr[i];
        }
    }
    console.log(min, max);
}
miniMaxSum([1,2,3,4,5]);





function miniMaxSum(arr) {
    // call back function to add everything from array;
    let sum = arr.reduce((a, b) => a+b)

    // use Math.min and Math.max to find the min and max from the arr, and subtract from sum
    let max = sum - Math.min(...arr);
    let min = sum - Math.max(...arr);
    console.log(min, max)
}
miniMaxSum([1,2,3,4,5]);