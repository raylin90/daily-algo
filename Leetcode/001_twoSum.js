// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.



// brute force
// first for loop to go throught the entire array, starting at i = 0;
// second for loop to go throught the entrie array, starting at j = i + 1
// add up the arr[i] with arr[j], if it == to target, then return [i, j]

const twoSum = (nums, target) => {
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))



// hashmap
// start a empty map obj
// for loop the whole array
// find
//      1) the value of current index
//      2) complement value of targer - current value
// check the map, if it has the complement value, if yes, return the current index and complement value index
// if cannot find it, we set the value and it's index to the map

const twoSum2 = (nums, target) => {

    let map = new Map();

    for(let i = 0; i < nums.length; i++) {

        let value = nums[i];
        let complement = target - value;

        if(map.has(complement)) {
            return [i, map.get(complement)];
        } else {
            map.set(value, i);
        }
    }
}

console.log(twoSum2([1, 3, 4, 2], 6))
console.log(twoSum2([2,7,11,15], 9))
console.log(twoSum2([3,2,4], 6))
console.log(twoSum2([3,3], 6))