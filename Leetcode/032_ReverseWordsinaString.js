// https://leetcode.com/problems/reverse-words-in-a-string/

/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function(s) {
    // split the string into array, filter out only work, not empty space
    s = s.split(" ").filter(word => word);
    // console.log(s)

    for(let i = 0; i < s.length/2; i++) {
        let j = s.length - 1 - i;
        [s[i],s[j]] = [s[j],s[i]];
    }

    return s.join(" ");
};
console.log(reverseWords("the sky is blue"));        // "blue is sky the"
console.log(reverseWords("  hello world  "));        // "world hello"
console.log(reverseWords("a good   example"));        // "example good a"





var reverseWords = function(s) {
    // split by remove whitepace first using regex
    s = s.replace(/^\s+|\s+$/g, "").split(" ");
    // console.log(s)

    for(let i = 0; i < s.length/2; i++) {
        let j = s.length - 1 - i;
        [s[i],s[j]] = [s[j],s[i]];
    }

    return s.join(" ");
};
console.log(reverseWords("the sky is blue"));        // "blue is sky the"
console.log(reverseWords("  hello world  "));        // "world hello"
console.log(reverseWords("a good   example"));        // "example good a"