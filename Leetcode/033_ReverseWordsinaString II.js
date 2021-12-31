// https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function(s) {

    s = s.split(" ");
    // console.log(s);

    // for loop the array, each word, split again, reverse, and join back
    for(let i = 0; i < s.length; i++) {
        s[i] = s[i].split("").reverse().join("");
    }
    return s.join(" ");
};
console.log(reverseWords("Let's take LeetCode contest"));        // "s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords("God Ding"));        // "doG gniD"


