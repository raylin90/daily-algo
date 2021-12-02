//  Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).
const sigma = num => {
    if(num === 1) {
        return 1;
    }
    return num + sigma(num - 1);
}
console.log(sigma(5));



// Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). For example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).
const factorial = num => {
    if(num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
console.log(factorial(5));



// Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and asterisks ('*'), sometimes called stars. You should print the given number of asterisks consecutively. Depending on which function is called, those stars should be left-justified (first star would be very first char in the text field), or right-justified (last star would be very last char in the text field, with potentially some number of spaces at beginning of text field before the block of stars start), or centered in the 75-character text field (with same number of spaces on either side of the block of stars, plus/minus one).
    // Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.
    // Write a function drawRightStars(num) that prints 75 characters total. Stars should build from right side. The last num characters should be asterisks; the other 75 should be spaces.
    // Write function drawCenteredStars(num) that prints 75 characters total. The stars should be centered in the 75. The middle num characters should be asterisks; the rest of the 75 spaces.
const drawLeftStars = num => {
    if(num < 1 || num > 75) return "invalid";
    let output = "";
    let space = 75 - num;
    for(let i = 0; i < num; i++) {
        output += "*";
    }
    for(let i = 0; i < space; i++) {
        output += ".";
    }
    console.log(output.length);
    return output;
}
console.log(drawLeftStars(2))

const drawRightStars = num => {
    if(num < 1 || num > 75) return "invalid";
    let output = "";
    let space = 75 - num;
    for(let i = 0; i < space; i++) {
        output += ".";
    }
    for(let i = 0; i < num; i++) {
        output += "*";
    }
    console.log(output.length);
    return output;
}
console.log(drawRightStars(22))

const drawCenteredStars = num => {
    if(num < 1 || num > 75) return "invalid";
    let output = "";
    let leftSpace = Math.floor((75 - num) / 2);
    let rightSpace = 75 - leftSpace - num;

    for(let i = 0; i < leftSpace; i++) {
        output += ".";
    }
    for(let i = 0; i < num; i++) {
        output += "*";
    }
    for(let i = 0; i < rightSpace; i++) {
        output += ".";
    }
    console.log(output.length);
    return output;
}
console.log(drawCenteredStars(22))



// Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.
const threesFives = () => {
    let sum = 0;
    for(let i = 100; i <= 4000000; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            console.log(i);
            sum += i;
            console.log(sum);
        }
    }
    return sum;
}

console.log(threesFives());



// Create betterThreesFives(start,end) that allows you to enter arbitrary start and end values for your range. Think of threesFives()as betterThreesFives(100,4000000).
const betterThreesFives = (start, end) => {
    let sum = 0;
    for(let i = start; i <= end; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            console.log(i);
            sum += i;
            console.log(sum);
        }
    }
    return sum;
}
console.log(betterThreesFives(2,100))



// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). Accept a number of American cents, compute and print how to represent that amount with smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).
const generateCoinChange = cents => {
    let dollar = cents;
    let q = 0;
    let d = 0;
    let n = 0;
    let p = 0;
    if(dollar > 25) {
        q = Math.floor(dollar / 25);
        dollar = dollar % 25;
    }
    if(dollar > 10) {
        d = Math.floor(dollar / 10);
        dollar = dollar % 10;
    }
    if(dollar > 5) {
        n = Math.floor(dollar / 5);
        dollar = dollar % 5;
    }
    p = dollar;
    return `total changes are: ${q} quarters, ${d} dimes, ${n} nickels, ${p} pennies`;
}
console.log(generateCoinChange(94));


/*
Create a function messyMath(num) that will return the following sum: add all integers from 0 up to the given num, except for the following special cases of our count value:
    1. If current count (not num) is evenly divisible by 3, don’t add to sum; skip to the
    next count;
    2. Otherwise, if current count is evenly divisible by 7, include it twice in sum
    instead of once;
    3. Regardless of the above, if current count is exactly 1/3 of num, return -1
    immediately.
For example, if given num is 4, return 7. If given num is 8, return 34. If given num is 15, return -1.
*/
const messyMath = num => {
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        if(i === num/ 3) {
            return -1;
        }
        if(i % 3 === 0) {
            continue;
        }
        if(i % 7 === 0) {
            sum += i + i;
            continue;
        }
        sum += i;
    }
    return sum;
}
console.log(messyMath(4));
console.log(messyMath(8));
console.log(messyMath(15));



