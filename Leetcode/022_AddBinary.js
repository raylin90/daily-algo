// https://leetcode.com/problems/add-binary/

// Given two binary strings a and b, return their sum as a binary string.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}

1. use BigInt and parseInt to convert the string into binary, sum them up, and use .toString(2), to convert back to string

2. for loop each indices, and sum them up with carry
    a. carry = Math.floor(sum / 2);
    b. answer.unshift(sum % 2);
 */

var addBinary = function(a, b) {
    console.log(BigInt(`0b${a}`))
    console.log(BigInt(`0b${b}`))

    const [num1, num2] = [BigInt(`0b${a}`), BigInt(`0b${b}`)]
    return (num1 + num2).toString(2)
};
console.log(addBinary("11","1"));


var addBinary = function(a, b) {

    return (parseInt(a,2) + parseInt(b,2)).toString(2);
};
console.log(addBinary("11","1"));





const addBinary = (a, b) => {
    let aArray = a.split("").reverse();
    let bArray = b.split("").reverse();
    // console.log(aArray, bArray)

    let carry = 0;
    let answer = [];
    let idx = 0;
    let length = a.length > b.length ? a.length : b.length;

    while(idx < length) {
        const x = aArray[idx] ? parseInt(aArray[idx]) : 0;
        const y = bArray[idx] ? parseInt(bArray[idx]) : 0;

        let sum = x + y + carry;
        // console.log(x, " and ", y, " and ", carry, " and ", sum)

        carry = Math.floor(sum / 2);
        answer.unshift(sum % 2);

        idx++;
    }

    if(carry > 0) answer.unshift(carry);
    return answer.join("");
};
console.log(addBinary("1010","1011"));