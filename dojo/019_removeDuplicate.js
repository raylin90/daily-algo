const removeDuplicate = str => {
    let obj = {};
    let output = "";
    for(let i = 0; i < str.length; i++) {
        if(!obj[str[i]]) {
            output += str[i];
            obj[str[i]] = 1;
        }
    }
    return output;
}
console.log(removeDuplicate("Alabama")) // Alabm
console.log(removeDuplicate("Hello World")) // Helo Wrd
console.log(removeDuplicate("Good morning all")) // God mrnigal




const removeDuplicate2 = str => {
    let output = "";
    for(let i = 0; i < str.length; i++) {
        if(!output.includes(str[i])) {
            output += str[i];
        }
    }
    return output;
}
console.log(removeDuplicate2("Alabama")) // Alabm
console.log(removeDuplicate2("Hello World")) // Helo Wrd
console.log(removeDuplicate2("Good morning all")) // God mrnigal