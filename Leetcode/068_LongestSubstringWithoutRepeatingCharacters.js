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

    // nested for loop to run throught each element, and concat. them together, so we have every possible occurance
    for(let i = 0; i < s.length; i++) {
        for(let j = i; j < s.length; j++) {
            // concat. and add to set
            if(!set.has(s[j])) {
                tempStr += s[j];
                set.add(s[j]);
            } else {
                // else, we have a set existed already, we compare the max, and re-set tempStr and set to empty
                if(tempStr.length > max) {
                    max = tempStr.length;
                }
                tempStr = "";
                set = new Set();
                // IF WE HVAE A MATCH, THEN NO NEED TO CONTINUE THE LOOP, SINCE IT'S NOT NECESSARY, WE CAN START AGAIN AT NEXT i++
                break;
            }
            console.log(set)
        }
    }
    return max;
};

console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("aab"));
console.log(lengthOfLongestSubstring("dvdf"));





var lengthOfLongestSubstring = function(s) {

    // sliding window
    let l = 0, r = 0, max = 0;
    let set = new Set();

    while(r < s.length) {
        if(set.has(s[r])) {
            // delete left index, and move left++
            set.delete(s[l]);
            l++;
        } else {
            // add right index, and move right++
            set.add(s[r]);
            r++;
            // we can either check it after set been add, or before been removed
            max = Math.max(set.size, max)
        }
        // console.log(set);
    }
    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));