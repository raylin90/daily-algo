const intersectSortedArr = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            i++;
        } else if(arr1[i] > arr2[j]) {
            j++;
        } else {
            if(result.includes(arr1[i])) {
                i++;
                j++;
            } else {
                result.push(arr1[i]);
                i++;
                j++;
            }
        }
    }
    return result;
}

console.log(intersectSortedArr([1,2,2,3,4,5], [2,2,4,6,7,8]))   // [2,4]
console.log(intersectSortedArr([1,1,1,2,3,4],[1,1,3,4,5]))   // [1,3,4]




const intersectSortedArr2 = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            i++;
        } else if(arr1[i] > arr2[j]) {
            j++;
        } else {
            if(arr1[i] !== result[result.length - 1]) {
                result.push(arr1[i]);
                i++;
                j++;
            } else {
                i++;
                j++;
            }
        }
    }
    return result;
}

console.log(intersectSortedArr2([1,2,2,3,4,5], [2,2,4,6,7,8]))   // [2,4]
console.log(intersectSortedArr2([1,1,1,2,3,4],[1,1,3,4,5]))   // [1,3,4]





function intersection (arr1, arr2) {
    let result = [];
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                if(arr1[i] !== result[result.length - 1]) {
                    result.push(arr1[i]);
                }
            }
        }
    }
    return result;
}

console.log(intersection([1,2,2,3,4,5],[2,4,6,7,8]))
console.log(intersection([1,1,1,2,3,4],[1,1,3,4,5]))