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



const solution = (str1, s2) => {

    if(s2.length === 0) return 0;
    return str1.indexOf(s2);
}

const solution = (str1, s2) => {

    if(s2.length === 0) return 0;

    for(let i = 0; i < str1.length; i++) {
        // console.log(str1[i])
        if(str1[i] === s2[0]) {
            // console.log(str1.slice(i, i + s2.length));
            if(str1.slice(i, i + s2.length) === s2) {
                return i;
            }
        }
    }
    return -1;
}

const solution = (str1, s2) => {

    for(let i = 0; i < str1.length; i++) {
        // console.log(str1[i])
        if(str1[i] === s2[0]) {
            // console.log(str1.slice(i, i + s2.length));
            let match = true;

            for(let j = 0; j < s2.length; j++) {
                if(s2[j] !== str1[i+j]) {
                    match = false;
                    break
                }
            }
            if(match) return i;
        }
    }
    return -1;
}
console.log(solution("mississippi","ssip"))



const solution = nums => {

    let prefix = nums[0]

    for(let i = 1; i < nums.length; i++) {
        // console.log(nums[i])
        for(let j = 0; j < prefix.length; j++) {
            // console.log(prefix[j]);
            // console.log(temp)
            if(nums[i][j] !== prefix[j]) {
                prefix = prefix.slice(0, j);
                // console.log(prefix.slice(0, j));
                // console.log("****")
                break;
            }
        }
    }
    return prefix;
}
console.log(solution(["flower","flow","flight"]));
console.log(solution(["dog","racecar","car"]));



const solution = nums => {
    // return nums.reverse();

    // for(let i = 0; i < nums.length / 2; i++) {
    //     let j = nums.length -1 - i;
    //     [nums[i], nums[j]] = [nums[j], nums[i]];
    // }
    // return nums;

    let i = 0;
    let j = nums.length - 1;
    while(i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
    return nums;
}
console.log(solution(["h","e","l","l","o"]))



const solution = nums => {
    nums.sort((a,b)=> a-b);
    
    let sum = 0;
    for(let i = 0; i < nums.length; i+=2) {
        sum += nums[i];
    }
    return sum;
}
console.log(solution([1,4,3,2]));
console.log(solution([6,2,6,5,1,2]));



const solution = (nums, val) => {

    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            // console.log(nums[i], nums[j]);
            if(nums[i] + nums[j] === val) {
                return [i, j]
            }
        }
    }
}

const solution = (nums, val) => {

    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        let remaining = val - nums[i];
        if(map.has(remaining)) {
            return [i, map.get(remaining)];
        }

        map.set(nums[i], i);
    }
}

const solution = (nums, val) => {
    let i = 0;
    let j = nums.length - 1;

    while(i < j) {
        if(nums[i] + nums[j] === val) {
            return [i+1, j+1]
        } else if(nums[i] + nums[j] > val) {
            j--;
        } else {
            i++;
        }
    }
}
console.log(solution([2,7,11,15], 9));
console.log(solution([2,3,4], 6));
console.log(solution([-1,0], -1));



const solution = num => {

    let result = [];

    for(let i = 0; i <= num; i++) {
        let row = [];

        for(let j = 0; j <= i; j++) {
            if(j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(result[i-1][j] + result[i-1][j-1]);
            }
        }
        result.push(row);
    }

    return result[result.length-1];
}
console.log(solution(3));
console.log(solution(0));
console.log(solution(1));


const solution = str => {

    str = str.split(" ")
    // console.log(str)
    for(let i = 0; i < str.length; i++) {
        // console.log(str[i].split("").reverse().join(""))
        str[i] = str[i].split("").reverse().join("");
    }
    return str.join(" ");
}
console.log(solution("Let's take LeetCode contest"));
console.log(solution("God Ding"));



const solution = (str, s) => {

    let seperateIdx = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === s[seperateIdx]) {
            seperateIdx++;
        }
    }
    // console.log(seperateIdx)
    return seperateIdx === s.length
}
console.log(solution("ahbgdc", "abc"))
console.log(solution("ahbgdc", "axc"))



const solution = (nums1, nums2) => {

    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    return([...set1].filter(num => set2.has(num)));
}

