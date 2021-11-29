const StringToWord = str => {
    return str.split(" ");
}
console.log(StringToWord("Happy Monday Everyone!"))



const StringToWord2 = str => {
    let temp = "";
    let result = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "!") {
            continue;
        } else if(str[i] !== " ") {
            temp += str[i];
        } else {
            result.push(temp);
            temp = "";
        }
    }
    result.push(temp);
    return result;
}
console.log(StringToWord2("!Happy Mon!day Everyone!"))