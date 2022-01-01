function greaterThanK(arr, k) {
    let count = 0;

    // nested loop to run through every possible occurance
    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        for(let j = i+1; j < arr.length; j++) {
            // check if those two occurances are divisible by k, if yes, then increase count by 1
            if((arr[i] + arr[j]) % k == 0) {
                count++;
                // console.log("j", arr[j]);
                // console.log("i", arr[i]);
                // console.log("count ", count)
            }
        }
    }
    return count;
}
console.log(greaterThanK([1,2,3,4,5],3))      // 4





function greaterThanK2(a, k) {
    let pairs = 0;
    const frequency = new Map();

    for(let x of a) {
        const remainder = x % k;
        const oldFrequency = frequency.get(remainder) || 0;
        frequency.set(remainder, oldFrequency+1);
    }
    console.log(frequency);

    for(let [key, value] of frequency.entries()) {
        if(key === 0 || key * 2 === k) {
            pairs += value * (value - 1);
        } else {
            pairs += value * (frequency.get(k - key) || 0);
        }
    }
    return pairs / 2;
}
console.log(greaterThanK2([1,2,3,4,5],4))      