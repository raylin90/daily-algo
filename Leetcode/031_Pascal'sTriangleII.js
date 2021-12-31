// https://leetcode.com/problems/pascals-triangle-ii/


/**
 * @param {number} rowIndex
 * @return {number[]}
 */

var getRow = function(rowIndex) {
    
    let result = [];

    for(let i = 0; i <= rowIndex; i++) {

        let lastArr = result[result.length-1] || [];
        // console.log(lastArr);
        let row = [];

        for(let j = 0; j <= i; j++) {
            if(j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(lastArr[j] + lastArr[j-1]);
            }
        }
        result.push(row);
    }
    return result[rowIndex];
};
console.log(getRow(3));     // [1,3,3,1]
console.log(getRow(0));     // [1]
console.log(getRow(1));     // [1,1]





var getRow = function(rowIndex) {
    // fill with 0's
    let result = new Array(rowIndex+1).fill(1);

    // forloop and backloop to sum it up
    for(let i = 0; i < rowIndex; i++) {
        for(let j = i; j > 0; j--) {
            result[j] = result[j] + result[j-1];
            console.log(result);
        }
        console.log("after ", i)
    }
    return result;
};
console.log(getRow(3));     // [1,3,3,1]
console.log(getRow(0));     // [1]
console.log(getRow(1));     // [1,1]





var getRow = function(rowIndex) {
    
    let arr = [];

    for(let i = 0; i <= rowIndex; i++) {

        arr[i] = new Array(i);
        arr[i][0] = 1;
        arr[i][i] = 1;

        for(let j = 1; j < i; j++) {
            arr[i][j] = arr[i-1][j-1] + arr[i-1][j];
        }
    }
    return arr.pop();
};
console.log(getRow(3));     // [1,3,3,1]
console.log(getRow(0));     // [1]
console.log(getRow(1));     // [1,1]