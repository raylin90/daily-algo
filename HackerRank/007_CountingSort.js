const coutingSort = arr => {
    let counts = Array(100).fill(0);
    arr.forEach(item => {++counts[item];});
    return counts;
}
console.log(coutingSort([1,0,3,1,3,1]))




const coutingSort = arr => {
    let n = arr.length;
    let countingArray = [];
    for(let i = 0; i < arr.length; i++) {
        countingArray.push(0)
    }


    for(let i = 0; i < arr.length; i++) {
        countingArray[arr[i]]++;
    }
    return countingArray;
}
console.log(coutingSort([1,0,3,1,3,1]))