var spiralOrder = function(matrix) {

    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
    let result = [];

    while(top <= bottom && left <= right) {

        for(let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
            console.log(result);
        }
        top++;

        for(let j = top; j <= bottom; j++) {
            result.push(matrix[j][right]);
            console.log(result)
        }
        right--;

        if(top <= bottom) {
            for(let x = right; x >= left; x--) {
                result.push(matrix[bottom][x]);
                console.log(result)
            }
            bottom--;
        }

        console.log("*****", top, bottom, left, right)

        if(left <= right) {
            for(let y = bottom; y >= top; y--) {
                result.push(matrix[y][left]);
                console.log(result)
            }
            left++;
        }
    }
};
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));