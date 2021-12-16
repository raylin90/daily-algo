function aVeryBigSum(ar) {
    // sum variable to hold the total
    let sum = 0;
    // forEach loop the array
    ar.forEach(num => {
        // console.log(num);
        // each iteration, increase the sum total
        sum += num;
    })
    return sum;
}
console.log(aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]));