function kangaroo(x1, v1, x2, v2) {
    // since constraints is 10000, then we can loop 10000 times
    for(let i = 0; i < 10000; i++) {
        // everytime we multiple v with i jump, and plus starting position
        if((v1 * i) + x1 === (v2 * i) + x2) {
            // anytime match, we return "YES"
            return "YES"
        }
    }
    // once loop is done, and no match, then "NO"
    return "NO";

}
console.log(kangaroo(0,3,4,2));
console.log(kangaroo(0,2,5,3));





function kangaroo(x1, v1, x2, v2) {
    // we can solve jump (y) by x1 + y * v1 = x1 + y * v2, then narrow it down to equation y = (x2-x1) / (v1 - v2);

    // since we know the constaint that x2 is always > then x1, so if v2 >= v1, then it's "NO"
    if (v2 >= v1) {
        return "NO";
    // if v1 > v2, we enter the check
    } else {
        // if our equation modules === 0, then we have match
        // ((x2-x1) % (v1-v2) === 0) ? "YES" : "NO";
        if((x2-x1) % (v1-v2) === 0) {
            return "YES";
        } else {
            return "NO"
        }
    }
}
console.log(kangaroo(0,3,4,2));
console.log(kangaroo(0,2,5,3));