function birthdayCakeCandles(candles) {
    // Write your code here
    // obj to count the candles height occurance
    let obj = {};
    // for loop the array list, and count the candle occurance
    for(const num of candles) {
        // if obj[key] does not have
        if(!obj[num]) {
            // set obj[key] = 1
            obj[num] = 1;
        } else {
            // else
                // increase the key by 1
            obj[num] ++;
        }
    }
    // once done, we have an obj of each occurance, we need to find the larges key and it's value
    // console.log(obj);

    // set maxHeight to store the max key
    let maxHeight = 0;
    // for in loop to run though the obj,
    for(const key in obj) {
        // console.log(key);
        if(key > maxHeight) {
            maxHeight = key;
        }
    }

    // once loop it done, we have the max key, then we return key's value
    // console.log(maxHeight);
    return obj[maxHeight];
}
console.log(birthdayCakeCandles([4,4,1,3]));    // 2
console.log(birthdayCakeCandles([3,2,1,3]));    // 2
console.log(birthdayCakeCandles([3,3,3,3,3,3,3,3,3]));    // 2





function birthdayCakeCandles(candles) {
    // find max value from the array;
    let maxValue = Math.max(...candles);
    // console.log(maxValue);
    // use filter function to filter out the element === maxValue
    const result = candles.filter(num => num === maxValue);
    // console.log(result)
    // return the length of it
    return result.length;
}
console.log(birthdayCakeCandles([4,4,1,3]));    // 2
console.log(birthdayCakeCandles([3,2,1,3]));    // 2
console.log(birthdayCakeCandles([3,3,3,3,3,3,3,3,3]));    // 9