// Given a dollar amount with change (an integer w/decimal) convert to change. Make sure to count the largest denomination first!

// Example: 3.21 --> 12 quarters, 2 dimes, 1 penny
    // q : 25
    // d: 10
    // n: 5
    // p: 1

const convertCoinChange = amount => {
    // set total to * 100 for easy calculation
    var total = amount * 100;
    // set initial variable, to hold the count
    let q = 0;
    let d = 0;
    let n = 0;
    let p = 0;
    // if total is bigger/equal to 25, we want to get the q amount, and subtract it from total, then repeat for d, n, and p
    if(total >= 25) {
        q = Math.floor(total / 25);
        total = total - q * 25
    }
    if(total >= 10) {
        d = Math.floor(total / 10);
        total = total - d * 10;
    }
    if(total >= 5) {
        n = Math.floor(total / 5);
        total = total - n * 5;
    }
    p = total;
    return `${q} quarter(s), ${d} dime(s), ${n} dime(s), ${p} penny(s)`;
}

console.log(convertCoinChange(3.21));


// set up as obj to calculate the change
function convertCoinChange2(amount) {
    // set initial chart as object
    let chart = {
        "q" : 0,
        "d" : 0,
        "n" : 0,
        "p" : 0,
    }
    // set total to * 100 for easy calculation
    var total = amount * 100;
    // set the obj key : value pair and find the remaining
    chart.q = Math.floor(total / 25)
    total = total % 25;
    chart.d = Math.floor(total / 10)
    total = total % 10;
    chart.n = Math.floor(total / 5)
    total = total % 5;
    chart.p = total;

    return chart;
}

console.log(convertCoinChange2(3.21));