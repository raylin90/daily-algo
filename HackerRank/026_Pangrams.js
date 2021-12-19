function pangrams(s) {
    // create the obj to store each alphabet, if the obj length === 26, then we have pangram
    let obj = {};

    // make s to lower case, to avoid case sensitive
    s = s.toLowerCase();

    // iterate the s input, and store each char into obj
    for(let i = 0; i < s.length; i++) {
        // check each char is alphabet according to regex
        if(s[i].match(/[a-z]/)) {
            if(!obj[s[i]]) {
                obj[s[i]] = 1;
            }
        }
    }
    
    // console.log(obj);
    // check obj length, if it's 26 char, then it's pangrams
    // console.log(Object.keys(obj).length);
    if(Object.keys(obj).length === 26) {
        return "pangram";
    } else {
        return "not pangram";
    }
}
console.log(pangrams("The quick brown fox jumps over the lazy dog"));





function pangrams(s) {
    // make s to lower case, to avoid case sensitive
    s = s.toLowerCase();

    // 26 alphabet letter
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // iterate the input s, and if it's latter, to double check the alphabet array, if exist, splice it
    for(const char of s) {
        if(char.match(/[a-z]/)) {
            for(let i = 0; i < alphabet.length; i++) {
                if(alphabet[i] === char) {
                    alphabet.splice(i, 1);
                }
            }
        }
    }

    // console.log(alphabet);
    // if alphabet's length is 0. then we have pangram
    if(alphabet.length === 0) {
        return "pangram";
    } else {
        return "not pangram";
    }
}
console.log(pangrams("The quick brown fox jumps over the lazy dog"));