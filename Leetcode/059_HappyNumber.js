// https://leetcode.com/explore/learn/card/hash-table/183/combination-with-other-algorithms/1131/


/**
 * @param {number} n
 * @return {boolean}
 */

// can pass most of cases, EXCEPT 1111111
var isHappy = function(n) {
    
    // since out while loop is based on length, we need to convert the input to string first
    n = n.toString();

    // edge case if the n is single digit number, we still want to process and check
    if(n.length === 1) {
        n = n+"0";
    }

    while(n.length > 1) {
        // split input array, sum each number up, and conver the sum to n, so we can continue our loop till length < 1
        let arr = n.split("");
        let sum = 0;
        // console.log(arr);

        for(let i = 0; i < arr.length; i++) {
            let num = parseInt(arr[i]);
            sum += Math.pow(num, 2);
        }
        n = sum.toString();
        // console.log(typeof(n));
        // console.log(n);

        // edge caes, like input 1111111
        if (n == 7 )return true
    }

    return n == 1 ? true : false;
};
console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(7));
console.log(isHappy(1111111));





var isHappy = function (n) {
    let memorySet = new Set()

    while (true) {
        n = sumOfSquareOfDigits(n)
        console.log(n);
        if (n === 1) return true
        if (memorySet.has(n)) return false

        memorySet.add(n)
        console.log(memorySet);
    }
}

const sumOfSquareOfDigits = num => {
    let sum = 0
    while (num) {
        sum += (num % 10) ** 2
        console.log("sum", sum)
        num = Math.floor(num / 10)
        console.log("num", num)
    }
    return sum
}
console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(7));
console.log(isHappy(1111111));
