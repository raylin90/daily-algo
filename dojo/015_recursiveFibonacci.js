// recursive fibonacci
// given a number, add the collective sum up to that number (using Fibonacci sequence)

// F0  F1  F2  F3  F4  F5  F6  F7  F8  F9  F10
//  0   1   1   2   3   5   8  13  21  34  55  
const recursiveFibonacci = num => {
    // base
    if(num === 0) {
        return 0;
    }
    if(num === 1) {
        return 1;
    }
    return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
}
console.log(recursiveFibonacci(7))
console.log(recursiveFibonacci(10))