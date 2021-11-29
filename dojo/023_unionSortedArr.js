const unionSortedArr = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else if(arr2[j] < arr1[i]) {
            result.push(arr2[j]);
            j++;
        } else {
            result.push(arr1[i]);
            i++;
            j++;
        }
    }
    if(i < arr1.length) {
        for(let k = i; k < arr1.length; k++) {
            result.push(arr1[k])
        }
    } else if(j < arr2.length) {
        for(let k = i; k < arr2.length; k++) {
            result.push(arr2[k])
        }
    }
    return result
}
console.log(unionSortedArr([1,2,2,3,4,8,11,22],[1,2,5,7]))  // 1,2,2,3,4,5,7,8,11,22
console.log(unionSortedArr([2,3,4,4,6],[1,2,4,4,4,4,5,8,11]))  // 1,2,3,4,4,4,4,5,6,8,11