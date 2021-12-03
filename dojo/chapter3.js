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



// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built- in functions.
const minToFront = arr => {
    let minIdx = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < arr[minIdx]) {
            minIdx = i;
        }
    }
    let min = arr[minIdx];
    for(let i = minIdx; i >=0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = min;
    return arr;
}
console.log(minToFront([4,2,1,3,5]))    // 1, 4, 2, 3, 5



// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().
const reverseArr = arr => {
    for(let i = 0; i < arr.length / 2; i++) {
        let j = arr.length - 1 - i;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
console.log(reverseArr([1,2,3,4,5,6,7]));



// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions. Fourth: minimize the touches of each element.
const rotateArr = (arr, shiftBy) => {
    if(shiftBy > 0) {
        for(let i = 0; i < shiftBy; i ++) {
            let removedVal = arr[arr.length - 1];
            for(let j = arr.length - 1; j > 0; j--) {
                arr[j] = arr[j-1]
            }
            arr[0] = removedVal;
        }
        return arr;
    } else {
        for(let i = 0; i < Math.abs(shiftBy); i++) {
            let removedVal = arr[0];
            for(let j = 0; j < arr.length; j++) {
                arr[j] = arr[j+1]
            }
            arr[arr.length - 1] = removedVal;
        }
        return arr;
    }
}
console.log(rotateArr([1,2,3], -3));



// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.
const removeAt = (arr, idx) => {
    let i = idx;
    while(i < arr.length) {
        arr[i] = arr[i+1];
        i++;
    }
    arr.pop();
    return arr;
}
const filterRange = (arr, min, max) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] <= min || arr[i] >= max) {
            removeAt(arr, i);
            i--;
        }
    }
    return arr;
}
console.log(filterRange([1,2,3,4,5,6,7,8,9,11,20,33], 5, 20))



// Replicate JavaScript’s concat(). Create a standalone function tray’s elementshat accepts two arrays. Return a new array containing the first array’s elements, followed by the second ar. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
const arrConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
}
console.log(arrConcat(['a','b'],[1,2])); // a b 1 2



// Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().
const skylineHeights = arr => {
    let obj = {};
    let current = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0 & arr[i] >= current) {
            current = arr[i];
            // console.log(current)
            if(!obj[arr[i]]) {
                obj[arr[i]] = 1;
            }
        }  
    }
    // console.log(obj);
    let output = [];
    for(const key in obj) {
        output.push(key);
    }
    return output;
}
console.log(skylineHeights([-1,1,1,7,3]));  // 1 7
console.log(skylineHeights([0,4]));  // 4