/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {

    // base case, to stop the recursion
    if(n.length === 1) {
        return parseInt(n[0]);
    }

    // add up the total
    let total = 0;
    for(let i = 0; i < n.length; i++) {
        total += parseInt(n[i]);
    }

    // since n string need to repeat k times, we times by k;
    total *= k;
    // convert back to string, so we can recursively call again
    total = total.toString();
    // console.log(total);
    // console.log(typeof(total));
    // console.log(total.length);

    // the recursive call, since we don't need to repeat n, k times, so we assume it's 1
    return superDigit(total, 1);
}
console.log(superDigit("9875",4));