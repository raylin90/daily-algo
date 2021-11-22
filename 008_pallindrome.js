// Create a function that returns as boolean of true/false for whether or not an input string is a strict pallindrome. Do not ignore whitespaces!!

// Example 1: "racecar" --> true
// Example 2: "Dud" --> false
// Example 3: "oho!" --> false

const isPallindrome = str => {
    for(let i = 0; i < str.length / 2; i++) {
        let j = str.length - 1 - i;
        if(str[i] !== str[j]) {
            return false;
        }
    }
    return true;
}
// console.log(isPallindrome("racecar"));
// console.log(isPallindrome("Dud"));
// console.log(isPallindrome("oho!"));

// Given a String, return the longest pallindromic substring. Given "hello dada", return "dad". Given "not much" return "n". Include spaces as well!

// Example 1: "my favorite racecar erupted" --> "e racecar e"
// Example 2: "nada" --> "ada"
// Example 3: "nothing to see" --> "ee"
const longestPallindrome = str => {
    let pall = "";
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < str.length; j++) {
            if(isPallindrome(str.slice(i, j+1)) === true) {
                if(str.slice(i, j+1).length > pall.length) {
                    pall = str.slice(i, j+1);
                }
            }
        }
    }
    return pall;
}
console.log(longestPallindrome("my favorite racecar erupted"));
console.log(longestPallindrome("nada"));
console.log(longestPallindrome("nothing to see"));