// Write a function that console.logs the number 1, then "chick", then "boom", then "chick", then 2, then "chick", "boom", "chick" – continuing the same cycle for each number up to (including) 12.
const chickBoom = () => {
    for(let i = 1; i <= 12; i++) {
        console.log(i);
        console.log("chick");
        console.log("boom");
        console.log("chick");
    }
}
chickBoom();



/* 
Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc). Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.
*/
const fibonacci = num => {
    if(num === 0) return [0];
    if(num === 1) return [1];
    let output = [0,1];
    for(let i = 1; i < num; i++) {
        output.push(output[i] + output[i-1]);
    }
    return output;
}
console.log(fibonacci(7));

const fibonacciSequece = num => {
    if(num === 0) return 0;
    if(num === 1) return 1;
    return fibonacciSequece(num - 1) + fibonacciSequece(num - 2);

}
console.log(fibonacciSequece(5));



/*
Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit. Return that one-digit result. Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.
*/
const sumToOne = num => {
    num = num.toString().split("");
    console.log(num);

    while(num.length > 1) {
        let sum = 0;
        for(let i = 0; i < num.length; i++) {
            sum += parseInt(num[i]);
        }
        num = sum.toString().split("");
        console.log(num);
    }
    return parseInt(num[0]);
}
console.log(sumToOne(92723589))

const convertNumToArr = num => {
    let digits = [];
    while(num > 0) {
        // console.log(num % 10)
        digits.push(num % 10);
        // console.log(Math.trunc(num/10))
        num = Math.trunc(num/10);
    }
    return digits;
}
const sumToOne2 = num => {
    let arr = convertNumToArr(num);
    console.log(arr)
    while(arr.length > 1) {
        let sum = 0;
        for(let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        arr = convertNumToArr(sum);
        console.log(arr);
    }
    return arr[0];
}
console.log(sumToOne2(92723589));



/*
Regardless of how hard a Dojo student works (and they should work hard), they need time now and then to unwind – like hands on a clock. Traditional clocks are increasingly uncommon, but most can still read an analog clock’s hands of hours, minutes and seconds. Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, prints angles (in degrees) of the hour, minute and second hands. As review, 360 degrees form a full rotation. For input of 3600 secs (equivalent to 1:00:00), print "Hour hand: 30 degs.
Minute hand: 0 degs. Second hand: 0 degs." For an input parameter seconds of 119730 (which is equivalent to 9:15:30 plus 24 hours!), you should log "Hour hand: 277.745 degs. Minute hand: 93 degs. Second hand: 180 degs." Note: in the second example, the angle for the minute hand is not simply 90 degrees; it has advanced a bit further, because of the additional 30 seconds in that minute so far.
Second: also calculate and print degrees for an additional “week hand” that rotates once each week.
*/
const clockAngle = seconds => {
    // hour hand is 30 d
    // minute hand is 6 deg
    // second hand is 6 deg
    // convert second to digital time, ex: 01:00:00
    time = new Date(seconds * 1000).toISOString().substr(11, 8);
    // split into an array, so [0] is hr, [1] is min, [2] is second
    time = time.split(":");
    // console.log(time)

    // find degree for each angel;
    let hDegree = 30 * time[0];
    let mDegree = 6 * time[1];
    let sDegree = 6 * time[2]

    // hour and min degree angel will depends on where is the second/minutes hand, it might be slightly over

    hDegree = hDegree + mDegree / 12;
    mDegree = mDegree + sDegree / 60;

    console.log(hDegree);
    console.log(mDegree);
    console.log(sDegree);
}
console.log(clockAngle(3600));
console.log(clockAngle(119730));
console.log(clockAngle(45));



// Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1. Many highly optimized solutions exist, but for now just create one that is easy to understand and debug.
const isPrime = int => {
    // var keep track if int is prime or not
    let prime = true;
    // 1 is either, 2 is smallest prime
    if(int === 1) return "neither prime or composite";
    if(int === 2) return "is prime";
    // run throught every possible divisition from 2 to int - 1; anytime we encouter divisible, then its not prime
    for(let i = 2; i < int; i++) {
        if(int % i === 0) {
            prime = false;
            break;
        }
    }
    if(prime) {
        return "is prime";
    } else {
        return "not prime"
    }
}
console.log(isPrime(6));