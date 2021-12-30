//  https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}

1. similar with two sum, but with sort build-in
2. two pointer method, add up i and j, if too big, j--, too small, i++
 */

var twoSum = function(numbers, target) {
    let map = new Map();

    for(let i = 0; i < numbers.length; i++) {
        let remaining = target - numbers[i];
        
        
        if(map.has(remaining)) {
            return [i+1,map.get(remaining)].sort(function(a,b){return a-b});
        } else {
            map.set(numbers[i], i+1);
        }
    }
};
console.log(twoSum([2,7,11,15],9));     // [1,2]
console.log(twoSum([2,3,4],6));     // [1,3]
console.log(twoSum([-1,0],-1));     // [1,2]




var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;

    while (i < j) {
        if(numbers[i] + numbers[j] > target) {
            j--;
        } else if(numbers[i] + numbers[j] < target) {
            i++;
        }

        if(numbers[i] + numbers[j] === target) {
            return [i+1, j+1];
        }
    }
};
console.log(twoSum([2,7,11,15],9));     // [1,2]
console.log(twoSum([2,3,4],6));     // [1,3]
console.log(twoSum([-1,0],-1));     // [1,2]