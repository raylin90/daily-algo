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



// Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].
const makeItBig = arr => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}
console.log(makeItBig([-1,3,5,-5]));



// Create a function that takes array of numbers. The function should print the lowest value in the array, and return the highest value in the array.
const findMinMax = arr => {
    let min = arr[0];
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(min);
    return max;
}
console.log(findMinMax([-1,3,5,-5]));



// Build a function that takes array of numbers. The function should print second-to-last value in the array, and return first odd value in the array.
const printOneReturnOne = arr => {
    console.log(arr[arr.length - 2]);
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            return arr[i];
        }
    }
}
console.log(printOneReturnOne([2,3,5,-5]));



// Given array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.
const double = arr => {
    let output = []
    arr.forEach(item => {
        output.push(item * 2)
    })
    return output;
}
console.log(double([2,2,3]));



// Given array of numbers, create function to replace last value with number of positive values. Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
const countPositives = arr => {
    let counter = 0;
    for(const value of arr) {
        if(value > 0) {
            counter++;
        }
    }
    arr[arr.length - 1] = counter;
    return arr;
}
console.log(countPositives([-1,1,1,1]));



// Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"
const evenOdd = arr => {
    let evenCounter = 0;
    let oddCounter = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            evenCounter++;
            oddCounter = 0;
        } else {
            oddCounter++;
            evenCounter = 0;
        }
        if(evenCounter === 3) {
            console.log("Even more so!");
            evenCounter = 0;
        } else if(oddCounter === 3) {
            console.log("That's odd!")
            oddCounter = 0;
        }
    }
}
evenOdd([1,1,2,3,1,3,5,2,2,2]);
evenOdd([1,2,3,4,5]);
evenOdd([2,2,2,1,1,4,4,6,1,3]);



// Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.
const addOddElement = arr => {
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 !== 0) {
            arr[i] = arr[i] + 1;
        }
    }
    console.log(arr);
    return arr;
}
console.log(addOddElement([1,1,2,3,1,3,5,2,2,2]));



// You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.
const previousLengths = arr => {
    let lengthCount = arr[arr.length - 1].length;
    for(let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i-1].length;
        // console.log(arr[i-1].length)
    }
    arr[0] = lengthCount;
    return arr;
}
console.log(previousLengths(["Hello", "World", "all", "This","is","a", "Nice Array"]))  // 10,5,5,3,4,2,1



// Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.
const addSeven = arr => {
    let output = [];
    for(let i = 0; i < arr.length; i++) {
        output.push(arr[i] + 7);
    }
    output.shift();
    return output;
}
console.log(addSeven([10,5,5,3,4,2,1]))



// Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].
const reverseArray = arr => {
    for(let i = 0; i < arr.length / 2; i++) {
        let j = arr.length - 1 - i;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
console.log(reverseArray([3,1,6,4,2]));



// Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
const makeNegative = arr => {
    let output = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            output.push(arr[i] * -1);
        } else {
            output.push(arr[i]);
        }
    }
    return output;
}
console.log(makeNegative([1,-3,-5]));



// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.
const alwaysHungry = arr => {
    let hungry = false;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "food") {
            console.log("yummy");
            hungry = true;
        }
    }
    if(hungry === false) {
        console.log("I'm hungry");
    }
}
alwaysHungry(["food",2,5,"food",2,2]);
alwaysHungry([2,5,2,2]);



