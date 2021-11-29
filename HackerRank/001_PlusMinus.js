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