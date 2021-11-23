// what is recursion?
//  basically, when a functin calls itself within itself

// write a recursive function that, given a number, return the sum of the integers from one up to that given number
// ex: given 5 would return 1 + 2 + 3 + 4 + 5 == 15
// ex: given 2.5 would return 1 + 2 == 3

const recursiveSum = num => {
    num = Math.floor(num);
    // base case:
    if(num === 1) {
        return 1;
    }
    return num + recursiveSum(num - 1);
}
console.log(recursiveSum(5))
console.log(recursiveSum(2.5))




// write a recursive function that, given a number, returns the product of integers up to a given number
// ex: given 4 would return 1 * 2 * 3 * 4 = 24;
// ex: given 2.5 would return 1 * 2 = 2
const recursiveFactorial = num => {
    num = Math.floor(num);
    // base case:
    if(num === 1) {
        return 1;
    }
    if(num === 0) {
        return 0;
    }
    return num * recursiveFactorial(num - 1);
}
console.log(recursiveFactorial(4))
console.log(recursiveFactorial(2.5))
console.log(recursiveFactorial(0))