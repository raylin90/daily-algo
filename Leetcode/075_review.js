function solution(nums) {

    let prefix = nums[0];

    for(let i = 1; i < nums.length; i++) {

        let word = nums[i];

        for(let j = 0; j < prefix.length; j++) {
            if(prefix[j] !== word[j]) {
                console.log(prefix.slice(0, j));
                prefix = prefix.slice(0, j)
            }
        }
    }
    return prefix;
}
console.log(solution(["flower","flow","flight"]))





function solution(nums) {

    let start = 0;
    let end = nums.length - 1;

    while(start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
    return nums;
}
console.log(solution(["h","e","l","l","o"]))






function solution(nums) {

    let sum = 0;
    for(let i = 1; i < nums.length; i+=2) {
        sum += nums[i];
    }

    return sum;
}
console.log(solution([6,2,6,5,1,2]))





function solution(nums, k) {
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === k) {
                return [i, j]
            }
        }
    }
}
console.log(solution([2,7,11,15], 9))
console.log(solution([3,2,4], 6))
console.log(solution([3,3], 6))






function solution(nums, k) {
    
    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        let remaining = k - nums[i];

        if(map.has(remaining)) {
            return [i, map.get(remaining)];
        } else {
            map.set(nums[i], i)
        }
    }
}
console.log(solution([2,7,11,15], 9))
console.log(solution([3,2,4], 6))
console.log(solution([3,3], 6))




function solution(nums, k) {
    
    let start = 0;
    let end = nums.length - 1;

    while(start < end) {
        // console.log(nums[start] + nums[end], [start, end]);
        if((nums[start] + nums[end]) > k) {
            end --;
        } else if((nums[start] + nums[end]) < k) {
            start ++;
        } else if((nums[start] + nums[end] === k)) {
            return [start+1, end+1];
        }
    }
}
console.log(solution([2,7,11,15],9));     // [1,2]
console.log(solution([2,3,4],6));     // [1,3]
console.log(solution([-1,0],-1));     // [1,2]





function solution(k) {
    
    // if(k === 0) return [1];
    // if(k === 1) return [1,1];

    let triangle = [];

    for(let i = 0; i <= k; i++) {

        let row = [];
        let last = triangle[triangle.length - 1];

        for(let j = 0; j <=i; j++) {
            if(j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(last[j] + last[j-1])
            }
        }
        triangle.push(row);
    }
    return triangle[triangle.length-1];
}
console.log(solution(3));     // [1,2]





function solution(str) {
    
    let result = str.split(" ");
    console.log(result);

    for(let i = 0; i < result.length; i++) {
        result[i] = result[i].split("").reverse().join("")
        // console.log(result[i].split("").reverse().join(""))
    }

    console.log(result.join(" "));

}
console.log(solution("Let's take LeetCode contest"));     // [1,2]







function solution(str1, str2) {
    
    if(str2.length < str1.length) return false

    let str1Idx = 0;

    for(let i = 0; i < str2.length; i++) {
        // console.log(str2[i])
        if(str2[i] === str1[str1Idx]) {
            str1Idx++;
        }
    }
    // console.log(str1Idx);
    return str1Idx === str1.length
}
console.log(solution("axc", "ahbgdc"));     // [1,2]









function solution(str1, str2) {
    
    let set = new Set(str1);
    let resutl = [];

    for(let i = 0; i < str2.length; i++) {
        if(set.has(str2[i]) && !resutl.includes(str2[i])) {
            resutl.push(str2[i]);
        }
    }
    return resutl;
}
console.log(solution([1,2,2,1], [2,2]));     // [1,2]




function solution(str1, str2) {
    
    let map = new Map();
    let resutl = [];

    for(const key of str1) {
        map.set(key, 1);
    }

    for(const val of str2) {
        if(map.has(val)) {
            resutl.push(val);
            map.delete(val);
        }
    }
    console.log(map);
    return resutl;
}
console.log(solution([1,2,2,1], [2,2]));     // [1,2]





function solution(str1, str2) {
    
    let set1 = new Set(str1);
    let set2 = new Set(str2);

    return [...set1].filter(num => set2.has(num))

}
console.log(solution([1,2,2,1], [2,2]));     // [1,2]





function solution(str1, str2) {
    
    let set1 = new Set(str1);
    let result = [];

    for(const val of str2) {
        if(set1.has(val)) {
            result.push(val);
        }
    }
    return result
}
console.log(solution([1,2,2,1], [2,2]));     // [1,2]







function solution(str1, str2) {
    
    let map = new Map();
    let result = [];

    for(const val of str1) {
        map.set(val, (map.get(val) || 0)+1);
    }
    console.log(map)

    for(const val of str2) {
        if(map.has(val) && map.get(val) > 0) {
            result.push(val);
            map.set(val, map.get(val)-1)
        }
    }
    return result
}
console.log(solution([1,2,2,1], [2,2,2]));     // [1,2]





function solution(str1) {
    
    for(let i = 0; i < str1.length; i++) {
        for(let j = i+1; j < str1.length; j++) {
            if(str1[i] === str1[j]) {
                return str1[i]
            }
        }
    }
}
console.log(solution([1,3,4,2,2]));     // [1,2]
console.log(solution([3,1,3,4,2]));     // [1,2]





