// https://www.hackerrank.com/challenges/caesar-cipher-1/problem?h_r=internal-search

/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    let alphabet = `abcdefghijklmnopqrstuvwxyz`;
    let alphabetArr = alphabet.split('')
    let rotatedAlphabetArr = [...alphabetArr]

    while(k>0){
        let item = rotatedAlphabetArr.shift()
        rotatedAlphabetArr.push(item)
        k--
    }
    let encryptedString = s.split('').reduce((prev,curr)=>{
        if(/[A-Z]/.test(curr)){
            prev += rotatedAlphabetArr[alphabetArr.indexOf(curr.toLowerCase())].toUpperCase()
        }else{
            prev += rotatedAlphabetArr[alphabetArr.indexOf(curr)]?rotatedAlphabetArr[alphabetArr.indexOf(curr)] : curr
        }
        return prev
    },``)
    return encryptedString
}






function caesarCipher(s, k) {
    let resultArray = [];
    for(let i=0; i<s.length; i++){
        let charcode = s.charCodeAt(i);
        console.log(charcode);
        let code;
        //if charcode is in lowercase alphabet
        if(charcode >= 97 && charcode <=122){
            code = charcode + k;
            while(code > 122){
                code = (code-122)+96;
            }
        } else if(charcode >= 65 && charcode <=90){
            //uppercase alphabet
            code = charcode + k;
            while(code >90){
                code = (code-90)+64;
            }
        } else {
            //if code isnt a letter in the alphabet
            code = charcode;
        }

        
        resultArray.push(String.fromCharCode(code));
    }
    return resultArray.join('');
}
console.log(caesarCipher("abcdefghijklmnopqrstuvwxyz", 3))



const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => {
    console.log(previousValue)
    console.log(currentValue)
}