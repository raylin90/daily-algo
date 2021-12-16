function flippingMatrix(matrix) {
    const len = matrix.length - 1;
    const half = (len + 1) / 2;
    let sum = 0;
    for (let i = 0; i < half; i += 1) {
        for (let j = 0; j < half; j += 1) {
            let max = matrix[i][j];
            [
            matrix[len - i][len - j],
            matrix[i][len - j],
            matrix[len - i][j],
            ].forEach((val) => {
            if (val > max) {
                max = val;
            }
            });
            sum += max;
            max = 0;
        }
    }
    return sum;
}
let matrix = [
    [1,2],
    [3,4]
]
console.log(flippingMatrix(matrix));