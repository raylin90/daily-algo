// (Warm-up) Always run through some quick algorithm problems before any coding interview, to get yourself warmed up. How about this one: return the average value of an array of unsorted numbers.
const sumUp = arr => {
    if(arr.length === 0) {
        return 0;
    }
    return arr.shift() + sumUp(arr);
}
const getAverage = arr => {
    let length = arr.length;
    let total = sumUp(arr);
    return total/length;
}
console.log(getAverage([1,2,3,4,10]));



// Write a function that returns whether the given array has a balance point between indices, where one side’s sum is equal to the other’s. Example: [1,2,3,4,10] → true (between indices 3 & 4), but [1,2,4,2,1] → false.
const balancePoint = arr => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    // console.log(sum);
    let leftSum = 0;
    for(let i = 0; i < arr.length; i++) {
        leftSum += arr[i];
        if(leftSum === sum - leftSum) {
            return true;
        }
    }
    return false;
}
console.log(balancePoint([1,2,3,4,10]));
console.log(balancePoint([1,2,4,2,1]));



// Here, a balance point is on an index, not between indices. Return the balance index where sums are equal on either side (exclude its own value). Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2, but [9,9] → -1.
const BalanceIndex = arr => {
    for(let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for(let x = 0; x < i; x++) {
            leftSum += arr[x];
        }
        // console.log(leftSum);
        for(let y = i+1; y < arr.length; y++) {
            rightSum += arr[y];
        }
        // console.log(rightSum);
        if(leftSum === rightSum) {
            return i;
        }
    }
    return -1;
}
console.log(BalanceIndex([-2,5,7,0,3]));
console.log(BalanceIndex([9,9]));
console.log(BalanceIndex([9,1,9]));