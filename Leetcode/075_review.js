const solution = (nums) => {

    let count = 0;
    let maxCount = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            count++;
            maxCount = Math.max(count, maxCount);
        } else {
            count = 0;
        }
    }
    return maxCount;
}
console.log(solution([1,1,0,1,1,1]));
console.log(solution([1,0,1,1,0,1]));



const solution = (nums) => {

    let count = 0;

    for(const num of nums) {

        let len = num.toString().length;
        if(len % 2 === 0) {
            count++;
        }
    }
    return count;
}
console.log(solution([12,345,2,6,7896]));
console.log(solution([555,901,482,1771]));



const solution = (nums) => {

    for(let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] ** 2;
    }
    // console.log(nums);
    return nums.sort((a,b) => a-b)
}
console.log(solution([-4,-1,0,3,10]));
console.log(solution([-7,-3,2,3,11]));

const solution = (nums) => {

    let result = [];
    let resultIdx = nums.length - 1;
    let i = 0;
    let j = nums.length -1;

    while(i <= j) {

        let start = nums[i] **2;
        let end = nums[j] **2;
        // console.log(start, end);
        // break;

        if(end >= start) {
            result[resultIdx] = end;
            j--;
        } else {
            result[resultIdx] = start;
            i++;
        }
        resultIdx--;
    }

    return result;
}
console.log(solution([-4,-1,0,3,10]));
console.log(solution([-7,-3,2,3,11]));



const solution = (nums) => {

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            nums.splice(i, 0, 0);
            i++;
            nums.pop();
        }
    }
    return nums;
}
console.log(solution([1,0,2,3,0,4,5,0]));
console.log(solution([1,2,3]));



const solution = (nums1, m, nums2, n) => {

    if(n === 0) return nums1;
    let newIdx = m + n - 1;
    let i = m-1;
    let j = n-1;

    while(j >= 0 ) {
        // console.log(nums2[n-1]);
        // console.log(nums1[m-1]);
        // break;
        if(nums1[i] >= nums2[j]) {
            nums1[newIdx] = nums1[i];
            i--;
        } else {
            nums1[newIdx] = nums2[j];
            j--;
        }
        newIdx--;
    }
    return nums1;
}
console.log(solution([1,2,3,0,0,0],3,[2,5,6],3));
console.log(solution([1],1,[],0));
console.log(solution([0],0,[1],1));



const solution = (nums, val) => {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums;
}
console.log(solution([3,3,3,3,3,3,2,2,3],3))



const solution = (nums, val) => {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === val) {
            [nums[i], nums[nums.length-1]] = [nums[nums.length-1], nums[i]];
            nums.pop();
            i--;
        }
    }
    return nums;
}
console.log(solution([3,3,3,3,3,3,2,2,3],3))
console.log(solution([0,1,2,2,3,0,4,2], 2))



const solution = (nums) => {
    return [...new Set(nums)];
}
console.log(solution([1,1,2]));
console.log(solution([0,0,1,1,1,1,1,2,2,3,3,3,3,4]));



const solution = (nums) => {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i+1]) {
            nums.splice(i+1, 1);
            i--;
        }
    }
    return nums;
}
console.log(solution([1,1,2]));
console.log(solution([0,0,1,1,1,1,1,2,2,3,3,3,3,4]));



const solution = nums => {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            // console.log(nums[i], nums[j]);
            if(nums[i] === nums[j] * 2 || nums[i] *2 === nums[j]) {
                return true;
            }
        }
    }
    return false;
}
console.log(solution([10,2,5,3]));
console.log(solution([7,1,14,11]));
console.log(solution([3,1,7,11]));

const solution = nums => {
    let map = new Map();
    for(const num of nums) {

        if(map.has(num * 2) || map.has(num / 2)) {
            return true;
        }

        map.set(num, 1);
        // console.log(map)
    }
    return false;
}
console.log(solution([10,2,5,3]));
console.log(solution([7,1,14,11]));
console.log(solution([3,1,7,11]));



const solution = nums => {

    if(nums.length < 3) return false;
    let isPeak = false;
    let peak = Math.max(...nums);
    // console.log(peak);
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i+1]) return false;
        if(nums[i] === peak) {
            if(i === 0 || i === nums.length -1) return false;
            isPeak = true;
        }

        if(isPeak === false && nums[i] > nums[i+1]) {
            return false;
        } else if(isPeak === true && nums[i+1] > nums[i]) {
            return false;
        }
    }
    return true;
}
console.log(solution([2,1]));
console.log(solution([3,5,5]));
console.log(solution([0,3,2,1]));

