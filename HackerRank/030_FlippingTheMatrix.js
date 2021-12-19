function flippingMatrix(matrix) {
    // find the length of the matrix -1, to reference the last index
    const length = matrix.length - 1;
    // sum variable to hold the output total;
    let sum = 0;
    
    // for loop the top left cornor by two nested loop
    for (let i = 0; i < Math.ceil(length / 2); i++) {
        for (let j = 0; j < Math.ceil(length / 2); j++) {

            console.log(matrix[i][j])

            // assume the currenct elment is the max value
            let max = matrix[i][j];
            // IMPORTANT, compare with cornor, instead of shifting row / column
            [
            matrix[length - i][length - j],
            matrix[i][length - j],
            matrix[length - i][j],
            // from it's corssponding cornor value, get the max value if for each loop
            ].forEach(num => {
                if(num > max) {
                    max = num;
                }
            });
            // add up the max vlaue
            sum += max;
        }
    }
    return sum;
}


let matrix = [
    [112,42,114,119],
    [56,125,56,49],
    [15,78,101,43],
    [62,98,114,108],
]
console.log(flippingMatrix(matrix));