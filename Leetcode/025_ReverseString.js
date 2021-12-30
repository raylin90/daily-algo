// https://leetcode.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
    let i = 0;
    let j = s.length - 1;

    while(i < j) {
        [s[i],s[j]] = [s[j],s[i]];
        i++;
        j--;
    }
    return s;
};
console.log(reverseString(["h","e","l","l","o"]));      // ["o","l","l","e","h"]




var reverseString = function(s) {
    for(let i = 0; i < s.length/2; i++) {
        let j = s.length - 1 - i;
        [s[i],s[j]] = [s[j],s[i]];
    }
    return s;
};
console.log(reverseString(["h","e","l","l","o"]));      // ["o","l","l","e","h"]