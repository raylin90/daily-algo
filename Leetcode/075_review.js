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