const solution = nums => {

    if(nums.length < 3) return false;
    let peak = Math.max(...nums);
    let peakIdx = nums.indexOf(peak);
    if(     peakIdx === 0 ||
            peakIdx === nums.length - 1 ||
            peakIdx !== nums.lastIndexOf(peak)) return false

    for(let i = 0; i < nums.length; i++) {
        if(i < peakIdx && nums[i] >= nums[i+1]) {
            return false;
        } else if(i >= peakIdx && nums[i] <= nums[i+1]) {
            return false;
        }
    }
    return true;
}
// console.log(solution([3,5,5]));
console.log(solution([0,3,2,1]));


const solution = nums => {

    let i = 0, j = nums.length - 1;

    while(i < j) {
        if(nums[i] < nums[i+1]) {
            i++;
        } else if(nums[j] < nums[j-1]) {
            j--;
        } else {
            break;
        }
    }
    // return true;
    if(i === j && i !== 0 && j !== nums.length - 1) {
        return true;
    } else {
        return false;
    }
}
console.log(solution([3,5,5]));
console.log(solution([0,3,2,1]));



const solution = nums => {
    for(let i = 0; i < nums.length; i++) {
        // console.log(nums.slice(i+1));
        // console.log(Math.max(...nums.slice(i+1)));

        let max = Math.max(...nums.slice(i+1));
        nums[i] = max;
    }
    nums[nums.length - 1] = -1;
    return nums;
}
console.log(solution([17,18,5,4,6,1]));
console.log(solution([400]));

const solution = nums => {

    if(nums.length === 1) return [-1];
    let copy = nums.slice();

    for(let i = nums.length - 2; i >=0; i--) {
        console.log(nums[i+1], copy[i+1]);
        nums[i] = Math.max(nums[i+1], copy[i+1]);
    }
    nums[nums.length - 1] = -1;
    return nums;
}
console.log(solution([17,18,5,4,6,1]));



const solution = nums => {

    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            nums.splice(i, 1)
            count++;
            i--;
        }
    }
    let newArr = new Array(count).fill(0);
    return [...nums, ...newArr];
}
console.log(solution([0,1,0,0,0,3,12,0]));
console.log(solution([0]));

const solution = nums => {

    for(let i = nums.length -1; i>= 0; i--) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    return nums;
}
console.log(solution([0,1,0,0,0,3,12,0]));

const solution = nums => {

    let idx = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[idx] === 0) {
            nums.splice(idx, 1);
            nums.push(0);
        } else {
            idx++;
        }
    }
    return nums;
}
console.log(solution([0,1,0,0,0,3,12,0]));


const solution = nums => {

    let i = 0; 
    let j = nums.length - 1;

    while(i <= j) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            j--;
        } else {
            i++;
        }
    }
    return nums;
}
console.log(solution([0,1,0,0,0,0,0,0,0,0,3,12,0]));



const solution = nums => {
    let evenfilter = nums.filter(num=> num%2===0);
    let oddfilter = nums.filter(num=> num%2!==0);
    return [...evenfilter, ...oddfilter];
}
console.log(solution([3,1,2,4]))

const solution = nums => {

    let i = 0, j = nums.length -1;

    while(i < j) {
        while(nums[i] % 2 === 0) {
            i++;
        }
        while(nums[j] % 2 !== 0) {
            j--;
        }
        if(i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        console.log(nums);
    }
    return nums;
}
console.log(solution([3,3,2,1,5,6,8,10,1,2,4]))

const solution = nums => {

    let i = 0, j = nums.length -1;

    while(i < j) {
        if(nums[i] % 2 === 0) {
            i++;
        }
        if(nums[j] % 2 !== 0) {
            j--;
        }
        if(i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        console.log(nums);
    }
    return nums;
}
console.log(solution([3,3,2,1,5,6,8,10,1,2,4]))



const solution = nums => {

    let expected = [...nums].sort((a,b)=>a-b);
    // console.log(nums);
    // console.log(expected);
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== expected[i]) {
            count++;
        }
    }
    return count;
}
console.log(solution([1,1,4,2,1,3]))
console.log(solution([5,1,2,3,4]))
console.log(solution([1,2,3,4,5]))


const solution = nums => {
    if(nums.length < 3) return Math.max(...nums);

    let set = new Set(nums);
    set.delete(Math.max(...set));
    set.delete(Math.max(...set));
    return Math.max(...set);
}
console.log(solution([3,2,1]));
console.log(solution([1,2]));
console.log(solution([2,2,3,1]));


const solution = nums => {
    if(nums.length < 3) return Math.max(...nums);

    let max1 = Number.NEGATIVE_INFINITY;
    let max2 = Number.NEGATIVE_INFINITY;
    let max3 = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > max1) {
            max3 = max2;
            max2 = max1;
            max1 = nums[i]
        } else if(nums[i] > max2 && nums[i] !== max1) {
            max3 = max2;
            max2 = nums[i];
        } else if(nums[i] > max3 && nums[i] !== max2 && nums[i] !== max1) {
            max3 = nums[i];
        }
    }
    // console.log(max1, max2, max3);
    return max3 !== Number.NEGATIVE_INFINITY ? max3 : max1;
}
console.log(solution([3,2,1]));
console.log(solution([2,1]));
console.log(solution([2,2,3,1]));



