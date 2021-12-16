function simpleArraySum(ar) {
    // base case to stop recursion
    if(ar.length === 1) return ar[0];
    // remove the first element, and recursive call the function again
    return ar.shift() + simpleArraySum(ar);
}
console.log(simpleArraySum([1,2,3,4,10,11]));