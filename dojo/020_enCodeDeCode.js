const enCode = str => {
    let output = "";
    let count = 1;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[i+1]) {
            count++;
        } else {
            output += str[i] + count;
            count = 1;
        }
    }
    return output;
}
console.log(enCode("aaabbbbcccddddddeeef")) // a3b4c3d6e3f1
console.log(enCode("aaaabbbccddd")) // a4b3c2d3



const deCode = str => {
    let output = "";
    let count = "";
    let letter = "";
    for(let i = 0; i < str.length; i++) {

        if(isNaN(str[i])) {
            letter = str[i];
        } else {
            count = str[i]
            // is number:
            while(!isNaN(str[i+1])) {
                count += str[i+1];
                i++;
            }
            console.log(count);
            for(let j = 0; j < parseInt(count); j++) {
                output += letter;
            }
        }
    }
    return output;
}
console.log(deCode("a3b4c100d6e2f11"))