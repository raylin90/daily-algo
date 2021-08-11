// Create a function that, given an input string, returns a boolean whether parentheses in that string are valid.

// Example 1:"y(3(p)p(3)r)s" --> true
// Example 2: "n(0(p)3" --> false
// Example 3: "n)0(t(o)k" --> false

// hint: consider using an array or object to solve

function parensValid(str) {
    // empty stack array to hold the parentheses, and compare
    let stack = [];
    // for loop the array
    for(let i = 0; i < str.length; i++) {
        // if str[i] is (, then we push it to an array, for later comparison
        if(str[i] == "(") {
            stack.push(str[i]);
        // if str[i] is ), and stack last index happen to be the (, then we have a pair, so we can pop the stack last index from array list
        } else if(str[i] == ")" && stack[stack.length-1] == "(") {
            stack.pop();
        // if we encounter ) at first, then we can just return false directly
        } else if(str[i] == ")") {
            return false;
        }
    }

    // once for loop is done, if stack is empty, then we have perfect match, otherwise, no match
    if(stack.length == 0) {
        return true;
    } else {
        return false;
    }

}

console.log(parensValid("y(3(p)p(3)r)s"));
console.log(parensValid("n(0(p)3"));
console.log(parensValid("n)0(t(o)k"));





// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. 

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[]}}(){}{()}" --> true

// hint: consider using an array or object to solve


function bracesValid(str) {

    // empty stack array to hold the parentheses, and compare later
    let stack = [];
    // for loop the str list, so we can get the parentheses/brace/bracket to compare
    for(let i = 0; i < str.length; i++) {
        // if we encouter (, [, {, then we push it to the stack
        if(str[i] == "(" || str[i] == "{" || str[i] == "[") {
            stack.push(str[i]);
        // if we encouter ) and last of stack is (, then we do a pop
        } else if(str[i] == ")" && stack[stack.length - 1] == "(") {
            stack.pop();
        // if we encouter ] and last of stack is [, then we do a pop
        } else if(str[i] == "]" && stack[stack.length - 1] == "[") {
            stack.pop();
        // if we encouter } and last of stack is {, then we do a pop
        } else if(str[i] == "}" && stack[stack.length - 1] == "{") {
            stack.pop();
        } else if(str[i] == ")" || str[i] == "}" || str[i] == "]") {
            return false;
        }
    }

    // once for loop is done, if stack is empty, then we have perfect match, otherwise, no match
    if(stack.length == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(bracesValid("({[({})]})"))
console.log(bracesValid("d(i{a}l[t]o)n{e!"))
console.log(bracesValid("{{[]}}(){}{()}"))