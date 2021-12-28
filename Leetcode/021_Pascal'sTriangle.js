// https://leetcode.com/problems/pascals-triangle/

/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
*/

/**
 * @param {number} numRows
 * @return {number[][]}


1. the triangles has a pattern, take 5 as example:
    a. for loop five times
    b. inner loop that we loop till i point,
    c. inner row will add up j element with j-1 element, if if j === 0 / j === i, then it's one
    d. push row array to triangle array
 */

var generate = function (numRows) {

    // triangle to hold the output
    const triangel = [];

    // loop base on number given
    for(let i = 0; i < numRows; i++) {

        // temp row variable to hold each inner array
        const row = [];

        // get the last triangel index array
        let last = triangel[triangel.length-1] || [];
        // console.log(last);

        // for loop till i point
        for(let j = 0; j <= i; j++) {
            // first and last index will be 1
            if(j === 0 || j === i) {
                row.push(1);
            // else the pattern will be j + j-1 element
            } else {
                row.push(last[j] + last[j-1]);
            }
        }
        triangel.push(row);

    }
    return triangel;
};
console.log(generate(5));       // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]





var generate = function (numRows) {

    // triangle to hold the output
    const triangel = [];

    // loop base on number given
    for(let i = 0; i < numRows; i++) {

        let row = [];

        for(let j = 0; j <= i; j++) {
            if(j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(triangel[i-1][j-1] + triangel[i-1][j]);
            }
        }
        triangel.push(row);

    }
    return triangel;
};
console.log(generate(5));       // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]