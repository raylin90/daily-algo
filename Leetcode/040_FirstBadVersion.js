// 6. once loop is done, it will return the first bad version, return start

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}

1. binary serach, start and end
    1. while(start ≤ end)
    2. find the mid
    3. use build-in API to check mid is bad to not
    4. if it's bad version true, the first bad version might be at left
    5. if it's good version, meaning bad version might still at right, so we move mid to right
    6. once loop is done, it will return the first bad version, return start
 */


var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
        let start = 0, end = n
        
        while(start <= end) {
            
            let mid = Math.floor((start+end)/2);
            
            // if it's bad version true, the first bad version might be at left
            if(isBadVersion(mid)) {
                end = mid - 1;
                
            // if it's good version, meaning bad version might still at right, so we move mid to right
            } else{
                start = mid + 1;
            }
            
        }
        
        // once loop is done, it will return the first bad version
        // console.log(start, end)
        return start

    };
};