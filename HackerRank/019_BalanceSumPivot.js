function balancedSum(arr) {

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
console.log(balancedSum([1, 2, 3]))
console.log(balancedSum([1, 2, 1]))