const solution = (nums1, nums2) => {

    let map = new Map();

    for(const num of nums1) {
        if(!map.has(num)) {
            map.set(num, 1);
        } else {
            let count = map.get(num);
            map.set(num, count+=1);
        }
    }

    // console.log(map);
    let result = [];
    for(const num of nums2) {
        if(map.has(num)) {
            if(map.get(num) > 0) {
                result.push(num);
                let count = map.get(num);
                map.set(num, count-=1);
            }
        }
    }
    return result;
}
console.log(solution([1,2,2,1], [2,2,2,2,2]));
console.log(solution([4,9,5], [9,4,9,8,4]));



const solution = nums => {
    let set = new Set();

    for(const num of nums) {

        if(set.has(num)) {
            return num;
        }
        set.add(num);
    }

}
console.log(solution([1,3,4,2,2]));
console.log(solution([3,1,3,4,2]));



const solution = nums => {

    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            // console.log(nums[i][j])
            let key = i + j;
            let val = nums[i][j];

            if(!map.has(key)) {
                map.set(key, [val]);
            } else {
                map.set(key, [...map.get(key), val])
            }
        }
    }
    // console.log(map)

    let result = [];
    
    for(const [key, val] of map) {
        if(key % 2 === 0) {
            result.push(...val.reverse());
        } else {
            result.push(...val);
        }
    }
    return result;
}

const solution = nums => {

    let result = new Array(nums.length + nums[0].length - 1).fill(null).map(()=>[]);
    // console.log(result)
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            // console.log(nums[i][j])
            let key = i + j;
            let val = nums[i][j];

            if(key % 2 === 0) {
                result[key].unshift(val);
            } else {
                result[key].push(val)
            }
        }
    }
    return result.flat();
}
console.log(solution([[1,2,3],[4,5,6],[7,8,9]]));
console.log(solution([[1,2,3],[4,5,6],[7,8,9]]));



