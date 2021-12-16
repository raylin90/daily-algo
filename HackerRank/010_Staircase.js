function staircase(n) {
    // output to hold the string result;
    let output = "";

    // nest loop
    // fist loop run n times, so we can create n lines
    for(let i = 1; i <= n; i++) {
        // i variable will be draw # sign
        // set emptySpace varible to draw the space
        let emptySpace = n - i;
        // console.log(i)
        // console.log(emptySpace)

        // inner loop to draw the space
        for(let j = 0; j < emptySpace; j++) {
            // log the space
            output += " ";
        }

        // inner loop to draw the # sign
        for(let k = emptySpace; k < n; k++) {
            // log # sign
            output += "#";
        }

        // after each loop, we make a new line;
        output += ("\n");
    }
    console.log(output);
}
console.log(staircase(6));