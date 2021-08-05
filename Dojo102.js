// Write some code that loops through an array and prints the value out.
// Ex: given var arr = [1, 5, 8, 2, 6], your console should print out:
// 1
// 5
// 8
// 2
// 6

const printArray = arr => {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printArray([1, 5, 8, 2, 6]);



// Values Greater Than Second
// Given an array [2, 5, 19, 3, 10, 9], your second value is 5 and the number of values greater than 5 in the array is 3.
// Given an array [4, 3, 10, 1, 6, 9, 2], your second value is 6 and the number of values greater than 6 in the array is 4.

const valuesGreaterThanSecond = arr => {
    
    let counter = 0;

    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] > arr[1]){
            counter++;
        }
    }
    console.log(counter);
}

valuesGreaterThanSecond([2, 5, 19, 3, 10, 9]);
valuesGreaterThanSecond([4, 3, 10, 1, 6, 9, 2]);



// Add a feature that makes sure the array is large enought before running.
// Ex: if your array only has [2].. we don't have enough value -- in this situation, return "Not Enough Values"

const valuesGreaterThanSecond2 = arr => {
    
    let counter = 0;

    if(arr.length < 2){
        console.log("Not Enough Values");
    } else{
        for(let i = 0; i <= arr.length; i++) {
            if(arr[i] > arr[1]){
                counter++;
            }
        }
        console.log(counter);
    }
}

valuesGreaterThanSecond2([2, 5, 19, 3, 10, 9]);
valuesGreaterThanSecond2([2]);