// create a function that, given a string, returns the string's acronym (first letter only, capitalized)
// ex: there's no free lunch - gotta pay yer way" ---> "TNFL - GPYW"

const acronym = str => {
    // split will break the string into sub-string, and store them into an array
    let arr = str.split(" ");
    // create newStr variable to hold our output
    let newStr = "";
    // use for loop to iterate the array, and get the index of 0
    for(let i = 0; i < arr.length; i++) {
        newStr += arr[i][0].toUpperCase();
    }
    return newStr;
}

console.log(acronym("there's no free lunch - gotta pay yer way"));





// Implement reverString(str) that takes in a String, and then returns the same string of the same length, but we want each characters reversed.

// ex: "creature" ---> "erutaerc"
// ** DONT use build-in reverse() method!** 

function reverseString(str) {
    // empty string list to hold our output
    let newStr = "";

    // for loop the str backward, and concat. the letter together into the newStr
    for(let i = str.length - 1; i >=0 ; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseString("creature"));