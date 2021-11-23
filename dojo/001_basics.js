// print positive numbers starting with 2020, counting down by 4 (excluding 0)
const printByFour = () => {
    for(let i = 2020; i > 0; i-=4) {
        console.log(i);
    }
}
printByFour();

const printByFour2 = () => {
    let i = 2020;
    while(i > 0) {
        console.log(i);
        i-=4;
    }
}
printByFour2();



// give parameters of "lowNum", "highNum", and "mult"; print all multiples of "mult" from "highNum" to "lowNum" using for loop
const flexCountDown = function(lowNum, highNum, mult) {
    for(let i = highNum; i >= lowNum; i--) {
        if(i % mult === 0) {
            console.log(i);
        }
    }
}
flexCountDown(2,9,3);
flexCountDown(2,16,3);



// given 4 params (param1, param2, param3, param4), print multiples of param1, startig at param2, and extending to param3. But if multiple is equal to param4, skip it
const anotherCount = function(param1, param2, param3, param4) {
    let i = param2;
    while(i <= param3) {
        if(i % param1 === 0) {
            if(i !== param4) {
                console.log(i)
            }
        }
        i++;
    }
}
anotherCount(3,5,17,9);



// loop through array
const printArray = arr => {
    for(let i = 0; i< arr.length; i++) {
        console.log(arr[i]);
    }
}
printArray([1,5,8,2,6]);



// return value greater than second index
const greatThanSecond = arr => {
    if(arr.length <= 1) {
        console.log("array not long enough");
        return false;
    }
    let counter = 0;
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] > arr[1]) {
            counter++;
        }
    }
    console.log(counter);
}
greatThanSecond([2,5,19,3,10,9]);
greatThanSecond([4,3,10,1,6,9,2]);
greatThanSecond([2, 1]);



// 3 evens or odd in a row
const countEvensAndOdd = arr => {
    let evenCounter = 0;
    let oddCounter = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            evenCounter++;
            oddCounter = 0;
        } else {
            oddCounter++;
            evenCounter = 0;
        }
        if(evenCounter === 3) {
            console.log("even more so!");
            evenCounter = 0;
        } else if(oddCounter === 3) {
            console.log("that's odd");
            oddCounter = 0;
        }
    }
}
countEvensAndOdd([1, 2, 5, 8, 8, 8]);
countEvensAndOdd([1, 2, 3, 4, 5, 6, 7, 8]);
countEvensAndOdd([2, 2, 1, 1, 6, 6, 5, 5, 5, 5, 5, 5]);
countEvensAndOdd([1, 1, 2, 1, 1, 3, 3]);



// always hungry
const alwaysHunry = arr => {
    let hungry = true;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "food") {
            console.log("yummy");
            hungry = false;
        }
    }
    hungry ? console.log("I'm hungry") : "";
}
alwaysHunry([1,3,"food","hello",true,"food"]);
alwaysHunry([2, true,5,"hello",8,"four"]);