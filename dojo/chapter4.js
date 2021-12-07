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


// Create a function that, given an input string str, returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, because the underlined ")" is premature: there is nothing open for it to close.
const parensValid = str => {
    let arr = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "(") {
            arr.push(str[i]);
        } else if(str[i] === ")" && arr[arr.length-1] === "(") {
            arr.pop();
        } else if(str[i] === ")") {
            return false;
        }
    }
    if(arr.length === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(parensValid("Y(3(p)p(3)r)s"));  // true;
console.log(parensValid("N(0(p)3"));  // false;
console.log(parensValid("N(0)t )0(k"));  // false;

const parensValid2 = str => {
    let obj = {"(" : 0};
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "(") {
            obj["("] ++;
        } else if(str[i] === ")") {
            obj["("] --;
        }
        if(obj["("] < 0) {
            return false;
        }
    }
    if(obj["("] === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(parensValid2("Y(3(p)p(3)r)s"));  // true;
console.log(parensValid2("N(0(p)3"));  // false;
console.log(parensValid2("N(0)t )0(k"));  // false;



// Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example: "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true. "D(i{a}l[ t]o)n{e" => false. "A(1)s[O (n]0{t) 0}k" => false.
const bracesValid = str => {
    let arr = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "(" || str[i] === "{" || str[i] === "[") {
            arr.push(str[i]);
        } else if(str[i] === ")" && arr[arr.length -1 ] === "(") {
            arr.pop();
        } else if(str[i] === "}" && arr[arr.length -1 ] === "{") {
            arr.pop();
        }else if(str[i] === "]" && arr[arr.length -1 ] === "[") {
            arr.pop();
        } else if(str[i] === ")" || str[i] === "}" || str[i] === "]") {
            return false;
        }
    }
    if(arr.length === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(bracesValid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"));  // true
console.log(bracesValid("D(i{a}l[ t]o)n{e"));    // false
console.log(bracesValid("A(1)s[O (n]0{t) 0}k"));    // false

const bracesValid2 = str => {
    let obj = {
        "(" : 0,
        "[" : 0,
        "{" : 0,
    };
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "(") {
            obj["("]++;
        } else if(str[i] === "[") {
            obj["["]++;
        } else if(str[i] === "{") {
            obj["{"]++;
        } else if(str[i] === ")") {
            obj["("]--;
        } else if(str[i] === "]") {
            obj["["]--;
        } else if(str[i] === "}") {
            obj["{"]--;
        }
        if(obj["("] < 0 || obj["["] < 0 || obj["{"] < 0) {
            return true;
        }
    }
    if(obj["("] === 0 && obj["["] === 0 && obj["{"] === 0) {
        return true;
    } else {
        return false;
    }
    console.log(obj);
}
console.log(bracesValid2("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"));  // true
console.log(bracesValid2("D(i{a}l[ t]o)n{e"));    // false
// need to consider edge case
console.log(bracesValid2("A(1)s[O (n]0{t) 0}k"));    // false



// Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false
const isPalindrome = str => {
    for(let i = 0; i < str.length / 2; i++) {
        let j = str.length - 1 - i;
        if(str[i] !== str[j]) {
            return false;
        }
    }
    return true;
}
// console.log(isPalindrome("a x a")); // true
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("Dud")); // false
// console.log(isPalindrome("oho!")); // false



// For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. Given "what up, daddy-o?", return "dad". Given "uh... not much", return "u". Include spaces as well (i.e. be strict, as in previous challenge): given "Yikes! my favorite racecar erupted!", return "e racecar e". Strings longer or shorter than complete words are OK.
// Second: re-solve the above problem, but ignore spaces, tabs, returns, capitalization and punctuation. Given "Hot puree eruption!", return "tpureeerupt".
const longerestPalindrome = str => {
    let output = "";
    for(let i = 0; i < str.length; i++) {
        for(let j = i+1; j < str.length; j++) {
            if(isPalindrome(str.slice(i, j)) && str.slice(i, j).match(/[a-z]/)) {
                if(str.slice(i, j).length > output.length) {
                    output = str.slice(i, j);
                }
            }
        }
    }
    return output;
}
// console.log(longerestPalindrome("what up, daddy-o?"))   // dad
// console.log(longerestPalindrome("uh... not much"))   // u
// console.log(longerestPalindrome("Yikes! my favorite racecar erupted!"))   // e racecar e

