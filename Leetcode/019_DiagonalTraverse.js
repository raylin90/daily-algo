// https://leetcode.com/problems/diagonal-traverse/

// Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

/**
 * @param {number[][]} mat
 * @return {number[]}

1. think about indices, when we add up the i and j, it will be a pattern
    [0,0][0,1][0,2]         [0][1][2]
    [1,0][1,1][1,2]         [1][2][3]
    [2,0][2,1][2,2]         [2][3][4]
    a. we iterate every element, set the map key as i+j, and value as [i][j] element array
    b. once iteration is done, we should have a map each with i+j with it's array
    b. loop through the map, if key % 2 !== 0, we push it it, else, reverse it and push in

2. make a copy of same marix first
    a. even index unshift
    b. odd, push
 */

var findDiagonalOrder = function (matrix) {
    // map to hold key: i+j, value: []
    let map = new Map();
    // iterate the matrix, and store each indices and it's element
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(!map.has(i+j)) {
                map.set(i+j, [matrix[i][j]]);
            } else {
                map.set(i+j, [...map.get(i+j),matrix[i][j]]);
            }
        }
    }
    // console.log(map);

    let result = [];
    // loop the map, and if it's NOT divisible by 2, it's just push a COPY of it.
    map.forEach((value, key) => {
        if(key % 2 !== 0) {
            result.push(...value);
        // else, we need to reverse it before push
        } else {
            result.push(...value.reverse());
        }
        // console.log(key);
        // console.log(value);
    })
    return result;
};
console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]));       // [1,2,4,7,5,3,6,8,9]
console.log(findDiagonalOrder([[1,2],[3,4]]));       // [1,2,3,4]





var findDiagonalOrder = function (matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    // create the shadow array first to hold data
    let result = new Array(rows+cols-1).fill(null).map(()=> []);

    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
            // console.log(row+col)
            // if row + col % 2, then it's reversed order, use unshift
            if((row+col) % 2 === 0) {
                result[row+col].unshift(matrix[row][col]);
            // else, it's right order
            } else {
                result[row+col].push(matrix[row][col]);
            }
            // console.log(result);
        }
    }
    return result.flat();
};
console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]));       // [1,2,4,7,5,3,6,8,9]
console.log(findDiagonalOrder([[1,2],[3,4]]));       // [1,2,3,4]




