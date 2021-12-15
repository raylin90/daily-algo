function miniMaxSum(arr) {
    // get the total of entire array;
    let total = 0;
    for(const value of arr) {
        total += value;
    }
    // console.log(total)

    let minSum = total;
    let maxSum = 0;
    // loop through the entire array again and subtract each arr[i], so we have 4 out of 5 sum;
    for(let i = 0; i < arr.length; i++) {
        // set minSum and maxSum base on comparison
        if((total - arr[i]) > maxSum) {
            maxSum = total - arr[i];
        }
        if(total - arr[i] < minSum) {
            minSum = total - arr[i];
        }
    }
    console.log(minSum,maxSum)
}
console.log(miniMaxSum([1,3,5,7,9]));
console.log(miniMaxSum([1,2,3,4,5]));





function miniMaxSum(arr) {
    // call back function to add everything from array;
    let sum = arr.reduce((a, b) => a+b)
    // console.log(sum);
    // console.log(Math.min(...arr));
    // console.log(Math.max(...arr));
    
    // use Math.min and Math.max to find the min and max from the arr, and subtract from sum
    // max = total - min of the array;
    // min = total - max of the array;
    let max = sum - Math.min(...arr);
    let min = sum - Math.max(...arr);
    console.log(min, max)
}
miniMaxSum([1,2,3,4,5]);