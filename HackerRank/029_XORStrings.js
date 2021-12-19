const stringsXOR = (str1, str2) => {
    // output var to hold the result
    let output = "";

    // for loop the str1, since the length is same, we can use same index to referecne each string element
    for(let i = 0; i < str1.length; i++) {
        // if index element is equal, which means it's false, then 0
        if(str1[i] === str2[i]) {
            output += "0";
        } else {
        // if not equal, then means true, then 1
            output += "1";
        }
    }
    return output;
}
console.log(stringsXOR("10101","00101"));