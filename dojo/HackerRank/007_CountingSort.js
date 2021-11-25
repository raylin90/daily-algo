// const coutingSort = arr => {
//     if(arr.length < 2) return arr;
//     let maxValue = arr[0];
//     for(let i = 1; i < arr.length; i++) {
//         if(arr[i] > maxValue) {
//             maxValue = arr[i];
//         }
//     }
//     // console.log(maxValue);

//     const countingArray = new Array(maxValue + 1);
//     for(let value of arr) {
//         if(!countingArray[value]) {
//             countingArray[value] = 0;
//         }
//         countingArray[value]++;
//         // console.log(countingArray)
//     }

//     const resultArray = [];
//     for(let i = 0; i < countingArray.length; i++) {
//         while(countingArray[i] > 0) {
//             resultArray.push(i);
//             countingArray[i]--;
//         }
//     }
//     return resultArray;
// }
// console.log(coutingSort([1,0,3,1,3,1]))
// console.log(coutingSort([1,1,3,2,1]))






const coutingSort = arr => {
    if(arr.length < 2) return arr;
    let maxValue = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    console.log(maxValue);

    const countingArray = new Array(maxValue + 1);
    // for(let value of arr) {
    //     if(!countingArray[value]) {
    //         countingArray[value] = 0;
    //     }
    //     countingArray[value]++;
    //     // console.log(countingArray)
    // }
    console.log(countingArray)
    // const resultArray = [];
    // for(let i = 0; i < countingArray.length; i++) {
    //     while(countingArray[i] > 0) {
    //         resultArray.push(i);
    //         countingArray[i]--;
    //     }
    // }
    // return resultArray;
}
console.log(coutingSort([1,0,3,1,3,1]))
// console.log(coutingSort([1,1,3,2,1]))