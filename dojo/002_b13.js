// Print all the integers from 1 to 255.
const Print1To255 = function() {
    for(let i = 1; i < 256; i++) {
        console.log(i);
    }
}
Print1To255();



// Print all odd integers from 1 to 255.
const PrintOdds1To255 = function() {
    for(let i = 1; i < 256; i+=2) {
        console.log(i);
    }
}
PrintOdds1To255();



// Print integers from 0 to 255, and with each integer print the sum so far.
const PrintIntsAndSum0To255 = function() {
    let sum = 0;
    for(let i = 0; i < 256; i++) {
        sum += i;
        console.log(`i is ${i} and sum is ${sum}`)
    }
}
PrintIntsAndSum0To255();



// Iterate through a given array, printing each value.
const PrintArrayVals = function(arr) {
    for(let i = 0 ; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
PrintArrayVals([1,4,6,8,213,87,12]);



// Given an array, find and print its largest element.
const PrintMaxOfArray = function(arr) {
    let max = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(PrintMaxOfArray([12,5,7,9,4,3]));
console.log(PrintMaxOfArray([12,5,7,9,4,3,98]));


// Analyze an array’s values and print the average.
const PrintAverageOfArray = function(arr) {
    let sum = getSum(arr);
    return sum / arr.length;
}
const getSum = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(PrintAverageOfArray([12,5,7,9,4,3]));
console.log(PrintAverageOfArray([12,5,7,9,4,3,98]));



// Create an array with all the odd integers between 1 and 255 (inclusive)
const ReturnOddsArray1To255 = function() {
    let arr = [];
    for(let i = 1; i < 256; i += 2) {
        arr.push(i);
    }
    return arr;
}
console.log(ReturnOddsArray1To255());



// Square each value in a given array, returning that same array with changed values.
const SquareArrayVals = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = Math.pow(arr[i], 2);
    }
    return arr;
}
console.log(SquareArrayVals([2,7,8,3,4]));



// Given an array and a value Y, count and print the number of array values greater than Y.
const ReturnArrayCountGreaterThanY = function(arr, y) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > y) {
            console.log(arr[i]);
            count++;
        }
    }
    return count;
}
console.log(ReturnArrayCountGreaterThanY([5,6,8,4325,8756,243,67,9,3], 56));



// Return the given array, after setting any negative values to zero.
const ZeroOutArrayNegativeVals = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] < 0 ? arr[i] = 0 : "";
    }
    return arr;
}
console.log(ZeroOutArrayNegativeVals([4,5,7,-2,0,5,-9]));



