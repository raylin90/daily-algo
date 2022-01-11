// https://leetcode.com/problems/valid-perfect-square/

/**
 * @param {number} num
 * @return {boolean}
 */


var isPerfectSquare = function(num) {
    
    for(let i = 1; i <= num; i++) {
        if(i*i === num) {
            return true;
        }
    }
    return false;
};
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));





var isPerfectSquare = function(num) {
    
    let start = 0, end = num;

    while(start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        if(mid * mid === num) {
            return true;
        } else if(mid * mid > num) {
            // to large, move left
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
};
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));