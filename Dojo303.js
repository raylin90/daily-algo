// create a function that returns as boolean of true/false for whether or not an input string is a stric pallindrome. Do not ignore whitespaces!!

// Ex1: "racecar" --> true
// Ex2: "Dud" --> false
// Ex3: "oho!" --> false

const isPallindrome = str => {
    // for loop the str list, and we only need to iterate half of the list
    for(let left = 0; left < str.length / 2; left++) {
        // create the right variable to record the right side index
        let right = str.length - 1 - left;
        // compare the left with right index, if does not match, then false;
        if(str[left] !== str[right]) {
            return false;
        }
    }
    // after finishing the for loop, if it comes to here, then we have a pallindrome
    return true;

}

console.log(isPallindrome("racecar"));
console.log(isPallindrome("Dud"));
console.log(isPallindrome("oho!"));
console.log(isPallindrome(" tt "));





// given a string, return the longest pallindramic substring, given "hello dada", return "dada", give "not much" return "n". Include spaces as well!

// Ex1: "my favorite racecar erupted" --> "e racecar e"
// Ex2: "ada" --> : ada:
// Ex3: "nothing to see!" --> "ee"

const longestPallindrome = str => {
    // new var newStr to hold the output
    let newStr = "";
    // forloop the str list
    for(let i = 0; i < str.length; i++) {
        // nested for loop so we can compare every possibility from index 0 to end, then index 1 to end, etc
        // IMPORTANT: we want to include j <= str.length, because slice excludes j
        for(let j = i + 1; j <= str.length; j++) {
            // run isPallindrome function, to compare every substring from i, j, and if it returns true
            if(isPallindrome(str.slice(i, j)) == true) {
                // we want to compare the length to newStr length, if is large, then
                if(str.slice(i, j).length > newStr.length) {
                    // we set the newStr as the longest output
                    newStr = str.slice(i, j);
                }
            }
        }
    }
    return newStr;
}

console.log(longestPallindrome("racecar"));
console.log(longestPallindrome("my favorite racecar erupted"))
console.log(longestPallindrome("ada"))
console.log(longestPallindrome("nothing to see!"))