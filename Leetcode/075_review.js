
/**
input: arr;
output: boolean
 */

function solution(nums) {

    if(nums.length < 3) return Math.max(...nums);

    let firstMax = 0, secondMax = 0, thirdMax = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > firstMax) {
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = nums[i];
        } else if(nums[i] > secondMax && nums[i] !== firstMax) {
            thirdMax = secondMax;
            secondMax = nums[i];
        } else if(nums[i] > thirdMax && nums[i] !== secondMax && nums[i] !== firstMax) {
            thirdMax = nums[i];
        }
        // console.log(firstMax, secondMax, thirdMax);
    }

    return thirdMax >= 0 ? thirdMax : firstMax;
}

console.log(solution([2,2,3,1]));        // 1
console.log(solution([1,2,2,2,2,5,3,5]));      // 2