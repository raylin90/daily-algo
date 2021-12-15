function timeConversion(s) {
    // seperate out the time base on hour, minutes, second and AM/PM
    let hr = s[0]+s[1];
    let min = s[3]+s[4];
    let second = s[6]+s[7];
    let time = s[8]+s[9];
    // console.log(hr,min,second,time);

    // AM/PM will read different:
    if(time === "AM") {
        // morning time: 12 == 00, 1-11 remains the same
        if(hr === "12") {
            return `00:${min}:${second}`;
        } else {
            return `${hr}:${min}:${second}`;
        }
    } else {
        // afternoon time: 12 remains 12, 1-11 need to plus 12
        if(hr === "12") {
            return `${hr}:${min}:${second}`;
        } else {
            return `${parseInt(hr)+12}:${min}:${second}`;
        }
    }
}

console.log(timeConversion("07:05:45AM"));
console.log(timeConversion("12:01:00AM"));
console.log(timeConversion("12:01:00PM"));
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:45:54PM"));
console.log(timeConversion("11:59:59PM"));