const longerestPalindrome2 = str => {
    str = str.toLowerCase().split("");
    let arr = ["!", ".", ","];
    for(let i = 0; i < str.length; i++) {
        if(arr.includes(str[i]) || str[i] === " ") {
            str.splice(i, 1);
        }
    }
    str = str.join("");
    let output = "";
    for(let i = 0; i < str.length; i++) {
        for(let j = i+1; j < str.length; j++) {
            if(isPalindrome(str.slice(i, j)) && str.slice(i, j).match(/[a-z]/)) {
                if(str.slice(i, j).length > output.length) {
                    output = str.slice(i, j);
                }
            }
        }
    }
    return output;
}
console.log(longerestPalindrome2("H,ot p.uree eruption!"))   // tpureeerupt



// Nikki, a queen of gentle sarcasm, loves the word facetiously. Lance helpfully points out that it is the only known English word that contains all five vowels in alphabetical order, and it even has a ‘y’ on the end! Nikki takes a break from debugging to turn and give him an acid stare – indeed a look that was delivered arseniously. Given a string, return whether all contained letters are in alphabetical order.
const isWordAlphabetical = str => {
    let alphabetic = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let order = [];
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < alphabetic.length; j++) {
            if(str[i] === alphabetic[j]) {
                order.push(j);
            }
        }
    }
    // console.log(order)
    for(let i = 1; i < order.length; i++) {
        if(order[i] < order[i-1]) {
            return false;
        }
    }
    return true;
}
console.log(isWordAlphabetical("abc")); // true
console.log(isWordAlphabetical("Hello"));   // false
console.log(isWordAlphabetical("boy"));   // true



// Write a function that accepts as a parameter a string containing someone’s name. Return a string containing the following oh-so-cool greeting: strip off the first letter of the name, capitalize this new word, and add " to the [first letter]!" Given "Dylan", return "Ylan to the D!"
const dGetsJiggy = str => {
    str = str.split("");
    // console.log(str);
    let firstChar = str.shift().toUpperCase();
    // console.log(firstChar);
    // console.log(str);
    return `${str.join("")} to the ${firstChar}!`;
}
console.log(dGetsJiggy("Dylan"));



// Lance is writing his opus: Epitome, an epic tome of beat poetry. Always ready for a good rhyme, he constantly seeks words that end with the same letters. Write a function that, when given a word array, returns the largest suffix (word-end) common to all words in the array. For inputs ["deforestation", "citation", "conviction", "incarceration"], return "tion" (not all that creative a rhyming point). If it is ["nice", "ice", "baby"], return "", because that’s just ... not.
const commonSuffix = arr => {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split("").reverse().join("");
    }
    let suffix = "";

    for(let i = 0; i < arr[0].length; i++) {
        let char = arr[0][i];
        for(let j = 1 ; j < arr.length; j++) {
            // console.log(arr[j][i])
            if(char !== arr[j][i]) {
                return suffix.split("").reverse().join("");
            }
        }
        suffix += char;
    }
    return suffix.split("").reverse().join("");
}
console.log(commonSuffix(["deforestation", "citation", "conviction", "incarceration"]));    // tion
console.log(commonSuffix(["nice", "ice", "baby"]));    // ""
console.log(commonSuffix(["nice", "ice", "healce"]));    // ce



