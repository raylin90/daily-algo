
/**
input: arr;
output: boolean
 */

function solution(arr) {

    let start = 0;
    let end = arr.length - 1;

    while(start < end) {
        if(arr[start] === 0) {
            arr.splice(start, 1);
            arr.push(0);
            end --;
        } else {
            start ++;
        }
    }
    return arr;
}

console.log(solution([0,1,0,0,0,0,3,12]));
// console.log(solution([0]));