// Given array, swap first and last, third and third-to-last, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true]. Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
const swapEvenElement = arr => {
    for(let i = 0; i < arr.length / 2; i++) {
        if(i % 2 === 0) {
            let j = arr.length - 1 - i;
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
    }
    return arr;
}
console.log(swapEvenElement([true,42,"Ada",2,"pizza"]));
console.log(swapEvenElement([1,2,3,4,5,6]));



// Given array arr and number num, multiply each arr value by num, and return the changed arr.
const multiplyElement = (arr, num) => {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
}
console.log(multiplyElement([2,4,6,4,7,9,2], 3));



//  Stan learned something today: that directly decrementing an array’s .length immediately shortens it by that amount. Given array arr and number X, remove all except the last X elements, and return arr (changed and shorter). Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.
const removeSomeFront = (arr, num) => {
    let removedNum = arr.length - num;
    for(let i = 0; i < removedNum; i++) {
        arr.shift();
    }
    return arr;
}
console.log(removeSomeFront([2,4,6,8,10],3));



// Cartman doesn’t really like math; he needs help. You are given two numbers – coefficients M and B in the equation Y = MX + B. Build a function to return the X-intercept (his older cousin Fiaz wisely reminds him that X-intercept is the value of X where Y equals zero; Cartman just snorts in his general direction).
const mathHelp = (M, B) => {
    return (B * -1) / M
}
console.log(mathHelp(8,100));



// Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). If these probabilities continue, write whatHappensToday() to print a day’s outcome.
const whatHappensToday = () => {
    let num = Math.ceil(Math.random()*100)
    console.log(num);
    if(num > 0 && num <=10) {
        console.log("volcanos day");
    } else if(num > 10 && num <= 25) {
        console.log("tsunamis day");
    } else if(num > 25 && num <= 45) {
        console.log("earthquake day");
    } else if(num > 45 && num <= 70) {
        console.log("blizzards day");
    } else if(num > 70 && num <=100) {
        console.log("meteors day");
    } else {
        console.log("meteors day");
    }
}
whatHappensToday();



// Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another. Change whatHappensToday() function to create whatReallyHappensToday(). In this new function test for each disaster independently, instead of assuming exactly one disaster will happen. In other words, with this new function, all five might occur today – or none. Maybe Kenny will survive!
const whatReallyHappensToday = () => {
    let arr = ["volcanos", "tsunamis", "earthquakes", "blizzards", "meteors", "nothing happend"]
    
    let num = Math.ceil(Math.random()*arr.length);
    for(let i = 0; i < num; i++) {
        let idx = Math.ceil(Math.random()*arr.length - 1);
        console.log(arr[idx]);
    }
}
whatReallyHappensToday();



// Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, Bogdan, entered with a modest IQ of 101. Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, then up by .03 more on the third day, etc. all the way until increasing by .98 on his 98th day (the end of 14 full weeks). What is Bogdan’s final IQ?
const soaringIQ = () => {
    let num = 101;
    for(let i = 0.01; i < 0.99; i+=0.01) {
        console.log(i.toFixed(2))
        num += i;
        console.log(num.toFixed(2))
    }
    return num.toFixed(2);
}
console.log(soaringIQ());



// Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’. For example, given 88, you should log "Score: 88. Grade: B". Given the score 61, log the string "Score: 61. Grade: D".
// For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores, and “+” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+). Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-" .
const letterGrade = grade => {
    if(grade < 0 || grade > 100) {
        "invalid, enter betw. 0 - 100";
    } else if(grade >= 90) {
        if(grade > 92) {
            return `Score: ${grade}, Grade: A`;
        } else {
            return `Score: ${grade}, Grade: A-`;
        }
    } else if(grade >=80 && grade < 90) {
        if(grade >= 88) {
            return `Score: ${grade}, Grade: B+`;
        } else if(grade < 82) {
            return `Score: ${grade}, Grade: B-`;
        } else {
            return `Score: ${grade}, Grade: B`;
        }
    } else if(grade >=70 && grade < 80) {
        if(grade >= 78) {
            return `Score: ${grade}, Grade: C+`;
        } else if(grade < 72) {
            return `Score: ${grade}, Grade: C-`;
        } else {
            return `Score: ${grade}, Grade: C`;
        }
    } else if(grade >=60 && grade < 70) {
        if(grade >= 68) {
            return `Score: ${grade}, Grade: D+`;
        } else if(grade < 62) {
            return `Score: ${grade}, Grade: D-`;
        } else {
            return `Score: ${grade}, Grade: D`;
        }
    } else {
        return `Score: ${grade}, Grade: F`;
    }
}
console.log(letterGrade(61));



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