// Given an array, print the max, min and average values for that array.
const PrintMaxMinAverageArrayVals = function(arr) {
    let max = PrintMaxOfArray(arr);
    let min = PrintMinOfArray(arr);
    let avg = getSum(arr) / arr.length;
    return [max, min, avg];
}
const PrintMaxOfArray = function(arr) {
    let max = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
const PrintMinOfArray = function(arr) {
    let min = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
const getSum = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(PrintMaxMinAverageArrayVals([4,6,8,2,9,12,8]));



// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
const ShiftArrayValsLeft = function(arr) {
    arr.shift();
    arr.push(0);
    return arr;
}
console.log(ShiftArrayValsLeft([4,6,8,2,9,12,8]));

const ShiftArrayValsLeft2 = function(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = 0;
    return arr;
}
console.log(ShiftArrayValsLeft2([4,6,8,2,9,12,8]));



// Given an array of numbers, replace any negative values with the string 'Dojo'.
const SwapStringForArrayNegativeVals = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}
console.log(SwapStringForArrayNegativeVals([4,5,7,-2,0,5,-9]));



// Print integers from -52 to 1066 using a FOR loop.
const printNum = () => {
    for(let i = -52; i <= 1066; i++) {
        console.log(i);
    }
}
printNum();



// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
const beCheerful = () => {
    for(let i = 1; i <= 98; i++) {
        console.log("good morning", i);
    }
}
beCheerful();



// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
const multiplesOfThree = () => {
    for(let i = -300; i <=0; i++) {
        if(i % 3 === 0) {
            if(i === -3 || i === -6) {
                continue;
            }
            console.log(i)
        }
    }
}
multiplesOfThree();



// Print integers from 2000 to 5280, using a WHILE.
const printNum2 = () => {
    let i = 2000;
    while(i <= 5280) {
        console.log(i);
        i++;
    }
}
printNum2();



// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...."
const isBirthday = (month, day) => {
    if((month === 9 && day === 2)) {
        console.log("How did you know?");
    } else if((day === 9 && month === 2)) {
        console.log("How did you know?");
    } else {
        console.log("just another day");
    }
}
isBirthday(9,9)



// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.
const isLeapYear = year => {
    if(year % 400 === 0) {
        return true;
    } else if(year % 100) {
        return false
    } else if(year % 4) {
        return true;
    }
    return false;
}
console.log(isLeapYear(8))



// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
const printNum3 = () => {
    let count = 0;
    for(let i = 512; i <=4096; i++) {
        if(i % 5 === 0) {
            console.log(i);
            count ++;
            console.log("count: ", count);
        }
    }
}
printNum3();



// Print multiples of 6 up to 60,000, using a WHILE.
const printNum4 = () => {
    let i = 0; 
    while(i <= 60000) {
        if(i % 6 === 0) {
            console.log(i);
        }
        i++;
    }
}
printNum4();



// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
const dojoWay = () => {
    for(let i = 1; i <= 100; i++) {
        if(i % 10 === 0) {
            console.log("Dojo");
        } else if(i % 5 === 0) {
            console.log("Coding");
        } else {
            console.log(i);
        }
    }
}
dojoWay();



// Your function will be given an input parameter incoming. Please console.log this value.
const whatDoYouKnow = param => {
    console.log(param);
}
whatDoYouKnow("Hello World");



// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
const sumUp = () => {
    let sum = 0;
    for(let i = -300000; i <= 300000; i++) {
        if(i % 2 !== 0) {
            sum += i;
            console.log(sum)
        }
    }
    console.log(sum);
}
sumUp();



// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.
const countDownByFours = () => {
    let i = 2016;
    while(i > 0) {
        console.log(i);
        i-=4;
    }
}
countDownByFours();



// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).
const flexibleCountdown = (lowNum, highNum, mult) => {
    for(let i = highNum; i >= lowNum; i--) {
        if(i % mult === 0) {
            console.log(i);
        }
    }
}
flexibleCountdown(2,9,3);



// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).
const finalCountDown = (param1, param2, param3, param4) => {
    for(let i = param2; i <= param3; i++) {
        if(i % param1 === 0) {
            if(i === param4) {
                continue;
            }
            console.log(i);
        } 
    }
}
finalCountDown(3,5,17,9)


const finalCountDown2 = (param1, param2, param3, param4) => {
    let i = param2;
    while(i <= param3) {
        if(i % param1 === 0) {
            if(i === param4) {
                i++;
                continue;
            }
            console.log(i);
        }
        i++;
    }
}
finalCountDown2(3,5,17,9)



// Your function will receive an array with two numbers. Print the first value, and return the second.
const printAndReturn = arr => {
    console.log(arr[0]);
    return arr[1];
}
console.log(printAndReturn([2,6,5,8]))



// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
const firstPlusLength = arr => {
    if(arr.length === 0) return 0;
    if(isNaN(arr[0])) return arr.length;
    return arr[0] + arr.length;
}
console.log(firstPlusLength([2,6,5,8]))
console.log(firstPlusLength(["hi",6,5,8]))



// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
const greaterThanSecond = arr => {
    let counter = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[1]) {
            counter++;
        }
    }
    return counter;
}
console.log(greaterThanSecond([1,3,5,7,9,13]));



// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?
const greaterThanSecond2 = arr => {
    let counter = 0;
    let output = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[1]) {
            counter++;
            output.push(arr[i]);
        }
    }
    console.log(counter)
    return output;
}
console.log(greaterThanSecond2([1,3,5,7,9,13]));



// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
const generateArray = (num1, num2) => {
    if(num1 === num2) return "Jinx!";
    let output = [];
    for(let i = 1; i <= num1; i++) {
        output.push(num2);
    }
    return output;
}
console.log(generateArray(6,5))



// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".
const fitFirstValue = arr => {
    if(arr[0] > arr.length) {
        return "Too big!";
    } else if(arr[0] < arr.length) {
        return "Too small!";
    } else {
        return "Just right!";
    }
}
console.log(fitFirstValue([6,6,4,8,6,9]));



// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.
const fahrenheitToCelsius = temperture => {
    return (temperture - 32) / 1.8;
    // 1.8 x cel = f
    // 
}
console.log(fahrenheitToCelsius(-40))



// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.
const celsiusToFahrenheit = temperture => {
    return 1.8 * temperture + 32;
}
console.log(celsiusToFahrenheit(-40))



// (optional) Do Fahrenheit and Celsius values equate at a certain number? Scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.
const celsiusEqualFahrenheit = () => {
    let celsius = 200;
    let fahrenheit;
    while(celsius !== fahrenheit) {
        fahrenheit = celsiusToFahrenheit(celsius);
        if(celsius === fahrenheit) {
            console.log("f: ", fahrenheit)
            console.log("c: ", celsius)
            break;

        }
        celsius--;
    }
    
}
celsiusEqualFahrenheit();