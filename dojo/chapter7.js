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



// Given a sorted array and a value, return whether the array contains that value. Do not sequentially iterate the array. Instead, ‘divide and conquer’, taking advantage of the fact that the array is sorted. As always, only use built-in functions that you are prepared to recreate (write yourself) on demand!
const binarySearch = (arr, value) => {
    if(arr.length === 1) {
        return (arr[0] === value) ? true : false;
    }
    let midPoint = Math.floor((arr.length / 2));
    if(arr[midPoint] === value) {
        return true;
    } else if(arr[midPoint] < value) {
        // look right
        console.log(arr.slice(midPoint+1, arr.length))
        return binarySearch(arr.slice(midPoint+1, arr.length),value);
    } else {
        // look left
        console.log(arr.slice(0, midPoint))
        return binarySearch(arr.slice(0, midPoint),value);
    }

}
console.log(binarySearch([2,4,7,9,12,16,9,25,47,49,57,59,60,64,78,99,101,110],2));