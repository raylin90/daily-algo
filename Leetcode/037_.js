/**
 * @param {number[]} arr
 * @return {boolean}
 */

var checkIfExist = function(arr) {
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] * 2 === arr[j] || arr[i] / 2 === arr[j]) {
                return true;
            }
        }
    }
    return false;
};
console.log(checkIfExist([10,2,5,3]));
console.log(checkIfExist([7,1,14,11]));
console.log(checkIfExist([3,1,7,11]));




var checkIfExist = function(arr) {
    
    let map = new Map();

    for(let i = 0; i < arr.length; i++) {

        if(map.has(arr[i] * 2) || map.has(arr[i] / 2)) {
            return true;
        } else {
            map.set(arr[i], 1)
        }
    }
    return false;
};
console.log(checkIfExist([10,2,5,3]));
console.log(checkIfExist([7,1,14,11]));
console.log(checkIfExist([3,1,7,11]));