const solution = nums => {

    let result = [];
    
    let top = 0;
    let buttom = nums.length - 1;
    let left = 0;
    let right = nums[0].length - 1;

    while(top <= buttom && left <= right) {

        for(let i = left; i <= right; i++) {
            result.push(nums[top][i]);
        }
        top++;

        for(let i = top; i <= buttom; i++) {
            result.push(nums[i][right]);
        }
        right--;

        if(top < buttom) {
            for(let i = right; i >= left; i--) {
                result.push(nums[buttom][i]);
            }
            buttom--;
        }

        if(left < right) {
            for(let i = buttom; i >= top; i--) {
                result.push(nums[i][left]);
            }
            left++;
        }
    }
    return result;
}
console.log(solution([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));



const solution = (nums, val) => {

    let i = 0; 
    let j = 0;
    let count = 0;
    let minCount = Infinity;
    let sum = 0;

    while(j < nums.length) {
        sum += nums[j];
        count++;

        while(sum >= val) {
            minCount = Math.min(count, minCount);
            sum -= nums[i];
            i++;
            count--;
        }

        j++;
    }
    return minCount === Infinity ? 0 : minCount;
}
console.log(solution([2,3,1,2,4,3], 7));
console.log(solution([1,4,4], 4));
console.log(solution([1,1,1,1,1,1,1,1], 11));



const solution = (nums, val) => {

    val = val % nums.length;
    // console.log(val);

    let result = [];

    for(let i = nums.length - val; i < nums.length; i++) {
        result.push(nums[i]);
    }

    for(let i = 0; i < nums.length - val; i++) {
        result.push(nums[i]);
    }
    return result;
}

const solution = (nums, val) => {

    val = val % nums.length;
    // console.log(val);
    let hahaha = nums.splice(nums.length - val);
    // console.log(nums);
    return [...hahaha, ...nums]
}
console.log(solution([1,2,3,4,5,6,7], 3));
console.log(solution([-1,-100,3,99], 2));



const solution = str => {

    str = str.split(" ")
    let temp = str.filter(word => word.length > 0);
    // console.log(temp);
    for(let i = 0; i < temp.length / 2; i++) {
        let j = temp.length - 1 - i;
        [temp[i], temp[j]] = [temp[j], temp[i]];
    }
    return temp.join(" ");
}
console.log(solution("the sky is blue"));
console.log(solution("  hello     world  "));
console.log(solution("a good   example"));



const solution = (nums1, m, nums2, n) => {

    let idx = m + n - 1;
    let mIdx = m - 1;
    let nIdx = n - 1;

    while(nIdx >= 0) {
        if(nums1[mIdx] >= nums2[nIdx]) {
            nums1[idx] = nums1[mIdx];
            mIdx--;
        } else{
            nums1[idx] = nums2[nIdx];
            nIdx--;
        }
        idx--;

    }
    return nums1
}
console.log(solution([1,2,3,0,0,0],3,[2,5,6],3))
console.log(solution([1],1,[],0))
console.log(solution([],0,[1],1))



const solution = (nums, val) => {

    let i = 0, j = 0;
    let count = 0, minCount = Infinity, sum = 0;

    while(j < nums.length) {
        sum += nums[j];
        count++;
        
        while(sum >= val) {
            minCount = Math.min(count, minCount);
            sum -= nums[i];
            count--;
            i++;
        }
        j++;
    }
    return minCount === Infinity ? 0 : minCount;
}
console.log(solution([2,3,1,2,4,3],7))
console.log(solution([1,4,4],4))
console.log(solution([1,1,1,1,1,1,1,1],11))



const solution = nums => {

    let set = new Set();

    for (const num of nums) {
        
        if(set.has(num)) {
            return true;
        }
        set.add(num);
    }
    return false;
}

const solution = nums => {

    let map = new Map();

    for (const num of nums) {
        
        if(map.has(num)) {
            return true;
        }
        map.set(num, 1);
    }
    return false;
}
console.log(solution([1,2,3,1]));
console.log(solution([1,2,3,4]));
console.log(solution([1,1,1,3,3,4,3,2,4,2]));



const solution = nums => {

    if(nums.length === 1) return nums[0];

    let map = new Map();
    for(const num of nums) {
        if(!map.has(num)) {
            map.set(num, 1);
        } else {
            let count = map.get(num)
            map.set(num, map.get(num)+1)
        }
    }
    // console.log(map);
    for(const [key, val] of map) {
        if(val === 1) {
            return key
        }
    }
}
console.log(solution([2,2,1]));
console.log(solution([4,1,2,1,2]));
console.log(solution([1]));



const solution = num => {
    // find sqrt of each num,
    // sum them up
    num = num.toString();
    num = num + "0";

    // console.log(num)
    // console.log(typeof(num))

    while(num.length > 1) {

        let sum = 0;

        for(let i = 0; i < num.length; i++) {
            sum += num[i] ** 2;
        }
        num = sum.toString();
    }
    return num == 1
}
console.log(solution(19));
console.log(solution(2));
console.log(solution(7));
console.log(solution(1111111));



const solution = (str1, str2) => {

    let map1 = new Map();
    let map2 = new Map();

    for(let i = 0; i < str1.length; i++) {

        if(map1.has(str1[i]) && map1.get(str1[i]) !== str2[i]) {
            return false;
        }
        if(map2.has(str2[i]) && map2.get(str2[i]) !== str1[i]) {
            return false;
        }

        map1.set(str1[i], str2[i]);
        map2.set(str2[i], str1[i]);
    }
    return true;
}
console.log(solution("egg", "add"));
console.log(solution("foo", "bar"));
console.log(solution("paper", "title"));



const solution = (nums1, nums2) => {

    let map = new Map();

    for(let i = 0; i < nums1.length; i++) {
        map.set(nums1[i], [i]);
    }

    for(let i = 0; i < nums2.length; i++) {
        if(map.has(nums2[i])) {
            map.set(nums2[i], [...map.get(nums2[i]), i]);
        }
    }

    // console.log(map)
    let result = ["", Infinity];

    for(const [key, val] of map) {
        if(val.length > 1) {
            let total = val.reduce((a,b)=> a+b);
            // console.log(total)

            if(total < result[1]) {
                result[0] = key;
                result[1] = total;
            }
        }
    }

    return result[0]
}

const solution = (nums1, nums2) => {
    let map = new Map();

    for(let i = 0; i < nums1.length; i++) {
        map.set(nums1[i], i);
    }
    let map2 = new Map();

    for(let i = 0; i < nums2.length; i++) {
        let val = nums2[i]

        if(map.has(val)) {
            let count = map.get(val) + i;

            if(!map2.has(count)) {
                map2.set(count, [val]);
            } else {
                map2.set(count, [...map2.get(count), val])
            }
        }
    }
    // console.log(map2);

    let min = Infinity;
    for(const [key, value] of map2) {
        if(key < min) {
            min = key;
        }
    }
    return map2.get(min);
}
console.log(solution(["Shogun","Tapioca Express","Burger King","KFC"], ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]))
console.log(solution(["Shogun","Tapioca Express","Burger King","KFC"], ["KFC","Shogun","Burger King"]))