function solution(str1) {
    
    let set = new Set();

    for(const num of str1) {

        if(set.has(num)) {
            return num;
        }
        set.add(num);
    }
}
console.log(solution([1,3,4,2,2]));     // [1,2]
console.log(solution([3,1,3,4,2]));     // [1,2]







function solution(str1) {
    
    let map = new Map();

    for(const num of str1) {

        if(map.has(num)) {
            return num;
        }
        map.set(num, 1);
    }
}
console.log(solution([1,3,4,2,2]));     // [1,2]
console.log(solution([3,1,3,4,2]));     // [1,2]






function solution(str1) {
    
    let tort = str1[0];
    let hare = str1[tort]

    while(tort !== hare) {
        tort = str1[tort];
        hare = str1[str1[hare]];
    }

    tort = 0;

    while(tort !== hare) {
        tort = str1[tort];
        hare = str1[hare];
    }
    return [tort, hare]
}
console.log(solution([1,3,4,2,2]));     // [1,2]
console.log(solution([3,1,3,4,2]));     // [1,2]





function solution(str1) {
    
    let map = new Map();

    for(let i = 0; i < str1.length; i++) {
        for(let j = 0; j < str1.length; j++) {
            // console.log(str1[i][j])
            let key = i + j;
            let val = str1[i][j];

            if(!map.has(key)) {
                map.set(key, [val]);
            } else {
                map.set(key, [...map.get(key), val]);
            }
        }
    }
    // console.log(map);
    let result = [];

    for(const [key, val] of map) {
        // console.log(key, val)
        if(key % 2 === 0) {
            result.push(...val.reverse());
        } else {
            result.push(...val)
        }
    }
    return result;
}
console.log(solution([[1,2,3],[4,5,6],[7,8,9]]));







function solution(str1) {
    

    let rows = str1.length;
    let cols = str1[0].length;

let result = new Array(rows+cols-1).fill(null).map(()=> []);

    for(let i = 0; i < str1.length; i++) {
        for(let j = 0; j < str1.length; j++) {
            // console.log(str1[i][j])
            let key = i + j;
            let val = str1[i][j];

            if(key % 2 === 0) {
                result[key].unshift(val);
            } else {
                result[key].push(val);
            }

        }
    }
    console.log(result.flat());
}
console.log(solution([[1,2,3],[4,5,6],[7,8,9]]));






function solution(matrix) {

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    let result = [];

    console.log(top, right, bottom, left);

    while(top <= bottom && left <= right) {

        for(let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        for(let j = top; j <= bottom; j++) {
            result.push(matrix[j][right])
        }
        right--;

        if(top < bottom) {
            for(let x = right; x >= left; x--) {
                result.push(matrix[bottom][x]);
            }
            bottom--;
        }

        if(left < right) {
            for(let y = bottom; y >= top; y--) {
                result.push(matrix[y][left]);
            }
            left++;
        }

        // console.log(result);
    }
    return result;
}
console.log(solution([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));




function soluction(nums, k) {
    let i = 0, j = 0;
    let sum = 0;
    let minLength = Infinity;
    let count = 0;

    while(j < nums.length) {
        sum += nums[j];
        count++;
        j++;
        while(sum >= k) {
            minLength = Math.min(count, minLength);
            sum -= nums[i];
            i++;
            count--;
        }
    }
    console.log(minLength);
}
console.log(soluction([2,3,1,2,4,3], 7))





function soluction(nums, k) {
    let i = 0, j = 0;
    let sum = 0;
    let minLength = Infinity;
    let count = 0;

    while(j < nums.length) {

        sum+=nums[j];

        while(sum >= k) {
            minLength = Math.min(minLength, j-i+1);
            sum -= nums[i];
            i++;
        }

        j++;
        console.log(minLength);
    }
}
console.log(soluction([1,4,4], 4))




function soluction(nums, k) {

    k = k % nums.length;
    if(k === 0) return nums;

    let resut = [];

    for(let i = nums.length - k; i < nums.length; i++) {
        resut.push(nums[i]);
    }

    for(let i = 0; i <= k; i++) {
        resut.push(nums[i]);
    }

    return resut;
}
console.log(soluction([1,2,3,4,5,6,7], 10))





function soluction(nums, k) {

    k = k % nums.length;
    if(k === 0) return nums;

    let arr1 = nums.slice(nums.length - k);
    let arr2 = nums.slice(0, k+1);
    // console.log(arr1, arr2);
    return [...arr1, ...arr2]

}
console.log(soluction([1,2,3,4,5,6,7], 10))




function soluction(nums, k) {

    k = k % nums.length;
    if(k === 0) return nums;

    for(let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    return nums;
}
console.log(soluction([1,2,3,4,5,6,7], 10))






function soluction(nums) {

    nums = nums.split(" ");
    // console.log(nums)

    const result = nums.filter(word => word.length > 0)
    console.log(result.reverse());
}
console.log(soluction("  hello world  "))