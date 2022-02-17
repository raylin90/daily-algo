
/**
input: arr;
output: boolean
 */



function solution(nums) {

    for(let i = 0; i < nums.length; i++) {

        let leftSum = 0;
        let rightSum = 0;

        for(let x = 0; x < i; x++) {
            leftSum += nums[x];
        }

        for(let y = i+1; y < nums.length; y++) {
            rightSum += nums[y];
        }

        if(leftSum === rightSum) {
            return i;
        }
    }
    return -1;
}

console.log(solution([1,7,3,6,5,6]));        // 1
console.log(solution([1,2,3]));        // 1
console.log(solution([2,1,-1]));        // 1




function solution(nums) {

    let total = 0;
    for(const num of nums) {
        total += num;
    }
    // console.log(total);

    let leftSum = 0;
    for(let i = 0; i < nums.length; i++) {
        leftSum += (nums[i-1] || 0);
        let rightSum = total - leftSum - nums[i];
        if(leftSum === rightSum) {
            return i;
        }
    }
    return -1;
}

console.log(solution([1,7,3,6,5,6]));        // 1
console.log(solution([1,2,3]));        // 1
console.log(solution([2,1,-1]));        // 1





function solution(nums) {

    let max = Math.max(...nums);
    // console.log(max);

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === max) {
            continue;
        }

        let sqt = nums[i] * 2;
        // console.log(sqt);
        if(sqt > max) {
            return -1;
        }
    }
    return nums.indexOf(max);
}

console.log(solution([3,6,1,0]));        // 1
console.log(solution([1,2,3,4]));        // 1
console.log(solution([1]));        // 1





function solution(nums) {

    let carry = 0;

    for(let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] === 9) {
            carry = 1;
            digits[i] = 0;
        } else {
            digits[i] += carry+1;
            carry = 0;
            break;
        }
    }
    if(carry === 1) {
        digits.unshift(1);
    }
    return digits;
}

console.log(solution([1,2,3]));        // 1
console.log(solution([4,3,2,1]));        // 1
console.log(solution([9]));        // 1





function solution(num) {

    
}

console.log(solution(5));        // 1
