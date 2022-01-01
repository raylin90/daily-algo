var replaceElements = function(arr) {
    let copy = [...arr];

    for(let i = arr.length - 2; i >= 0; i--) {
        console.log(Math.max(arr[i+1],copy[i+1]));
        arr[i] = Math.max(arr[i+1],copy[i+1])
    }
    arr[arr.length - 1] = -1;
    return arr;
};
console.log(replaceElements([17,18,5,4,6,1]))