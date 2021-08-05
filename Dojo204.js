// How to swap variables
var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
    
console.log(fruit2 + " and " + fruit1);
// output:
// apple and apple



// What do we expect to get back?
var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);
// output: 
// apples and orange



// While loops
var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}
// output: 
// 0 - 12
// 2 - 10
// 4 - 8



// Reversing an array
const reverse = arr => {
    for(let left = 0; left < arr.length/2; left++) {
        let right = arr.length - 1 - left;
        [arr[left], arr[right]] = [arr[right], arr[left]];
    }
    return arr;
}

console.log(reverse(["a", "b", "c", "d", "e", "f"]));