const solution = str => {
    let map = new Map();

    for(let i = 0; i < str.length; i++) {
        if(!map.has(str[i])) {
            map.set(str[i], [i]);
        } else {
            map.set(str[i], [...map.get(str[i]), i]);
        }
    }
    // console.log(map)

    for(const [key, value] of map) {
        if(value.length === 1) {
            return value[0];
        }
    }
    return -1;
}

const solution = str => {
    let map = new Map();

    for(let i = 0; i < str.length; i++) {
        if(!map.has(str[i])) {
            map.set(str[i], {count: 1, idx: i});
        } else {
            let occ = map.get(str[i]).count +1;
            map.set(str[i], {count: occ, idx: i});
        }
    }
    // console.log(map)

    for(const [key, value] of map) {
        if(value.count === 1) {
            return value.idx;
        }
    }
    return -1;
}
console.log(solution("leetcode"));
console.log(solution("loveleetcode"));
console.log(solution("aabb"));



const solution = (nums, k) => {
    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        let val = nums[i];

        if(map.has(val)) {
            if(Math.abs(map.get(val) - i) <= k) {
                return true;
            }
        }


        map.set(val, i);
    }
    return false;
}
console.log(solution([1,2,3,1],3));
console.log(solution([1,0,1,1],1));
console.log(solution([1,2,3,1,2,3],2));



const solution = (jewels, stones) => {

    jewels = jewels.split("");
    let set = new Set(jewels)
    // console.log(set)
    let count = 0;

    for(const s of stones) {
        if(set.has(s)) {
            count++;
        }
    }
    return count;
}

const solution = (jewels, stones) => {

    let map = new Map();
    for(const j of jewels) {
        map.set(j, 1);
    }
    let count = 0;
    for(const s of stones) {
        if(map.has(s)) {
            count++;
        }
    }
    return count;
}
console.log(solution("aA", "aAAbbbb"));
console.log(solution("z", "ZZ"));



const solution = nums => {

    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        let key = nums[i].split("").sort().join("");
        let value = nums[i];

        if(!map.has(key)) {
            map.set(key, [value]);
        } else {
            map.set(key, [...map.get(key), value]);
        }
    }
    // console.log(map);
    let result = [];
    for(const [key, value] of map) {
        result.push(value);
    }
    return result;
}
console.log((solution(["eat","tea","tan","ate","nat","bat"])))
console.log((solution([""])))
console.log((solution(["a"])))



const solution = nums => {

    let set = new Set();

    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            if(nums[i][j] !== ".") {
                // console.log(nums[i][j]);

                let rowVal = `row ${i}, value: ${nums[i][j]}`;
                let colVal = `col ${j}, value: ${nums[i][j]}`;
                let box = 3 * Math.floor(i / 3) + Math.floor(j / 3);
                let boxVal = `box ${box}, value: ${nums[i][j]}`

                if(set.has(rowVal) || set.has(colVal) || set.has(boxVal)) {
                    return false;
                }
                
                set.add(rowVal);
                set.add(colVal);
                set.add(boxVal);
            }
        }
    }
    // console.log(set);
    return true;
}
let board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

let board2 =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
console.log(solution(board2));



const solution = str => {

    let temp = "";
    let set = new Set();
    let max = 0;

    for(let i = 0; i < str.length; i++) {
        for(let j = i; j < str.length; j++) {
            // console.log(str[j]);
            if(!set.has(str[j])) {
                temp += str[j];
                set.add(str[j]);
            } else {
                max = Math.max(temp.length, max);

                temp= "";
                set = new Set();
            }
        }
    }
    return max;
}

const solution = str => {

    let set = new Set();
    let max = 0;
    let i = 0;
    let j = 0;

    while(j < str.length) {

        if(!set.has(str[j])) {
            set.add(str[j]);
            j++;
            console.log(set);
        } else {
            max = Math.max(max, set.size)
            set.delete(str[i]);
            i++;
            console.log(set);
        }
    }

    return max;
}
console.log(solution("pwwkew"))