const solution = nums => {
    let arr = new Array (nums.length+1).fill(0);
    for(let i = 0; i < nums.length; i++) {
        arr[nums[i]]++;
    }
    let result = [];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] === 0) {
            result.push(i);
        }
    }
    // console.log(arr);
    return result;
}
console.log(solution([4,3,2,7,8,2,3,1]));
console.log(solution([1,1]));

const solution = nums => {
    let set = new Set(nums);
    let result = [];
    // console.log(nums.length);
    for(let i = 1; i <= nums.length; i++) {
        if(!set.has(i)) {
            result.push(i);
        }
    }
    return result;
}
console.log(solution([4,3,2,7,8,2,3,1]));
console.log(solution([1,1]));



const solution = nums => {
    
    for(let i = 0; i < nums.length; i++) {

        let leftSum = 0, rightSum = 0;

        for(let x = 0; x < i; x++) {
            leftSum += nums[x];
        }

        for(let y = i+1; y < nums.length; y++) {
            rightSum += nums[y];
        }
        // console.log(leftSum, rightSum);
        if(leftSum === rightSum) {
            return i;
        }
    }
    return -1;
}
console.log(solution([1,7,3,6,5,6]));
console.log(solution([1,2,3]));
console.log(solution([2,1,-1]));

const solution = nums => {
    
    let total = nums.reduce((a,b)=>a+b);
    let leftSum = 0;

    for(let i = 0; i < nums.length; i++) {
        leftSum += nums[i-1] || 0
        let rightSum = total - nums[i] - leftSum;
        if(leftSum === rightSum) {
            return i;
        }
    }
    return -1;
}
console.log(solution([1,7,3,6,5,6]));
console.log(solution([1,2,3]));
console.log(solution([2,1,-1]));


const solution = nums => {
    let max = Math.max(...nums);
    let idx;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === max) {
            idx = i;
            continue;
        }
        if(nums[i] * 2 > max) {
            return -1;
        }
    }
    return idx;
}
console.log(solution([3,6,1,0]));
console.log(solution([1,2,3,4]));
console.log(solution([1]));

const solution = nums => {
    let max = 0;
    let secondMax = 0;
    let idx = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > max) {
            secondMax = max;
            max = nums[i];
            idx = i;
        } else if(nums[i] > secondMax) {
            secondMax = nums[i];
        }
    }
    if(max >= secondMax * 2) {
        return idx; 
    } else {
        return -1;
    }
}
console.log(solution([3,6,1,0]));
console.log(solution([1,2,3,4]));
console.log(solution([1]));



const solution = nums => {
    let carry = 0;

    for(let i = nums.length -1; i >= 0; i--) {

        if(nums[i] === 9) {
            // some operation
            nums[i] = 0;
            if(i === 0) {
                nums.unshift(1);
            }
        } else {
            nums[i] = nums[i] + 1;
            break;
        }
    }
    return nums;
}

const solution = nums => {
    let carry = 0;

    for(let i = nums.length -1; i >= 0; i--) {

        if(nums[i] === 9) {
            // some operation
            nums[i] = 0;
            carry++;
        } else if(carry === 1) {
            nums[i] = nums[i] + carry;
            carry = 0;
            break;
        } else {
            nums[i] = nums[i] + 1;
            break;
        }
    }
    if(carry === 1) {
        nums.unshift(1);
    }
    return nums;
}
console.log(solution([1,2,3]));
console.log(solution([4,3,2,1]));
console.log(solution([9]));
console.log(solution([8,9]));

const solution = num => {

    let result = [];
    for(let i = 0; i < num; i++) {

        let row = [];
        let lastRow = result[result.length - 1];

        for(let j = 0; j <= i; j++) {
            if(j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(lastRow[j] + lastRow[j-1]);
            }
        }
        result.push(row);
    }

    return result;
}
console.log(solution(5));



const solution = (a, b) => {

    let num1 = a.split("").reverse();
    let num2 = b.split("").reverse();
    let len = Math.max(num1.length, num2.length);
    let carry = 0;
    let result = [];

    for(let i = 0; i < len; i++) {
        let n1 = parseInt(num1[i]) || 0;
        let n2 = parseInt(num2[i]) || 0;
        // console.log(n1, n2);
        let sum = n1 + n2 + carry;
        carry = 0;

        if(sum === 3) {
            result.push(1);
            carry = 1;
        } else if(sum == 2) {
            result.push(0);
            carry = 1;
        } else {
            result.push(sum);
        }
    }

    if(carry === 1) {
        result.push(1);
    }
    return result.reverse().join("");
}
console.log(solution("1010","1011"))