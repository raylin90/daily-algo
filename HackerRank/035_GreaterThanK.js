function solution(arr, k) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        for(let j = i+1; j < arr.length; j++) {
            if((arr[i] + arr[j]) % k == 0) {
                count++;
                // console.log("j", arr[j]);
                // console.log("i", arr[i]);
                // console.log("count ", count)
            }
        }
    }
    return count;
}
console.log(solution([1,2,3,4,5],3))      // [4, 5, -1, 2, 1]