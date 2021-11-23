const balancePoint = arr => {
    let sum = 0;
    for(let i =0; i < arr.length; i++) {
        sum += arr[i];
    }
    // console.log(sum)
    let leftSum = 0;
    for(let j = 0; j < arr.length; j++) {
        leftSum += arr[j];
        if((sum - leftSum) === leftSum) {
            return true;
        }
    }
    return false;
}

let x = [1,2,3,4,10]
console.log(balancePoint(x));   // true;
let y = [4,7,1,3]
console.log(balancePoint(y));   // false;
let z = [2,4,7]
console.log(balancePoint(z));   // false;