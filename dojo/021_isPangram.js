const isPangram = str => {
    if(str.length < 26) return false;
    str = str.toLowerCase();
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < alphabet.length; j++) {
            if(str[i] === alphabet[j]) {
                alphabet.splice(j, 1);
            }
        }
    }
    // console.log(alphabet)
    if(alphabet.length === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isPangram("Hello World"));
console.log(isPangram("This is a sentence that contains more than 26 letters"));
console.log(isPangram("The quick brown fox jumps over a lazy dog"));



const isPangram2 = str => {
    if(str.length < 26) return false;

    str = str.toLowerCase();
    // const regex = /[a-z]/;

    let obj = {};
    for(let i = 0; i < str.length; i++) {
        if(str[i].match(/[a-z]/)) {
            if(!obj[str[i]]) {
                obj[str[i]] = 1;
            }
        }
    }
    if(Object.keys(obj).length === 26) {
        return true;
    } else {
        return false;
    }
}
console.log(isPangram2("Hello World"));
console.log(isPangram2("This is a sentence that contains more than 26 letters"));
console.log(isPangram2("The quick brown fox jumps over a lazy dog"));






const isPerfectPangram = str => {
    if(str.length < 26) return false;

    str = str.toLowerCase();
    let obj = {};
    for(let i = 0; i < str.length; i++) {
        if(str[i].match(/[a-z]/)) {
            if(!obj[str[i]]) {
                obj[str[i]] = 1;
            } else {
                obj[str[i]]++;
            }
        }
    }
    // console.log(Object.keys(obj).length);
    // console.log(obj);

    if(Object.keys(obj).length !== 26) {
        return false;
    } else {
        for(const key in obj) {
            if(obj[key] > 1) {
                return false;
            }
        }
        return true;
    }
}
// console.log(isPerfectPangram("Hello World"));
// console.log(isPerfectPangram("This is a sentence that contains more than 26 letters"));
console.log(isPerfectPangram("The quick brown fox jumps over a lazy dog"));
console.log(isPerfectPangram("abcdefghijklmnopqrstuvwxyz"));