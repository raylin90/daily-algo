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



// Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions.
const removeAt = (arr, idx) => {
    let i = idx;
    while(i < arr.length) {
        arr[i] = arr[i+1];
        i++;
    }
    arr.pop();
    return arr;
}
const removeNegatives = arr => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            removeAt(arr, i);
            i--;
        }
    }
    return arr;
}
console.log(removeNegatives([1,2,-1,-2,3,-6,-6,-1,4,4,9,5,6,7]));

const removeNegatives2 = arr => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            [arr[i], arr[arr.length-1]] = [arr[arr.length-1], arr[i]];
            arr.pop();
        }
    }
    return arr;
}
console.log(removeNegatives2([1,2,-1,-2,3,-6,-6,-1,4,4,9,5,6,7]));



// Return the second-to-last element of an array. Given [42,true,4,"Kate",7], return "Kate". If array is too short, return null.
const secondToLast = arr => {
    if(!arr[arr.length - 2]) return null;
    return arr[arr.length - 2];
}
console.log(secondToLast([42, true, 4, "Kate", 7]))
console.log(secondToLast([42]))



// Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.
const nthToLast = (arr, n) => {
    if(!arr[arr.length - n]) return null;
    return arr[arr.length - n];
}
console.log(nthToLast([5,2,3,6,4,9,7],8));



// Return the second-largest element of an array. Given [42,1,4,Math.PI,7], return 7. If the array is too short, return null.
const bubbleSort = arr => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i+1] < arr[i]) {
            [arr[i+1], arr[i]] = [arr[i], arr[i+1]];
            return bubbleSort(arr)
        }
    }
    return arr;
}
const secondLargest = arr => {
    if(arr.length < 2) return null;
    bubbleSort(arr);
    // console.log(arr);
    return arr[arr.length - 2];
}
console.log(secondLargest([42,1,4,Math.PI,7]));



// Liam has "N" number of Green Belt stickers for excellent Python projects. Given arr and N, return the Nth-largest element, where (N-1) elements are larger. Return null if needed.
const selectSort = arr => {
    for(let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];
    }
    return arr;
}
const nthLargest = (arr, n) => {
    if(n > arr.length || n < 1) return null;
    selectSort(arr);
    console.log(arr);
    return arr[arr.length - n];
}
console.log(nthLargest([5,2,3,6,4,9,7],0));



// The Luhn formula is sometimes used to validate credit card numbers. Create the function isCreditCardValid(digitArr) that accepts an array of digits on the card (13-19 depending on the card), and returns a boolean whether the card digits satisfy the Luhn formula, as follows:

// For example, when given digit array [5,2,2,8,2], after step 1) it becomes [5,2,2,8], then after step 2) it is [5,4,2,16]. Post-3) we have [5,4,2,7], then following 4) it becomes 18. After step 5) our value is 20, so ultimately we return true. If the final digit were any non-multiple-of-10, we would instead return false.
const isCreditCardValid = digitArr => {
    // 1) Set aside the last digit; do not include it in these calculations (until step 5);
    let lastDigit = digitArr.pop();
    // 2) Starting from the back, multiply the digits in odd positions (last, third-to-last, etc.) by 2;
    for(let i = digitArr.length-1; i >=0; i-=2) {
        digitArr[i] *= 2;
        // console.log(digitArr[i])
        // 3) If any results are larger than 9, subtract 9 from them;
        if(digitArr[i] > 9) {
            digitArr[i] -= 9;
        }
    }
    // 4) Add all numbers (not just our odds) together;
    let total = 0;
    for(let i = 0; i < digitArr.length; i++) {
        total += digitArr[i];
    }
    // 5) Now add the last digit back in – the sum should be a multiple of 10.
    return (total + lastDigit) % 10 === 0 ? true : false;;

}
console.log(isCreditCardValid([5,2,2,8,2]));    // true;



// In JavaScript, the Array object has numerous useful methods. It does not, however, contain a method that will randomize the order of an array’s elements. Let’s create shuffle(arr), to efficiently shuffle a given array’s values. Work in-place, naturally. Do you need to return anything from your function?
const shuffle = arr => {
    let randomTimes = Math.ceil(Math.random()*50);
    for(let i = 0; i < randomTimes; i++) {
        let random1 = Math.floor(Math.random()*arr.length);
        let random2 = Math.floor(Math.random()*arr.length);
        [arr[random1],arr[random2]] = [arr[random2],arr[random1]];
    }
    return arr;
}
console.log(shuffle([20,30,40,50,60,70]));



// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it. 
const removeAt = (arr, idx) => {
    let i = idx;
    while(i < arr.length) {
        arr[i] = arr[i+1];
        i++;
    }
    arr.pop();
    return arr;
}
const removeRange = (arr, start, end) => {
    let loopTime = end - start + 1;
    for(let i = 0; i < loopTime; i++) {
        removeAt(arr, start)
    }
    return arr;
}
console.log(removeRange([20,30,40,50,60,70],2,4));



// You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].
const insertAt = (arr, idx, val) => {
    let i = arr.length;
    while(i > idx) {
        arr[i] = arr[i-1]
        i--;
    }
    arr[idx] = val;
    return arr;
}
const intermediateSums = arr => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if((i+1) % 10 === 0) {
            insertAt(arr,i+1,sum);
            i++;
            sum = 0;
        }
    }
    if(arr.length < 10) {
        arr.push(sum);
    } else {
        if(arr.length - 1 % 10 !== 0) {
            arr.push(sum);
        }
    }
    return arr;
}
console.log(intermediateSums([1,2,1,2,1,2,1,2,1,2,1,2,1,2]));   // [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6]
console.log(intermediateSums([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,]));   // [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6]