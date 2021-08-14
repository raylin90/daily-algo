// balance point
// let x = [1, 2, 3, 4, 10]   1 + 2 + 3 + 4 = 10    return true;
// let y = [4, 7, 2, 3]   return false;

const balancePoint = arr => {
    // find the total first
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    let leftSum = 0;
    let rightSum;
    // loop again
    for(let j = 0; j < arr.length; j++) {
        // find the left sum and the remaining of the right sum
        leftSum += arr[j];
        rightSum = total - leftSum;
        // compare to see if it matches or not
        if(leftSum == rightSum) {
            return true;
        }

    }
    return false;
}

console.log(balancePoint([1, 2, 3, 4, 10]));
console.log(balancePoint([4, 7, 1, 3]));