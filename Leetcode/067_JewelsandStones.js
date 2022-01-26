// https://leetcode.com/problems/jewels-and-stones/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

var numJewelsInStones = function(jewels, stones) {
    
    let set = new Set(jewels);
    let count = 0;

    for(const s of stones) {
        if(set.has(s)) {
            count++;
        }
    }
    return count;
};
console.log(numJewelsInStones("aA", "aAAbbb"));





var numJewelsInStones = function(jewels, stones) {
    
    let map = new Map();

    for(const x of jewels) {
        // console.log(x)
        map.set(x, map.get(x)|| 0 + 1);
    }
    // console.log(map);

    let count = 0;
    for(const s of stones) {
        // console.log(s);
        let num = map.get(s);
        if(num > 0) {
            count++;
            // map.set(s, map.get(s)-1);
        }
    }
    return count;
};
console.log(numJewelsInStones("aA", "aAAbbb"));