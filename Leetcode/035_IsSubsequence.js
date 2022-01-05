// https://leetcode.com/problems/is-subsequence/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}

1. two pointer, keep looping both string, if element ===, then incraese both idx, otherwise just increase one idx
2. one loop, extra pointer to keep track of sIdx
 */

var isSubsequence = function(s, t) {
    
    // two pointer to keep track of index
    let i = 0;
    let j = 0;

    // loop through both string
    while(i < s.length && j < t.length) {
        // console.log(s[i],t[j]);

        // if idx equal, then increase both pointer
        if(s[i] === t[j]) {
            i++;
            j++;
        // otherwise, we only increase j because we check i idx against j
        } else {
            j++;
        }
    }
    // if we have amatch, i should ++ at last loop, and === to s input length
    if(i === s.length) {
        return true;
    } else {
        return false;
    }
};
console.log(isSubsequence("abc","ahbgdc"));     // true
console.log(isSubsequence("axc","ahbgdc"));     // false
console.log(isSubsequence("acb","ahbgdc"));     // false





var isSubsequence = function(s, t) {
    
    // one pointer to keep track of s index
    let sIdx = 0;

    // one way loop to go through t input, and compare with s[sIdx]
    for(let i = 0; i < t.length; i++) {
        if(t[i] === s[sIdx]) {
            sIdx++;
        }
    }

    return sIdx === s.length ? true : false
};
console.log(isSubsequence("abc","ahbgdc"));     // true
console.log(isSubsequence("axc","ahbgdc"));     // false
console.log(isSubsequence("acb","ahbgdc"));     // false