// implement reverString(str) that takes in a String, and then returns the same string of the same length, bu with characters reversed.
// Ex: "creature" => "erutaerc"
// Don't use the build-in reverse() method!

// input will be string, and output will be string
// do we need to do it in place?
// consider edge case like str.length = 1
// assume that string size will never be empty

const reverseString = str => {

}
console.log(reverseString("creature"))  // "erutaerc"
console.log(reverseString("t"))  // "t"
console.log(reverseString("hello"))  // "olleh"



// APPROACH 1:
// for loop the string backward
// store each str[i] into new string variable
// once finished, return the string variable
const reverseString1 = str => {
    let outputStr = "";
    for(let i = str.length - 1; i >= 0; i--) {
        outputStr += str[i];
    }
    return outputStr;
}
console.log(reverseString1("creature"))  // "erutaerc"
console.log(reverseString1("t"))  // "t"
console.log(reverseString1("hello"))  // "olleh"


// APPROACH 2:
// for loop the string
// split each word into an array;
// use ES6 swap feature to swap it
// once done, rejoin the array into a string
// return
const reverseString2 = str => {
    let arr = str.split("");
    for(let i = 0; i < arr.length / 2; i++) {
        let j = arr.length - 1 - i;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("")
}
console.log(reverseString2("creature"))  // "erutaerc"
console.log(reverseString2("t"))  // "t"
console.log(reverseString2("hello"))  // "olleh"