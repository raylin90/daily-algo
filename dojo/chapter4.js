// Create a function that, given a string, returns all of that string’s contents, but without blanks. If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".
const removeBlanks = str => {
    let arr = str.split(" ");
    return arr.join("");
}
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));



// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 01357924680.
const getDigits = str => {
    let num = ["0","1","2","3","4","5","6","7","8","9"];
    let output = [];
    for(let i = 0; i < str.length; i++) {
        if(num.includes(str[i])) {
            output.push(parseInt(str[i]));
        }
    }
    return output.join("");
}
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));



// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". Given "Live from New York, it's Saturday Night!", return "LFNYISN".
const acronyms = str => {
    let arr = str.split(" ");
    let newStr = "";
    // console.log(arr)
    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i][0].toUpperCase())
        newStr += arr[i][0].toUpperCase();
    }
    return newStr;
}
console.log(acronyms("there's no free lunch - gotta pay yer way."));
console.log(acronyms("Live from New York, it's Saturday Night!"));



// Accept a string and return the number of non-space characters found in the string. For example, given "Honey pie, you are driving me crazy", return 29 (not 35).
const countNonSpaces = str => {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === " ") {
            continue;
        }
        count++;
    }
    return count;
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"));



// Given a string array and value (length), remove any strings shorter than length from the array.
const removeShorterStrings = (arr, length) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length <= length) {
            arr.splice(i, 1);
            i--;
        }
    }return arr;
}
console.log(removeShorterStrings(["hello", "world", "this", "is", "NYC", "good", "morning", "new", "yokers"],4));



// Implement reverseString(str) that, given string, returns that string with characters reversed. Given "creature", return "erutaerc". Tempting as it seems, do not use the built-in reverse()!
const stringReverse = str => {
    let output = "";
    for(let i = str.length - 1; i >= 0; i--) {
        output += str[i];
    }
    return output;
}
console.log(stringReverse("creature"))

const stringReverse2 = str => {
    let arr = str.split("");
    for(let i = 0; i < arr.length/2; i++) {
        let j = arr.length - 1 - i;
        [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    return arr.join("");
}
console.log(stringReverse2("creature"))



// Build a standalone function to remove strings of even lengths from a given array. For array containing ["Nope!","Its","Kris","starting","with","K!"," (instead","of","Chris","with","C)","."], change that same array to ["Nope !","Its","Chris","."].
const removeEvenLengthStrings = arr => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]. length % 2 === 0) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}
console.log(removeEvenLengthStrings(["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."]));



// Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation. In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.
const intToRomanNum = num => {
    // roman character object
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    // variable to hold output string
    let str = "";
    // for loop the roman character object
    for(const key in roman) {
        // console.log(key);
        // divide the num with each roman obj key, and find the floor
        let q = Math.floor(num / roman[key]);
        // subtract it from given num, so we get the num different
        num -= q * roman[key];
        // if q for example is 2, then we repeat key 2 times, and concat. into output string
        str += key.repeat(q);
    }
    return str;
}
console.log(intToRomanNum(4));
console.log(intToRomanNum(349));
console.log(intToRomanNum(444));



// Sept 16, 2014 headline: “Ancient Computer Found in Roman Shipwreck”. Comprising 30 bronze gears, its wooden frame features 2000 characters. Given a string containing a Roman numeral representation of a positive integer, return the integer. Remember that III is 3, DCIX is 609 and MXDII is 1492.
const romanNumToInt = str => {
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let num = 0;
    // for loop the str input
    for(let i = 0; i < str.length; i++) {
        // set current and next value as current = str[i] roman character and next = str[i+1] roman character
        const curr = roman[str[i]];
        const next = roman[str[i+1]];
        console.log("current", curr)
        console.log("next: ", next)
        // if current < next, which means we can subtract (because we have some code to get XL is 40, curr = 10, next is 50, so we subtract first, then add), else add
        curr < next ? num -= curr : num += curr;
    }
    return num;
}
// console.log(romanNumToInt("III"));
console.log(romanNumToInt("DCIX"));
console.log(romanNumToInt("MXDII"));