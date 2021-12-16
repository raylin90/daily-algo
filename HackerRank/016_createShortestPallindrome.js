// reviewing the provided in st, create the shortesst possible string by adding characters to the end of st to make it a pallindrome
// Ex: st = "race" => "racecar"
// Ex: st = "rada" => "radar"
// Ex: st = "raco" => "racocat"

function isPallindrome(inputString) {
    // for loop iterate the input, half of the length, because we comparing start vs end
    for(let i = 0; i < inputString.length / 2; i++) {
        // set j to keep track end element of the input, so we can compare with i (start element)
        let j = inputString.length - 1 - i;
        // compare start (i) an end (j), any moment when it's not equal, then we dont have palindrome
        if(inputString[i] !== inputString[j]) {
            // return false if not match
            return false;
        }
    }
    // once finish looping, which means everything matching, then it's true
    return true;
}
const shortestPallindrome = st => {
    let tempStr = "";
    let index;
    // iterate backward from input string
    for(let i = st.length -1; i >= 0; i--) {
        // concat. into a new string
        tempStr += st[i];
        // check if the new string is a pallindrome or not;
        if(isPallindrome(tempStr)) {
            // console.log(tempStr)
            // if yes, we want to set the start point where the pallindrome begin.
            index = i;
        }
    }
    // set new variable as input string, so we can append characters into it;
    let output = st;
    // so we have the starting point, we want to loop from starting point - 1, till 0, and append to output string
    for(let j = index - 1; j >= 0; j--) {
        output += st[j];
    }
    return output;
}
console.log(shortestPallindrome("race"));   // "racecar"
console.log(shortestPallindrome("rada"));   // "radar"
console.log(shortestPallindrome("raco"));   // "racocat"