// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. 

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[]}}(){}{()}" --> true

// hint: consider using an array or object to solve

const bracesValid = str => {

}

console.log(bracesValid("({[({})]})"))
console.log(bracesValid("d(i{a}l[t]o)n{e!"))
console.log(bracesValid("{{[]}}(){}{()}"))

// APPROACH 1:
const bracesValid1 = str => {
    let arr = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "(" || str[i] === "[" || str[i] === "{") {
            arr.push(str[i]);
        } else if(str[i] === ")" && arr[arr.length - 1] === "(") {
            arr.pop();
        } else if(str[i] === "]" && arr[arr.length - 1] === "[") {
            arr.pop();
        } else if(str[i] === "}" && arr[arr.length - 1] === "{") {
            arr.pop();
        } else if(str[i] === ")" || str[i] === "]" || str[i] === "}") {
            return false;
        }
    }
    if(arr.length === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(bracesValid1("({[({})]})")) // true
console.log(bracesValid1("d(i{a}l[t]o)n{e!")) // false
console.log(bracesValid1("{{[]}}(){}{()}")) // true


// APPROACH 2:
const bracesValid2 = str => {
    let obj = {
        "(" : 0,
        "[" : 0,
        "{" : 0,
    }
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "(") {
            obj["("] ++;
        } else if(str[i] === "[") {
            obj["["] ++;
        } else if(str[i] === "{") {
            obj["{"] ++;
        } else if(str[i] === ")") {
            obj["("] --;
        } else if(str[i] === "]") {
            obj["["] --;
        } else if(str[i] === "}") {
            obj["{"] --;
        }
        if(obj["("] < 0 && obj["["] < 0 && obj["{"] < 0) {
            return false;
        }
    }
    if(obj["("] === 0 && obj["["] === 0 && obj["{"] === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(bracesValid2("({[({})]})")) // true
console.log(bracesValid2("d(i{a}l[t]o)n{e!")) // false
console.log(bracesValid2("{{[]}}(){}{()}")) // true
console.log(bracesValid2("A(1)s[O (n]0{t) 0}k"));    // false