// Count Down By Four
// print positive numbers starting with 2020, counting down by fours (excluding 0)
// do this with a FOR loop, and then do it using a WHILE loop afterward

// FOR Loop
const printNumsByFour = () => {
    for(let i = 2020; i > 0; i-=4) {
        console.log(i);
    }
}

printNumsByFour();

// WHILE Loop
const printNumsByFour2 = () => {
    let i = 2020;

    while(i > 0) {
        console.log(i);
        i -=4;
    }
}

printNumsByFour2();



// Flexible Countdown
// based on the countdown by fours, write a function that, given a parameters of "lowNum", "highNum", and the "mult",
// print all multiples of "mult" from "highNum" to "lowNum" using a loop
// ex: flexCount(2, 9, 3), it will print 9 6 3 on succesive lines.
// ex: flexCount(2, 16, 3), it will print 15 12 9 6 3 on succesive lines.

const flexCount = (lowNum, highNum, mult) => {

    for(let i = highNum; i >= lowNum; i--) {
        if(i % mult == 0) {
            console.log(i);
        }
    }
}

flexCount(2, 9, 3);
flexCount(2, 16, 3);



// Bases on the "Flexible Countdown"
// Given 4 parameters (param1, param2, param3, param4), print the multiples of param1, starting at param2, and extending to param3.
// There's one exception, if a multiple is equal to param4, them skip it(don't print it). Do this using a while loop.
// Ex: Given(3, 5, 17, 9), then output shold be 6, 12, 15 on succesive lines, because 6, 12 and 15 are multiples of 3, between 5 amd 17, and exludes the value of 9.

const flexCount2 = (param1, param2, param3, param4) => {

    let i = param2;

    while(i <= param3) {
        if(i % param1 == 0 && i != 9) {
            console.log(i);
        }
        i++;
    }
}

flexCount2(3, 5, 17, 9);