const solution = (nums1, nums2, nums3, nums4) => {

    let count = 0;

    for(let a = 0; a < nums1.length; a++) {
        for(let b = 0; b < nums2.length; b++) {
            for(let c = 0; c < nums3.length; c++) {
                for(let d = 0; d < nums4.length; d++) {
                    // console.log(nums1[a]);
                    // console.log(nums2[b]);
                    // console.log(nums3[c]);
                    // console.log(nums4[d]);
                    // console.log("*****")
                    if(nums1[a] + nums2[b] + nums3[c] + nums4[d] === 0) {
                        count++;
                    }
                }
            }
        }
    }

    return  count;
}

const solution = (nums1, nums2, nums3, nums4) => {
    let map = new Map();
    let count = 0;

    for(let a = 0; a < nums1.length; a++) {
        for(let b = 0; b < nums2.length; b++) {
            let sum = nums1[a] + nums2[b];
            
            map.set(sum, ((map.get(sum) || 0) + 1));
        }
    }

    for(let c = 0; c < nums3.length; c++) {
        for(let d = 0; d < nums4.length; d++) {
            let sum = nums3[c] + nums4[d];
            let remaining = 0 - sum;
            // console.log(remaining)
            if(map.has(remaining)) {
                count += map.get(remaining);
            }
        }
    }

    return count;
}
console.log(solution([1,2],[-2,-1],[-1,2],[0,2]))



const solution = (nums, k) => {

    let map = new Map();

    for(const num of nums) {
        map.set(num, map.get(num)+1 || 1)
    }

    let arr = []
    for(const[key, value] of map) {
        arr.push([key, value]);
    }
    arr.sort((a,b)=>a[0]-b[0]);
    // console.log(arr);

    let result = [];

    for(let i = 0; i < k; i++) {
        result.push(arr[i][0]);
    }
    return result;
}
console.log(solution([1,1,1,2,2,3], 2));



const solution = (nums, k) => {

    let arr = [];
    for(const obj of nums) {
        arr.push([obj.name, obj.distance]);
    }
    console.log(arr.sort((a,b)=>a[1]-b[1]));

    let result = [];
    for(let i = 0; i < k; i++) {
        result.push(arr[i][0]);
    }
    return result;
}
console.log(solution([{name:"star-1", distance:20},{name:"star-2", distance: 30},{name:"star-3", distance: 10}], 2));

const solution = (nums, k) => {

    let j = 0;
    let result = [];

    while(j < k) {

        let min = Infinity;
        let idx;

        for(let i = 0; i < nums.length; i++) {
            if(nums[i].distance < min) {
                min = nums[i].distance;
                idx = i;
            }
        }
        result.push(nums[idx].name);
        nums.splice(idx, 1);
        j++;
    }
    return result;
}
console.log(solution([{name:"star-1", distance:20},{name:"star-2", distance: 30},{name:"star-3", distance: 10}], 2));



const solution = (nums, val) => {

    let start = 0;
    let end = nums.length - 1;

    while(start <= end) {
        let midPoint = Math.floor((start+end) / 2);
        // console.log(midPoint);

        if(nums[midPoint] === val) {
            return midPoint;
        } else if(nums[midPoint] > val) {
            // check left
            end = midPoint - 1;
        } else {
            // check right
            start = midPoint + 1;
        }
    }
}

const binarySearch = (nums, val, start, end) => {
    while(start <= end) {
        let midPoint = Math.floor((start+end)/2);
        if(nums[midPoint] === val) {
            return midPoint;
        } else if(nums[midPoint] > val) {
            // check left
            return binarySearch(nums, val, start, midPoint-1);
        } else {
            // check right
            return binarySearch(nums, val, midPoint+1, end);
        }
    }
    return -1;
}
const solution = (nums, val) => {

    let start = 0;
    let end = nums.length - 1;

    return binarySearch(nums, val, start, end);
}
console.log(solution([-1,0,3,5,9,12],12));



const solution = num => {

    let start = 0;
    let end = num;

    while(start <= end) {
        let mid = Math.floor((start+end)/2);

        if(mid * mid === num) {
            return mid;
        } else if(mid * mid > num) {
            // check left
            end = mid - 1;
        } else {
            // check right
            start = mid + 1;
        }
    }
    // console.log(start, end);
    return end;
}
console.log(solution(8));



const solution = num => {
    let start = 0;
    let end = num

    while(start <= end) {
        let mid = Math.floor((start+end)/2);

        if(guess(mid) === 0) {
            return mid;
        } else if(guess(mid) === -1) {
            // check left
            end = mid - 1;
        } else if(guess(mid) === 1) {
            // check right
            start = mid + 1;
        }
    }
}



