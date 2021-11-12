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