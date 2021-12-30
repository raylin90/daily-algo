// https://leetcode.com/problems/implement-strstr/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}

1. cheat-way, use build-in indexOf, to find the first occurance
2. nested for loop
    a. first run on haystack, if if haystack[i] matching with needgle[0]
    b. inner run on needle, to check needle[j] with haystack[i+j]
    c. need var to hold allCharsMatch = true, any time flase, stop the inner loop and continue with next haystack[i]
3. for loop once on haystack
    a. anytime haystack[i] === needle[0], slice out from i to i + needle.length, compare
    b. if match, return i
 */

var strStr = function(haystack, needle) {
    // if neegle is empty
    if(needle.length < 1) return 0;
    // else return the firset occurance
    return haystack.indexOf(needle)
};
console.log(strStr("hello","ll"));      // 2
console.log(strStr("aaaaa","bba"));      // -1
console.log(strStr("",""));      // 0





var strStr = function(haystack, needle) {

    // if neegle is empty
    if(needle.length < 1) return 0;
    
    // first loop to run through the haystack, and find if any index match to needle[0]
    for(let i = 0; i < haystack.length; i++) {

        if(haystack[i] === needle[0]) {

            let match = true;

            // if we found it, run a inner loop, but this time, running on needle
            for(let j = 0; j < needle.length; j++) {
                // console.log(needle[j], "j")
                // console.log(haystack[i+j], "i+j")

                // if we find any unmatch, we stop the inner loop, and continue with next i;
                if(needle[j] !== haystack[i+j]) {
                    match = false;
                    break;
                }
            }
            // only return i when all words matching
            if(match) {
                return i;
            }
        }
    }
    return -1;
};
console.log(strStr("mississippi","issip"));      // 4
console.log(strStr("hello","ll"));      // 2
console.log(strStr("aaaaa","bba"));      // -1
console.log(strStr("",""));      // 0




var strStr = function(haystack, needle) {

    // edge case: if neegle is empty
    if(needle.length < 1) return 0;
    if(haystack === needle) return 0;

    for(let i = 0; i < haystack.length; i++) {
        // console.log(haystack[i])
        if(haystack[i] === needle[0]) {
            // console.log(haystack[i])
            // console.log(haystack.slice(i,needle.length+i))
            if(haystack.slice(i,needle.length+i) === needle) {
                return i;
            }
        }
    }
    return -1;
};
console.log(strStr("mississippi","issip"));      // 4
console.log(strStr("hello","ll"));      // 2
console.log(strStr("aaaaa","bba"));      // -1
console.log(strStr("",""));      // 0
console.log(strStr("abc","c"));      // 2