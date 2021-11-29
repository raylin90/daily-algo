const stringRotation = (str, n) => {
    let output = "";
    for(let i = str.length - n; i < str.length; i++) {
        output += str[i];
    }
    for(let i = 0; i < str.length - n; i++) {
        output += str[i];
    }
    return output;
}
// console.log(stringRotation("Hello World", 3))
// console.log(stringRotation("Hello World", 7))



const isStringRotation = (str1, str2) => {
    if(str1.length !== str2.length) return false;
    for(let i = 0; i < str1.length; i++) {
        if(stringRotation(str1, i) === str2) {
            return true;
        }
    }
    return false;
}
console.log(isStringRotation("Hello World", "rldHello Wo"))
console.log(isStringRotation("Hello World", "o WorldHell"))