// Martin is writing his opus: a book of algorithm challenges, set as lyrics to a suite of a cappella fugues. Some of ‘those fugueing challenges’ are less popular than others, so he needs an index. Given a sorted array of pages where a term appears, produce an index string. Consecutive pages should form ranges separated by a hyphen. For [1,13,14,15,37,38,70], return string "1, 13-15, 37-38, 70". Take care to get all the commas and spaces correct: Martin is palpably particular (practically persnickety!) about patchy punctuation.
const bookIndex = arr => {
    let output = "";
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]+1 === arr[i+1]) {
            output += arr[i] + "-";
            while(arr[i]+1 === arr[i+1]) {
                i++;
            }
            output += arr[i] + ",";
        } else {
            output += arr[i] + ",";
        }
    }
    return output;
}
console.log(bookIndex([1,13,14,15,37,38,70]));



// Create a standalone function that accepts an input string, removes leading and trailing white space (at beginning and end only), capitalizes the first letter of every word, and returns that string. If original string contains the word "Mike" anywhere, immediately return "stunned silence" instead.
const dropTheMike = str => {
    str = str.trim().split(" ");
    // console.log(str);
    if(str.includes("Mike")) return "stunned silence";

    for(let i = 0; i < str.length; i++) {
        // str[i][0] = str[i][0].toUpperCase();
        str[i] = str[i].split("");
        str[i][0] = str[i][0].toUpperCase();
        str[i] = str[i].join("");
    }
    return str;
}
console.log(dropTheMike("   hello world, I started to program!   "));   // Hello World, I Started To Program!
console.log(dropTheMike("   hello world, I Mike to program!   "));  // stunned silence




// As before, given a number of U.S. cents, return the optimal configuration of coins, in an object.
const coinChange = money => {
    let obj = {
        q: 0,
        d: 0,
        n: 0,
        p: 0,
    }
    console.log(Math.floor(money / 25))
    if(money >= 25) {
        obj.q = Math.floor(money / 25);
        money = money - obj.q * 25;
    } 
    if(money >= 10) {
        obj.d = Math.floor(money / 10);
        money = money - obj.d * 10;
    } 
    if(money >= 5) {
        obj.n = Math.floor(money / 5);
        money = money - obj.n * 5;
    } 
    obj.p = money;
    return obj;
}
console.log(coinChange(94));



// Given an array, return an object containing the array’s max, min and average values.
const maxMinAvg = arr => {
    let obj = {
        max: arr[0],
        min: arr[0],
        avg: 0,
    }
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if(arr[i] < obj.min) {
            obj.min = arr[i];
        }
        if(arr[i] > obj.max) {
            obj.max = arr[i];
        }
    }
    obj.avg = sum / arr.length;
    return obj;
}
console.log(maxMinAvg([1,2,3,4,5,6,7,8,9,10,-2]));



// Associative arrays are sometimes called maps because a key (string) maps to a value. Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc": 42, 3: "wassup", "yo": true}.
const zipArraysIntoMap = (arr1, arr2) => {
    let obj = {};
    while(arr1.length && arr2.length) {
        obj[arr1.shift()] = arr2.shift();
    }
    return obj;
}
console.log(zipArraysIntoMap( ["abc", 3, "yo"],[42, "wassup", true]));



// Associative arrays are also called hashes (we’ll learn why later). Build invertHash(assocArr) to convert hash keys to values, and values to keys. Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"}, return object {"Zaphod": "name", "high": "charm", "dicey": "morals"}.
const invertHash = assocArr => {
    for(let key in assocArr) {
        // console.log(key);
        // console.log(assocArr[key]);
        let temp = key;
        key = assocArr[key];
        assocArr[key] = temp;
        delete assocArr[temp];
    }
    return assocArr;
}
console.log(invertHash({"name": "Zaphod", "charm": "high", "morals": "dicey"}));