const solution = num => {
    let start = 0;
    let end = num;

    while(start <= end) {
        let mid = Math.floor((start+end)/2);
        if(isBadVersion(mid)) {
            // check left
            end = mid - 1;
        } else {
            // check right
            start = mid + 1;
        }
    }
}
console.log(solution(4));



const solution = num => {
    let start = 0;
    let end = num;

    while(start <= end) {
        let mid = Math.floor((start+end) /2);
        if(mid * mid === num) {
            return true;
        } else if(mid * mid > num) {
            // check left
            end = mid - 1;
        } else {
            // check right
            start = mid + 1;
        }
    }
    return false;
}
console.log(solution(16));
console.log(solution(14));



const solution = (letters, char) => {

    if(letters[letters.length - 1] <= char) return letters[0];

    let start = 0;
    let end = letters.length - 1;

    while(start <= end) {
        let mid = Math.floor((start+end)/2);

        if(letters[mid] === char) {
            return letters[mid+1];
        } else if(letters[mid] > char) {
            // check left;
            end = mid - 1;
        } else {
            // check right
            start = mid + 1;
        }
    }
    return letters[start];
}
console.log(solution(["c", "f", "j"], "a"));
console.log(solution(["c", "f", "j"], "c"));
console.log(solution(["c", "f", "j"], "d"));
console.log(solution(["a", "b"], "z"));



const solution = (nums, target) => {

    let start = 0;
    let end = nums.length - 1;

    while(start <= end) {
        let midPoint = Math.floor((start+end)/2);
        if(nums[midPoint] === target) {
            return midPoint;
        } else if(nums[midPoint] >= nums[start]) {
            // check left
            if(target >= nums[start] && target <=nums[midPoint]) {
                // continue left
                end = midPoint-1;
            } else {
                // right
                start = midPoint+1;
            }
        }
    }

    return -1;
}
console.log(solution([4,5,6,7,0,1,2],0));
console.log(solution([4,5,6,7,0,1,2],3));
console.log(solution([1],0));



const solution = nums => {
    
    let start = 0;
    let end = nums.length - 1;

    while(start <= end) {
        let mid = Math.floor((start + end)/2);

        if(nums[mid] > nums[mid+1] && nums[mid] > nums[mid-1]) {

            return mid;
        } else if(nums[mid] > nums[mid-1]) {
            // move right
            start = mid + 1;
        } else {
            // move left
            end = mid - 1;
        }
    }
}
console.log(solution([1,2,3,1]));
console.log(solution([1,2,1,3,5,6,4]));



const solution = num => {

    num = num.toString();
    num += "0";
    
    while(num.length > 1) {
        
        let sum = 0;

        for(let i = 0;i < num.length; i++) {
            let x = num[i];
            sum += x ** 2;
        }
        num = sum.toString();
    }
    return num == 1
}

console.log(solution(1111111))


const sumOfNum = num => {
    let sum = 0;
    while(num) {
        sum += (num % 10) ** 2
        console.log("sum", sum)
        console.log(num)
        num = Math.floor(num / 10)
        console.log("num", num)
    }
    return sum;
}

const solution = num => {
    let set = new Set();

    while(true) {

        num = sumOfNum(num);

        if(num === 1) return true;
        if(set.has(num)) return false;

        set.add(num);
        console.log(set);
    }
}
console.log(solution(19))



const solution = (str1, str2) => {

    let map1 = new Map();
    let map2 = new Map();

    for(let i = 0; i < str1.length; i++) {

        if(map1.has(str1[i]) && map1.get(str1[i]) !== str2[i]) {
            return false;
        }
        if(map2.has(str2[i]) && map2.get(str2[i]) !== str1[i]) {
            return false;
        }

        map1.set(str1[i], str2[i]);
        map2.set(str2[i], str1[i]);
    }
    return true;
}
console.log(solution("egg", "add"));



const solution = (nums, val) => {

    let map = new Map();

    for(let i = 0; i < nums.length; i++) {

        if(map.has(nums[i])) {
            if(Math.abs(map.get(nums[i]) - i) <= val) {
                return true;
            }
        }

        map.set(nums[i], i);
    }
    // console.log(map)
    return false;
}
console.log(solution([1,2,3,1,2,3], 2));
// show passion
// project, name 
// no product manager, why project if signate (impact: to other person)


/**
 * 
 * 
impact to user, signaicatate
    workable solution;
 */