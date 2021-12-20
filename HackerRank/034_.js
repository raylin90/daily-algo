

const jumbledNumers = str => {
    let obj = {};

    for(let i = 0; i < str.length; i++) {
        if(!obj[str[i]]) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]]++;
        }
    }

    let output = [];
    console.log(obj)
    console.log(Object.keys(obj).length);

    while(Object.keys(obj)) {
        if(obj["z"]) {
            output.push(0);
            obj["z"] --;
            obj["e"] --;
            obj["r"] --;
            obj["0"] --;
        }
        if(obj["x"]) {
            output.push(6);
            obj["s"] --;
            obj["i"] --;
            obj["x"] --;
        }
        if(obj["g"]) {
            output.push(8);
            obj["e"] --;
            obj["i"] --;
            obj["g"] --;
            obj["h"] --;
            obj["t"] --;
        }
    }

    console.log(output)
}
// console.log(jumbledNumers("reuonnoinfe"));
console.log(jumbledNumers("zeergihstiox"));





// "zero" - z
// "six" - x
// "two" - w
// "eight" - g
// "four" - u


// "five" - f
// "seven" - v

// "one" - o
// "three" - h
// "nine" - n