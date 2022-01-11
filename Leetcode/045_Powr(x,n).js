/**
 * @param {number} x
 * @param {number} n
 * @return {number}

rules:
n = even positive: x*x^n/2
n = odd positive: x*x^n/2 * x

n = negative: we convert x = 1/x, and n = positive 
 */

var myPow = function(x, n) {
    // edge case
    if(n === 0) return 1;
    if(n === 1) return x;
    if(x === 0) return 0;
    // console.log(x, n)

    // if n is negative, calculation will base on 1/x and positive n
    if(n < 0) {
        n = -n;
        x = 1/x;
    }
    return n % 2 === 0 ? myPow(x*x, n/2) : (x * myPow(x*x, Math.floor(n/2)))
};
console.log(myPow(2,10));
console.log(myPow(2.1,3));
console.log(myPow(2,-2));





var myPow = function(x, n) {
    // edge case
    if(n === 0) return 1;
    if(n === 1) return x;
    if(x === 0) return 0;
    // console.log(x, n)

    let num = n;
    let result = 1;

    // if exp is negative, convert to positive first, because calculation is same, except last step 1/result
    if(n < 0) {
        n = -n;
    }

    while(n > 0) {
        if(n % 2 === 0) {
            x *= x;
            n = n/2;
        } else {
            result *= x;
            n = n-1;
        }
    }
    if(num < 0) {
        return 1/result;
    }
    return result;
};
console.log(myPow(2,10));
console.log(myPow(2.1,3));
console.log(myPow(2,-2));




var myPow = function(x, n) {
    return Math.pow(x, n);
};
console.log(myPow(2,256));





var myPow = function(x, n) {
    return x ** n;
};
console.log(myPow(200,0));







var myPow = function(x, n) {
    
    let result = 1
    let num = n
    
    if (n < 0) {
        num = -1 * num
    }
    
    while (num > 0) {
        if (num % 2 == 0) {
            x = x * x;
            num = num / 2;
            
        } else {
            result = result * x;
            num = num - 1;
        }
    }
    if (n < 0) {
        return 1/result
    }
    return result;
};
console.log(myPow(2,10));
console.log(myPow(2.1,3));
console.log(myPow(2,-2));