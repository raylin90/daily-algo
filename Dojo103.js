// Evens and Odds
// create a function that accepts an array of numbers. Every time that array has 3 odd values in a row, print "that's odd!". Everytime the array has 3 even values in a row, print "Even more so!"
// Only print the messages that it's 3 in a row. If there are 5 consecutive odd values, for example, it should only print the message one time. If there're 7 consecutive even values, it shuold only print the message twice.

// EX:
// [1, 2, 5, 8, 8, 8]
// output:
// Even more so!

// [1, 2, 3, 4, 5, 6, 7, 8]
// output:
// 

// [2, 2, 1, 1, 6, 6, 5, 5, 5, 5, 5, 5]
// output:
// That's odd!
// That's odd!

// [1, 1, 2, 1, 1, 3, 3]
// output:
// That's odd!

const oddsAndEvens = arr => {

    let oddCounter = 0;
    let evenCounter = 0;
    
    for(let i = 0; i < arr.length; i++) {

        if(arr[i] % 2 == 0){
            evenCounter++;
            oddCounter = 0;
        } else {
            oddCounter ++;
            evenCounter = 0;
        }

        if(oddCounter == 3){
            console.log("That's odd!")
            oddCounter = 0;
        }

        if(evenCounter == 3){
            console.log("Even more so!")
            evenCounter = 0;
        }
    }
}

oddsAndEvens([1, 2, 5, 8, 8, 8]);
oddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8]);
oddsAndEvens([2, 2, 1, 1, 6, 6, 5, 5, 5, 5, 5, 5]);
oddsAndEvens([1, 1, 2, 1, 1, 3, 3]);




// REDO:
const oddsAndEvens2 = arr => {

    let oddCounter2 = 0;
    let evenCounter2 = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            evenCounter2++;
            oddCounter2 = 0;
        } else {
            oddCounter2++;
            evenCounter2 = 0;
        }

        if(evenCounter2 == 3) {
            console.log("Even more so!");
            evenCounter2 == 0;
        }
        if(oddCounter2 == 3) {
            console.log("That's odd!");
            oddCounter2 = 0;
        }
    }
}
oddsAndEvens2([1, 2, 5, 8, 8, 8]);
oddsAndEvens2([1, 2, 3, 4, 5, 6, 7, 8]);
oddsAndEvens2([2, 2, 1, 1, 6, 6, 5, 5, 5, 5, 5, 5]);
oddsAndEvens2([1, 1, 2, 1, 1, 3, 3]);