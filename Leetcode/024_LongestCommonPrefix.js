// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}

1. take the first word as prefix first
    a. first loop to loop rest of input array
    b. second loop to check each element in prefix to input array element
    c. if match, no need to do anything,
    d. if no match, we need to short prefix from 0 to j point

 */

let longestCommonPrefix = function(strs) {

    if(strs.length === 0) return "";

    // set the prefix as first word of the input array
    let prefix = strs[0];
    // console.log(prefix);
    
    // first loop run through the rest of the input array
    for(let i = 1; i < strs.length; i++) {

        let currentWord = strs[i];
        // inner loop to iterate the prefix
        for(let j = 0; j < prefix.length; j++) {

            // if match, we keep going, if no match, then we replace the prefix word from 0 index to j (which j is not included)'
            if(prefix[j] !== currentWord[j]) {
                prefix = prefix.slice(0,j);
                console.log(prefix)
            }
        }
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));       // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"]));       // ""