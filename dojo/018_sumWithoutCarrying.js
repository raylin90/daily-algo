// add number together without carrying 10th.

const sumWithoutCarrying = (param1, param2) => {
    // convert number to string, and make them as array, reversed
    newString1 = param1.toString().split("").reverse();
    newString2 = param2.toString().split("").reverse();
    // console.log(newString1)
    // console.log(newString2)
    // set temp String variable, so we can store and concat the number when we add them up
    let tempString = "";
    // if any of the array is not empty,
    while(newString1.length && newString2.length) {
        // convert back to number
        let num1 = parseInt(newString1.shift());
        let num2 = parseInt(newString2.shift());
        // add them up and modules 10 to get the reminder
        let sum = (num1 + num2) % 10;
        // console.log(sum);
        // concat. to tempString
        tempString += sum;
        // console.log(tempString)
    }
    // once we finish the loop, we might still have string left at newString1 or new String2, we concat. the remaining to tempString.
    tempString = tempString.concat(newString1).concat(newString2);

    let stringOutput = "";
    // reverse the tempString
    for(let i = tempString.length - 1; i >= 0; i--) {
        stringOutput += tempString[i]
    }
    // output as number
    return parseInt(stringOutput);
}
console.log(sumWithoutCarrying(456,1734));