

const maxOnes = (arr) => {
    let count = 1;
    let maxCount = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 1) {
            count++;
        } else {
            maxCount = Math.max(maxCount, count);
            count = 0;
        }
    }

    return maxCount;
}
console.log(maxOnes([1,1,0,1,1,1]));
// for loop (i)
// i and i+1
    // count++

    // re-set maxCount
    // count = 1