// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. 

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[]}}(){}{()}" --> true

// hint: consider using an array or object to solve

function bracesValid(str) {

    let stack = [];

    for(let i = 0; i < str.length; i++) {
        if(str[i] == "(" || str[i] == "{" || str[i] == "[") {
            stack.push(str[i]);
        } else if (str[i] == ")" && stack[stack.length-1] == "(") {
            stack.pop();
        } else if (str[i] == "}" && stack[stack.length-1] == "{") {
            stack.pop();
        } else if (str[i] == "]" && stack[stack.length-1] == "[") {
            stack.pop();
        } else if (str[i] == ")" || str[i] == "}" || str[i] == "]") {
            return false;
        }
    }

    if(stack.length == 0) {
        return true;
    } else {
        return false;
    }

}

console.log(bracesValid("({[({})]})"))
console.log(bracesValid("d(i{a}l[t]o)n{e!"))
console.log(bracesValid("{{[]}}(){}{()}"))