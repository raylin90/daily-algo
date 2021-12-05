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


const intToRomanNum = num => {
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

    var str = '';
    for (var i of Object.keys(roman)) {
        console.log(i)
        // var q = Math.floor(num / roman[i]);
        // num -= q * roman[i];
        // str += i.repeat(q);
    }
    return str;
}
console.log(intToRomanNum(4));
console.log(intToRomanNum(349));
console.log(intToRomanNum(444));



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
for(const key in roman) {
    console.log(key)
}