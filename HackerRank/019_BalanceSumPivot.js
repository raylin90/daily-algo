// find pivot btw. the two equal part (not including i)
function balancedSum(arr) {
    let leftSum = 0, rightSum = 0;
    for(let i = 0; i < arr.length; i++) {

        for(let x = 0; x < i; x++) {
            leftSum+=arr[x];
        }

        for(let y = i+1; y < arr.length; y++) {
            rightSum+=arr[y];
        }

        // console.log("left", leftSum)
        // console.log("right", rightSum)
        if(leftSum === rightSum) {
            return i;
        } else {
            leftSum = 0, rightSum = 0;
        }

    }
    return false;
}
console.log(balancedSum([1, 2, 3]))
console.log(balancedSum([1, 2, 1]))





// find pivot btw. the two equal part (including i)
function balancedSum(arr) {
    let total = 0;
    arr.forEach(num => total += num)

    // console.log(total)
    let leftSum = 0;
    for(let i = 0; i < arr.length; i++) {
        leftSum += arr[i];
        if(leftSum === total - leftSum) {
            return i;
        }
    }
    return false;
}
console.log(balancedSum([1, 2, 3]))
console.log(balancedSum([1, 2, 1]))


function balancedSum2(arr) {

    for(let i = 0; i < arr.length; i++) {
        // keep trck of left and right sum;
        let leftSum = 0;
        let rightSum = 0;
        // check leftSum till i point
        for(let x = 0; x <= i; x++) {
            leftSum += arr[x];
        }
        // check rightSum from i+1 till the end of the array
        for(let y = i + 1; y < arr.length; y++) {
            rightSum += arr[y];
        }
        // when left equals to right, then we return i, we are at the pivot betw. x and y;
        if(leftSum === rightSum) return i;
    }
    return false;
}
console.log(balancedSum2([1, 2, 3]))
console.log(balancedSum2([1, 2, 1]))