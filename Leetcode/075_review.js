
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

    let triangle = [];

    for(let i = 0; i < num; i++) {
        // console.log(i+1);
        let tempArr = [];
        let lastArr = triangle[triangle.length - 1];
        console.log(lastArr);

        for(let j = 0 ; j <= i; j++) {
            if(j === 0 || j === i) {
                tempArr.push(1);
            } else {
                tempArr.push((lastArr[j]) + lastArr[j-1]);
                console.log("i ", j);
                console.log("last j ", lastArr[j])
                console.log("last j-1 ", lastArr[j-1])
            }
        }
        triangle.push(tempArr);
    }
    return triangle;
}

console.log(solution(5));        // 1






function solution(a,b) {

    let aString = a.split("").reverse();
    let bString = b.split("").reverse();
    // console.log(aString, bString);
    let result = [];
    let carry = 0;

    const maxLength = Math.max(aString.length, bString.length)

    for(let i = 0; i < maxLength; i++) {
        // console.log(aString[i], bString[i]);
        let total = (parseInt(aString[i]) || 0) + (parseInt(bString[i]) || 0) + carry;
        carry = 0;
        console.log(total)

        if(total === 1) {
            result.push(1);
        } else if(total === 2) {
            result.push(0);
            carry++;
        } else if(total === 3) {
            result.push(1);
            carry++;
        }
    }
    if(carry > 0) result.push(1);
    console.log(result.reverse().join(""));
}

console.log(solution("11", "1"));        // 1






function solution(a,b) {

    if(b.length === 0) return 0;

    // return a.indexOf(b);
    for(let i = 0; i < a.length; i++) {
        if(a[i] === b[0]) {
            // console.log(a.slice(i, i+b.length));
            if(a.slice(i, i+b.length) === b) {
                return i;
            }
        }
    }
    return -1;
}

console.log(solution("mississippi", "issip"));        // 1






function solution(a,b) {

    if(b.length === 0) return 0;

    // return a.indexOf(b);
    for(let i = 0; i < a.length; i++) {
        if(a[i] === b[0]) {

            let match = true;

            for(let j = 0; j < b.length; j++) {
                if(b[j] !== a[i+j]) {
                    match = false;
                    break;
                }
            }
            if(match) {
                return i;
            }
        }
    }
    return -1;
}

console.log(solution("mississippi", "issip"));        // 1