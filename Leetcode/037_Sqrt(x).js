/**
 * @param {number} x
 * @return {number}

1. binary search, we are dealing with sorted numbers, so we can:
    1. set start = 0, end = x
    2. inside of while loop, find the mid point
    3. same logic, if mid * mid > x, check left
    4. if mid * mid < x, check right
    5. for some number, we wont have perfect match, like 8 is 2.82..., we return to floor of it
 */

var mySqrt = function(x) {
    // start, end pointers
    let start = 0;
    let end = x;
    let mid;

    while(start <= end) {
        // find mid number
        mid = Math.floor((start + end) / 2);

        console.log(start, mid, end);

        // we found, return mid
        if(mid * mid === x) {
            return mid;
        } else if(mid * mid > x) {
            // check left
            end = mid - 1;
        } else {
            // check right
            start = mid + 1;
        }
    }
    return end;
};
console.log(mySqrt(4));
// last loop of 9 will be start 3, mid 3, end, due to answer is 2.82..., last condition check with reduce end by 1, so return end;
console.log(mySqrt(8));