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
        return arr[0] === value ? true : false;
    }
    let midPoint = Math.floor(arr.length / 2);
    if(arr[midPoint] === value) {
        return true;
    } else if(arr[midPoint] < value) {
        // look right
        return binarySearch(arr.slice(midPoint+1, arr.length), value);
    } else {
        // look left
        return binarySearch(arr.slice(0, midPoint), value);
    }
}
console.log(binarySearch([3,7,9,16,22,28,34,38,55,61,76,88,89,100],2));


// You will be given a numerical array that has first been sorted, then rotated by an unknown amount. Find and return the minimum value in that array. Don’t use built-in functions (surprise!). Given the input array ["Gigli","Jay is cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"], you should return "Anna". Remember, do not linearly iterate the array!
const merger = (arr1, arr2) => {
    let result = [];
    while(arr1.length && arr2.length) {
        if(arr1[0] < arr2[0]) {
            result.push(arr1.shift());
        } else {
            result.push(arr2.shift());
        }
    }
    return result.concat(arr1).concat(arr2);
}
// console.log(merger([1,2,3,6,8,11,22,60],[4,9,10,30,100]));
const mergeSort = arr => {
    if(arr.length === 1) return arr;
    let midPoint = Math.floor(arr.length/2);
    const leftArr = arr.slice(0, midPoint);
    const rightArr = arr.slice(midPoint, arr.length);
    return merger(mergeSort(leftArr),mergeSort(rightArr));
}
// console.log(mergeSort([5,7,4,8,3,1,9]));
// console.log(mergeSort(["Gigli","Jay is cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"]));
const findMinSorted = arr => {
    // arr.sort();
    // return arr[0];
    arr = mergeSort(arr);
    return arr[0];
}
console.log(findMinSorted(["Gigli","Jay is cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"]));



// You will be given a very long string and a single character. Return whether that character is present in the string. Note: the characters in the string have been arranged so that the charCodeAt() values for each character are monotonically ascending from the beginning of the string to the back. Use the fact that the string is effectively sorted. Don’t use built-in functions. Note: characters may not be exactly as you might have considered ‘alphabetized’, but char.charCodeAt() works well. Example: if your function is given the inputs (" &-0379DEFXZ[abcz|", "6"), it should return false. If instead it is sent (" &-0379DEFXZ[abcz|", "c"), return true. Remember, don’t iterate the string linearly!
const stringBinarySearch = (string, char) => {
    if(string.length === 1) {
        return string[0] === char ? true : false;
    }
    let midPoint = Math.floor(string.length / 2);
    console.log(string[midPoint]);
//     console.log(midPoint);
//     console.log(string[midPoint]);
    if(string[midPoint] === char) {
        return true;
    } else if(string[midPoint] < char) {
        // right
        return stringBinarySearch(string.slice(midPoint+1, string.length), char);
    } else {
        // left
        return stringBinarySearch(string.slice(0, midPoint), char);
    }
}
console.log(stringBinarySearch("&-0379DEFXZ[abcz|", "6"));
console.log(stringBinarySearch("&-0379DEFXZ[abcz|", "c"));