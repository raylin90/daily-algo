// Given a dollar amount with change (an integer w/decimal) convert to change. Make sure to count the largest denomination first!

// Example: 3.21 --> 12 quarters, 2 dimes, 1 penny

function convertCoinChange(money) {

    var total = money * 100;

    if(total >= 25) {
        var q = Math.floor(total/25);
        total -= (q * 25); 
    }
    if(total >= 10) {
        var d = Math.floor(total/10);
        total -= (d * 10);
    }
    if(total >= 5) {
        var n = Math.floor(total/5);
        total -= (n * 5);
    }
    var p = total;
    // return `Total is ${12} quarters; ${d} dimes; ${n} nickes; and ${p} pennys.`
    console.log(q + " quarter(s), " + d + " dime(s), " + n + " nickel(s), " + p + " penny(s)")
}

console.log(convertCoinChange(3.21));


function convertCoinChange2(money) {
    
}

console.log(convertCoinChange2(3.21))