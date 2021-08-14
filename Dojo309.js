// what is recursion?
//  basically, when a functin calls itself within itself

// write a recursive function that, given a number, return the sum of the integers from one up to that given number
// ex: given 5 would return 1 + 2 + 3 + 4 + 5 == 15
// ex: given 2.5 would return 1 + 2 == 2

const recursiveSigma = num => {

    num = Math.floor(num);

    if(num == 1) {
        return 1;
    }

    return num + recursiveSigma(num - 1);
}

console.log(recursiveSigma(5));
console.log(recursiveSigma(2.5));





// write a recursive function that, given a number, returns the product of integers up to a given number
// ex: given 4 would return 1 * 2 * 3 * 4 = 24;
// ex: given 2.5 would return 1 * 2 = 2

const recursiveFactorial = num => {

    num = Math.floor(num);
    
    if(num == 1) {
        return 1;
    }

    return num * (recursiveFactorial(num - 1));


}

console.log(recursiveFactorial(4));
console.log(recursiveFactorial(2.5));