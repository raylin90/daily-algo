// https://leetcode.com/problems/spiral-matrix/

// Given an m x n matrix, return all elements of the matrix in spiral order.

/**
 * @param {number[][]} matrix
 * @return {number[]}

1. define top, bottom, left, right index, and narrow down in spiral order
    a. loop through top, top[i], top ++;
    b. move through right, [i][right], right--;
    c. move through bottom, buttom[i], buttom--;
    d. move left, [i][left]
    *** last two, need if statement, because constantly check left <= right, top <= buttom
 */

var spiralOrder = function(matrix) {

    let left = 0, right = matrix[0].length-1, top = 0, bottom = matrix.length-1;
    let result = [];

    while(left <= right && top <= bottom) {

        // (TOP) push from left index 0 to right index matrix[0].length - 1, top unchange, i change
        for(let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
            // console.log(result);
        }
        top ++;

        // (RIGHT) push from top 1 (now 1, becase top++) to bottom matrix.length - 1,  right unchange, i change
        for(let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
            // console.log(result);
        }
        right --;

        // (BOTTOM) push from right (now matrix[0].length - 2, because right --) to left 0, buttom unchange, i change
        if(top <= bottom) {
            for(let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
                // console.log(result);
            }
            bottom --;
        }

        // (LEFT) push from button to top, left unchange, i change
        if(left <= right) {
            for(let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
                // console.log(result);
            }
            left++;
        }
        console.log(left,right,top,bottom);
    }
    return result;
};
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));