// https://leetcode.com/explore/learn/card/hash-table/183/combination-with-other-algorithms/1131/


/**
 * @param {number} n
 * @return {boolean}
 */

// can pass most of cases, EXCEPT 1111111
var isHappy = function(n) {
    

    n = n.toString();
    if(n.length === 1) {
        n = n+"0";
    }

    while(n.length > 1) {
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
        if (n == 7 )return true
    }

    return n == 1 ? true : false;
};
console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(7));
console.log(isHappy(1111111));