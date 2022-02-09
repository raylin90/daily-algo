// https://leetcode.com/problems/maximum-repeating-substring/


var maxRepeating = function(sequence, word) {

    let tempStr = word;
    let count = 0;

    while(sequence.includes(tempStr)) {
        count++;
        tempStr+=word;
    }

    return count;
};
console.log(maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba"));