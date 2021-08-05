// create a function that, given a string, returns the string's acronym (first letter onlu, capitalized)
// ex: there's no free lunch - gotta pay yer way" ---> "TNFL - GPYW"

const acronym = str => {

    let arr = str.split(" ");
    let newStr = "";

    for(let i = 0; i < arr.length; i ++) {
        newStr += arr[i][0].toUpperCase();
    }
    return newStr;
}

console.log(acronym("there's no free lunch - gotta pay yer way"));