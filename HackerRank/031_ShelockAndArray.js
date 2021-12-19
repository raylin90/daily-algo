/*
 * Complete the 'balancedSums' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function balancedSums(arr) {
    // leftSum and rightSum, to hold the total and compare later
    let leftSum = 0;
    let rightSum = 0;
    // outer loop to go throught the input array
    for(let i = 0; i < arr.length; i++) {
        // first inner loop to check the left part of sum, from 0 to index i
        for(let x = 0; x < i; x++) {
            leftSum += arr[x];
        }
        // second inner loop to check the right part of sum, from index i+1 till the end
        for(let y = i + 1; y < arr.length; y++) {
            rightSum += arr[y];
        }

        // console.log(leftSum)
        // console.log(rightSum)
        // compare left and right sum during each iteration, if we have match, then return Yes
        if(leftSum === rightSum) {
            return "YES";
        }

        // zero out the left and right sum
        leftSum = 0;
        rightSum = 0;
    }
    return "NO";
}
console.log(balancedSums([5,6,8,11]));
console.log(balancedSums([1]));
console.log(balancedSums([1,2,3]));
console.log(balancedSums([1,2,3,3]));





function balancedSums(arr) {
    if(arr.length === 1) return "YES";
    // find the total of the array first;
    let total = arr.reduce((a,b) => a+b);
    // console.log(total);

    // variable to store left sum
    let leftSum = 0;
    // loop throught the array
    for(let i = 0; i < arr.length; i++) {
        // add up he left sum
        leftSum += arr[i];
        // right sum will be total - leftSum
        let rightSum = total - leftSum - arr[i+1];
        if(leftSum === rightSum) {
            return "YES";
        }
    }
    return "NO";
}
console.log(balancedSums([5,6,8,11]));
console.log(balancedSums([1]));
console.log(balancedSums([1,2,3]));
console.log(balancedSums([1,2,3,3]));





function balancedSums(arr) {
    // leftSum variable
    let leftSum = 0;
    // find the total of the array first, and make it rightSum;
    let rightSum = arr.reduce((a,b) => a+b);

    // loop throught the array
    for(let i = 0; i < arr.length; i++) {
        // add up he left sum from current - 1 index; if unidentify, then assume 0;
        leftSum += (arr[i-1] || 0);

        // right sum will be total - leftSum
        rightSum = rightSum -= (arr[i]);
        if(leftSum === rightSum) {
            return "YES";
        }
    }
    return "NO";
}
console.log(balancedSums([5,6,8,11]));
console.log(balancedSums([1]));
console.log(balancedSums([1,2,3]));
console.log(balancedSums([1,2,3,3]));