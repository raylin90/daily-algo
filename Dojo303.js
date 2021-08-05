// Create a function that, given an input string, returns a boolean whether parentheses in that string are valid.

// Example 1:"y(3(p)p(3)r)s" --> true
// Example 2: "n(0(p)3" --> false
// Example 3: "n)0(t(o)k" --> false

// hint: consider using an array or object to solve

function parensValid(str) {

    let stack = [];

    for(let i = 0; i < str.length; i++) {

        if(str[i] == "(") {
            stack.push(str[i]);
        } else if(str[i] == ")" && stack[stack.length-1] == "(") {
            stack.pop();
        } else {
            return false;
        }
    }
    
    console.log(stack);

    if(stack.length == 0){
        return true
    } else {
        return false;
    }
}

console.log(parensValid("y(3(p)p(3)r)s"));
console.log(parensValid("n(0(p)3"));
console.log(parensValid("n)0(t(o)k"));