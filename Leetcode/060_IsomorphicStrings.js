// https://leetcode.com/problems/isomorphic-strings/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function(s, t) {
    
    // check input length, if length is not equal, then it's not isomorphic
    if(s.length !== t.length) return false;

    let sMap = new Map();
    let tMap = new Map();

    for(let i = 0; i < s.length; i++) {

        if(sMap.has(s[i]) && sMap.get(s[i]) !== t[i]) {
            return false;
        }

        if(tMap.has(t[i]) && tMap.get(t[i]) !== s[i]) {
            return false;
        }
        sMap.set(s[i],t[i]);
        tMap.set(t[i],s[i]);

        // console.log(sMap, tMap);
    }
    return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));