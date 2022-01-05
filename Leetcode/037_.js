/**
 * @param {string[]} strs
 * @return {string}
 */

let longestCommonPrefix = function(strs) {
    let prefix = strs[0];

    for(let i = 1; i < strs.length; i++) {
        // console.log(strs[i]);
        for(let j = 0; j < strs[i].length; j++) {

            // console.log(strs[i][j])
            // console.log(prefix[j])
            if(strs[i][j] !== prefix[j]) {
                // console.log(prefix.slice(0, j));
                prefix = prefix.slice(0, j);
                // console.log("ha")
            }
        }
    }
    return prefix;
};
console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
