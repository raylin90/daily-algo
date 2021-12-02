// Given array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods
const pushFront = (arr, num) => {
    for(let i = arr.length ; i >=0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = num;
    return arr;
}
console.log(pushFront([1,2,3,4,5],8))



// Given array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
const insertAt = (arr, idx, val) => {
    let i = arr.length;
    while(i > idx) {
        arr[i] = arr[i-1]
        i--;
    }
    arr[idx] = val;
    return arr;
}
console.log(insertAt([1,2,3,4,5], 1, 8))



// Given array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
const popFront = arr => {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr.pop();
    return arr;
}
console.log(popFront([1,2,3,4,5]))



// Given array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
const removeAt = (arr, idx) => {
    let i = idx;
    while(i < arr.length) {
        arr[i] = arr[i+1];
        i++;
    }
    arr.pop();
    return arr;
}
console.log(removeAt([1,2,3,4,5],4))



// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.
const swapPairs = arr => {
    for(let i = 1; i < arr.length; i+=2) {
        console.log(i);
        [arr[i], arr[i-1]] = [arr[i-1],arr[i]];
    }
    return arr;
}
console.log(swapPairs([1,2,3,4]));  // 2,1,4,3;
console.log(swapPairs(["Brendan",true,42]));  // true,"Brendan",42



// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
// Second: solve this without using any nested loops.
const removeDuplicates = arr => {
    let obj = {}
    for(let i = 0; i < arr.length; i++) {
        if(!obj[arr[i]]) {
            obj[arr[i]] = 1;
        }
    }
    // console.log(obj)
    let output = [];
    for(const key in obj) {
        output.push(parseInt(key));
    }
    return output;
}
console.log(removeDuplicates([1,1,2,3,4,4,4,6,7,7,9,9,10,10,11]))

const removeDuplicates2 = arr => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i+1]) {
            arr.splice(i+1,1);
            i--;
        }
    }
    return arr;
}
console.log(removeDuplicates2([1,1,2,3,4,4,4,6,7,7,9,9,10,10,11]))