// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {

    if(s.length === 1) return 1
    
    let tempStr = "";
    let set = new Set();
    let max = 0;

    for(let i = 0; i < s.length; i++) {
        for(let j = i; j < s.length; j++) {
            if(!set.has(s[j])) {
                tempStr += s[j];
                set.add(s[j]);
            } else {
                if(tempStr.length > max) {
                    max = tempStr.length;
                }
                tempStr = "";
                set = new Set();
                break;
            }
            // console.log(set)
        }
    }
    return max;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("aab"));
console.log(lengthOfLongestSubstring("dvdf"));





var lengthOfLongestSubstring = function(s) {
    
    let set = new Set();
    let count = 0;
    let max = 0;

    for(const char of s) {
        // console.log(char);
        if(!set.has(char)) {
            count++;
            set.add(char);
        } else {
            if(count > max) {
                max = count;
            }

            // edge case: "aab"
            count = 1;
            set = new Set();
            set.add(char);
        }
        console.log(count, max)
        console.log(set);
    }
    return max > count ? max : count;
};
// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("aab"));
console.log(lengthOfLongestSubstring("dvdf"));




var lengthOfLongestSubstring = function(s) {
    let l = 0, r = 0, max = 0
    let set = new Set()
    
    while(r < s.length) {
        if (set.has(s.charAt(r))) {
            set.delete(s.charAt(l++)) // Important! explained below
        } else {
            set.add(s.charAt(r++))
            max = Math.max(max, set.size)
        }
    }
    
    return max
};