// Without using the .length property that is present on all arrays, determine and return the number of values in the given array. If we were to do this on a numerical array, we might check to see whether the element at a certain numerical index was undefined. Unfortunately, we can’t do that here because the keys don’t have any sort of predictable order or first value. So, for object { band: "Travis Shredd & the Good Ol’ Homeboys", style: "Country/Metal/Rap", album: "668: The Neighbor of the Beast" }, you should return the value 3, because there are three keys in this object: band, style and album.
const countObj = obj => {
    // let counter = 0;
    // for(const key in obj) {
    //     counter++;
    // }
    // return counter;
    return Object.keys(obj).length;
}
console.log(countObj({ band: "Travis Shredd & the Good Ol’ Homeboys", style: "Country/Metal/Rap", album: "668: The Neighbor of the Beast" }));



// String.concat(str2,str3,...,strX) - add string(s) to end of existing one. Return new string.
const stringConcat = (str2, str3) => {
    let newStr = "";
    for(let i = 0; i < str2.length; i++) {
        newStr += str2[i];
    }
    for(let j = 0; j < str3.length; j++) {
        newStr += str3[j];
    }
    return newStr;
}
console.log(stringConcat("hello","world"));



// String.slice(start,end) - extract part of a string and return in a new one. Start and end are indices into the string, with the first character at index 0. End param is optional and if present, refers to one beyond the last character to include.
// Bonus: include support for negative indices, representing offsets from string-end. Example: String.slice(-1) returns the string’s last character.
const stringSlice = (str, start, end=str.length) => {
    let newStr = "";
    if(start > 0) {
        for(let i = start; i < end; i++) {
            newStr += str[i];
        }
        return newStr;
    }
    if(start < 0) {
        if(end < 0) {
            for(let i = str.length - Math.abs(start); i < str.length - Math.abs(end); i++) {
                newStr += str[i];
            }
            return newStr;
        } else {
            for(let i = str.length - Math.abs(start); i < end; i++) {
                newStr += str[i];
            }
            return newStr;
        }
    }
}
console.log(stringSlice("The quick brown fox jumps over the lazy dog.", 31));
console.log(stringSlice("The quick brown fox jumps over the lazy dog.", 4,19));
console.log(stringSlice("The quick brown fox jumps over the lazy dog.", -4));
console.log(stringSlice("The quick brown fox jumps over the lazy dog.", -9, -5));



// String.trim() - remove whitespace (spaces, tabs, newlines) from both sides, and return a new string. Example: " \n hello goodbye \t ".trim() should return "hello goodbye".
const stringTrim = str => {
    let newStr = "";
    str = str.replace("\t", "");
    str = str.replace("\n", "")
    // console.log(str);
    for(let i = 0; i < str.length; i++) {
        if(str[i] === " ") {
            continue;
        }
        newStr += str[i];
    }
    return newStr;
}
console.log(stringTrim(" \n hello goodbye \t "));



// String.split(separator,limit) - split string into an array of substrings, returning array. Separator specifies where to divide substrings and is not included in any substring. If "" is specified, split the string on every character. Limit is optional and indicates number of splits; additional post-limit items should be discarded. Note: existing string is unaffected.
const stringSplit = (str, separator, limit) => {
    let arr = [];
    let temp = "";
    for(let i = 0; i < str.length; i++) {
        if(str[i] === separator) {
            arr.push(temp);

            if(limit) {
                if(arr.length === limit) {
                    return arr;
                }
            }

            temp = "";
        } else {
            temp += str[i];
        }
    }
    arr.push(temp);
    return arr;
}
console.log(stringSplit("The quick brown fox jumps over the lazy dog.", "o", 3))



// String.search(val) - search string for the given val (another string). Return the index position of the first match found (or -1 if not found).
const stringSearch = (str, word) => {
    let index;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === word[0]) {
            index = i;
            let j = 0;
            while(j < word.length) {
                if(str[i] === word[j]) {
                    i++;
                    j++;
                } else {
                    return -1;
                }
            }
            return index;
        }
    }
    return -1;
}
console.log(stringSearch("Mr. Blue has a blue house", "Blue"));