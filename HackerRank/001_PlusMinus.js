function plusMinus(arr) {
    // counter to count how many zero, positive and negative
    let zeroCount = 0;
    let positiveCount = 0;
    let negativeCount = 0;
    // iterate the array;
    for(let i = 0; i < arr.length; i++) {
        // if element is = to 0, increase zero count
        if(arr[i] === 0) {
            zeroCount++;
        // if element is > 0, increase positive count
        } else if(arr[i] > 0) {
            positiveCount++;
        // rest will be negative count
        } else {
            negativeCount++;
        }
    }
    // find the length to calculate the avg;
    let length = arr.length;
    // find the average, and to the 6th decimal
    console.log((positiveCount/length).toFixed(6));
    console.log((negativeCount/length).toFixed(6));
    console.log((zeroCount/length).toFixed(6));
}
plusMinus([-4, 3, -9, 0, 4, 1]);



function plusMinus(arr) {
    // object to count positive/negative/zero during each iteration
    let obj = {
        positive : 0,
        negative : 0,
        zero: 0,
    }
    // since idx does not matter, we use for...of loop to check each iteration
    for(const value of arr) {
        // increase obj key accordingly base on each iteration
        if(value === 0) {
            obj.zero ++;
        } else if(value > 0) {
            obj.positive ++;
        } else {
            obj.negative ++;
        }
    }
    // console.log(obj);
    // get array length, so we can calculate the ratio
    let length = arr.length;
    console.log(obj.positive / length);
    console.log(obj.negative / length);
    console.log(obj.zero / length);
}
console.log(plusMinus([1,1,0,-1,-1]))