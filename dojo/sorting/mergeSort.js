// // https://www.youtube.com/watch?v=mB5HXBb_HY8
// // big O: n*log(n)

const merge = (left, right) => {
    const array = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            array.push(left.shift());
        } else {
            array.push(right.shift());
        }
    }
    return array.concat(left).concat(right);
}
// console.log(merge([2,8,15,18,19,25], [5,9,12,17]));


const mergeSort = arr => {
    if(arr.length <= 1) return arr;
    const midPoint = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, midPoint);
    const rightArr = arr.slice(midPoint, arr.length);
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

console.log(mergeSort([5,7,4,8,3,1,9]));





const merge2 = (left, right) => {
    const array = [];
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            array.push(left[i]);
            i++;
        } else {
            array.push(right[j]);
            j++;
        }
    }
    if(i < left.length) {
        for(let k = i; k < left.length; k++) {
            array.push(left[k])
        }
    } else {
        for(let k = j; k < left.length; k++) {
            array.push(left[k])
        }
    }
    return array
}
// console.log(merge2([2,8,15,18,19,25], [5,9,12,17]));