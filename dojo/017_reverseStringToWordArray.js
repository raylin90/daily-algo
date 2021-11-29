const reverseStringToWord = str => {
    let arr = str.split(" ").reverse().join("")
    return arr;
}
console.log(reverseStringToWord("Happy Monday Everyone!"))



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

const reverseStringToWord2 = str => {
    let arr = StringToWord2(str)
    for(let i = 0; i < arr.length / 2; i++) {
        let j = arr.length - 1 - i;
        [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    return arr;
}
console.log(reverseStringToWord2("Happy Monday Everyone!"))