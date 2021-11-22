// create a function that, given a string, returns the string's acronym(first letter's only, capitalized).
// Ex: "there's no free lunch - gotta pay yer way" => "TNFL - GPYW"

// input will be a string, and output will be a string
// divider will be the " " (space), any special marker will consider a word as well
// I will assume to store the result into a new string
// consider edge case like length = 0 || 1
// wont have number

const acronym = str => {

}
console.log(acronym("there's no free lunch - gotta pay yer way"))   // "TNFL - GPYW"
console.log(acronym("hello world all"))   // "HWA"
console.log(acronym("today is - a nice , day . I think"))   // "TI - AN , D . IT"



// APROACH 1:
// for loop the array
// identify the word concat. word into a string variable
// when we encouter the space, push word to array, and re-start the temp string variable
// when we finished above steps, we have a array datastructure
// we loop throught the array and get the char at index0, toUpperCase.
// concat. it into output string
// return output string
const acronym1 = str => {
    let tempStr = "";
    let arr = [];
    let outputStr = "";
    for(let i = 0; i < str.length; i++) {
        if(str[i] === " ") {
            arr.push(tempStr);
            tempStr = "";
        } else {
            tempStr += str[i];
        }
    }
    arr.push(tempStr);
    // console.log(arr)
    for(let i = 0; i < arr.length; i++) {
        outputStr += arr[i][0].toUpperCase();
    }
    return outputStr;
}
console.log(acronym1("there's no free lunch - gotta pay yer way"))   // "TNFL - GPYW"
console.log(acronym1("hello world all"))   // "HWA"
console.log(acronym1("today is - a nice , day . I think"))   // "TI-AN,D.IT"
console.log(acronym1("b"))   // "B"


// APROACH 2:
// use built-in to split the string into array
// we loop throught the array and get the char at index0, toUpperCase.
// concat. it into output string
// return output string
const acronym2 = str => {
    let arr = str.split(" ");
    let outputStr = "";
    // console.log(arr)
    for(let i = 0; i < arr.length; i++) {
        outputStr += arr[i][0].toUpperCase();
    }
    return outputStr;
}
console.log(acronym2("there's no free lunch - gotta pay yer way"))   // "TNFL - GPYW"
console.log(acronym2("hello world all"))   // "HWA"
console.log(acronym2("today is - a nice , day . I think"))   // "TI-AN,D.IT"
console.log(acronym2("b"))   // "B"

// APROACH 2:
// for loop the array and get the each word after space, to uppercase,
// concat. it into output string
// return output string

const acronym3 = str => {
    let outputStr = str[0].toUpperCase();
    for(let i = 0; i < str.length; i++) {
        if(str[i] === " ") {
            outputStr += str[i+1].toUpperCase();
        }
    }
    return outputStr;
}
console.log(acronym3("there's no free lunch - gotta pay yer way"))   // "TNFL - GPYW"
console.log(acronym3("hello world all"))   // "HWA"
console.log(acronym3("today is - a nice , day . I think"))   // "TI-AN,D.IT"
console.log(acronym3("b"))   // "B"