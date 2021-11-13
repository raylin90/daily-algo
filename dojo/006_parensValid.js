// create a function that, given an input string, returns a boolean whether parenthese in that string are valid.
// Ex1: "y(3(p)p(3)r)s" => true
// Ex2: "n(0(p)3" => false
// Ex3: "n)0(t(o)k" => false

// input is string, and output boolean
// we might use array OR object to hold the parens and compare
// assume the string going to have at least a opening/closing parans
const parensValid = str => {

}
console.log(parensValid("y(3(p)p(3)r)s")) // true
console.log(parensValid("n(0(p)3")) // false
console.log(parensValid("n)0(t(o)k")) // false



// APPROACH 1:
// for loop the string
//      if we encouter "(", we save it to array variable
//      else if we encouter ")", and last element of our array is "("
//          then we have a match, so we can remove last element from array
//      else we encouter ")" first, then it's not match for sure
// once we finish the loop, and we can check array.length
// if length is 0, then true else false
const parensValid1 = str => {
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
console.log(parensValid1("y(3(p)p(3)r)s")) // true
console.log(parensValid1("n(0(p)3")) // false
console.log(parensValid1("n)0(t(o)k")) // false


// APPROACH 2:
// create obj of { "(" }
// for loop the string
//      if we encouter "(", obj ++
//      else if we encouter ")", we obj --
//      we want to to a check inside if obj value < 0, return false
// once we finish the loop, and we can check if obj value is === 0
// if value is 0, then true else false
const parensValid2 = str => {
    let obj = {
        "(" : 0,
    };
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
console.log(parensValid2("y(3(p)p(3)r)s")) // true
console.log(parensValid2("n(0(p)3")) // false
console.log(parensValid2("n)0(t(o)k")) // false