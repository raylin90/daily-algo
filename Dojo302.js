// Implement reverString(str) that takes in a String, and then returns the same string of the same length, but we want each characters reversed.

// ex: "creature" ---> "erutaerc"
// ** DONT use build-in reverse() method!** 

function reverseString(str) {

    let newStr = "";

    for(let i = str.length - 1; i >=0; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseString("creature"));