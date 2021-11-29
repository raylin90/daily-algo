function timeConversion(s) {
    // seperate out the AM/PM, hh, mm, ss
    let time = s[s.length - 2] + s[s.length - 1]
    let hh = s[0] + s[1];
    let mm = s[3] + s[4];
    let ss = s[6] + s[7];
    // two logic: AM & PM
    if(time === "AM") {
        // if AM, everything remains the same, except 12 change ot 00
        if(hh === "12") {
            return `00:${mm}:${ss}`
        } else {
            return `${hh}:${mm}:${ss}`;
        }
    } else {
        // if PM, everything from 1 - 11(including 11) + 12, if it's 12, then just 12
        if(hh > 1 && hh <= 11) {
            hh = parseInt(hh) + 12;
            return `${hh}:${mm}:${ss}`
        } else {
            return `${hh}:${mm}:${ss}`;
        }
    }
    // console.log(time, hh, mm, ss)
}
console.log(timeConversion("07:05:45AM"));
console.log(timeConversion("12:01:00AM"));
console.log(timeConversion("12:01:00PM"));
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:45:54PM"));
console.log(timeConversion("11:59:59PM"));