
// Given a dollar amount with change (an integer w/decimal) convert to change. Make sure to count the largest denomination first!
// Example: 3.21 --> 12 quarters, 2 dimes, 1 penny
const cionChange1 = amount => {
    let total = amount * 100;
    let q = 0;
    let d = 0;
    let n = 0;
    let p = 0;

    q = Math.floor(total / 25);
    total = total - q * 25;
    d = Math.floor(total / 10);
    total = total - d * 10;
    n = Math.floor(total / 5);
    total = total - n * 5;
    p = total;
    return `change is ${q} quarters ${d} dimes ${n} nickes ${p} pennies`
}
console.log(cionChange1(3.21));


const cionChange2 = amount => {
    let total = amount * 100;
    let change = {
        "q" : 0,
        "d" : 0,
        "n" : 0,
        "p" : 0,
    }

    change["q"] = Math.floor(total / 25);
    total = total - change["q"] * 25;
    change["d"] = Math.floor(total / 10);
    total = total - change["d"] * 10;
    change["n"] = Math.floor(total / 5);
    total = total - change["n"] * 5;
    change["p"] = total;
    return `change is ${change["q"]} quarters ${change["d"]} dimes ${change["n"]} nickes ${change["p"]} pennies`
}
console.log(cionChange2(3.21));