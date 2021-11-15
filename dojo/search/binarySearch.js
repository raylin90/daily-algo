const binarySearh = (arr, value) => {
    let start = 0;
    let end = arr.length;
    while(start < end) {
        let midPoint = Math.floor((end + start) / 2)
        // console.log(start, end, midPoint)
        // console.log(arr.slice(start, end+1))
        if(arr[midPoint] === value) {
            return true;
        } else if(arr[midPoint] < value) {
            // right
            start = midPoint+1;
        } else {
            // look left
            end = midPoint-1;
        }
    }
    if(arr[start] === value) {
        return true;
    } else {
        return false;
    }
}
console.log(binarySearh([5,8,9,15,17,23,24,34,77,100], 100));



const binarySearh2 = (arr, value) => {
    if(arr.length === 1) {
        return (arr[0] === value) ? true : false;
    }
    let midPoint = Math.floor(arr.length / 2);
    if(arr[midPoint] === value) {
        return true;
    } else if(arr[midPoint] < value) {
        return binarySearh2(arr.slice(midPoint, arr.length), value)
    } else {
        return binarySearh2(arr.slice(0, midPoint), value)
    }
}
console.log(binarySearh2([5,8,9,15,17,23,24,34,77,100], 2));