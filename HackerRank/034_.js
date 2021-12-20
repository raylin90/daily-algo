var originalDigits = function(s) {

    // empty array from index 0 - 9
    var count = Array(10).fill(0);

    // iterate the input s
    for(var i = 0; i < s.length; i++) {
        var c = s[i];
        // unique value
        // "zero" - z
        // "two" - w
        // "six" - x
        // "eight" - g
        // "four" - u
        if (c == 'z') count[0]++;
        if (c == 'w') count[2]++;
        if (c == 'x') count[6]++;
        if (c == 'g') count[8]++;
        if (c == 'u') count[4]++; 

        // non unique value
        // s
        // "seven"
        // "six"

        // f
        // "five"
        // "four"

        // h
        // "three"
        // "eight"

        // i
        // "nine"
        // "eight"
        // "five"
        // "six"

        // o
        // "one"
        // "zero"
        // "two"
        // "four"
        if (c == 's') count[7]++; //7-6
        if (c == 'f') count[5]++; //5-4
        if (c == 'h') count[3]++; //3-8
        if (c == 'i') count[9]++; //9-8-5-6
        if (c == 'o') count[1]++; //1-0-2-4
    }
    
    console.log(count);

    count[7] -= count[6];
    count[5] -= count[4];
    count[3] -= count[8];
    count[9] = count[9] - count[8] - count[5] - count[6];
    count[1] = count[1] - count[0] - count[2] - count[4];
    
    console.log(count);

    var sb = "";
    for(var i = 0; i <= 9; i++) {
        for(var j = 0; j < count[i]; j++) {
            sb+= i;
        }
    }
    return sb;
};
// console.log(originalDigits("reuonnoinfe"));
console.log(originalDigits("sixsixseven"));