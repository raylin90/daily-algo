
const innerSearch = (bigArr, smallArr, col, row) => {
    for(let x = 0; x < smallArr.length; x++) {
        for(let y = 0; y < smallArr[x].length; y++) {
            if(smallArr[x][y] !== bigArr[col+ x][row + y]) {
                return false;
            }
        }
    }
    return true;
}

const matrixSearch = (bigArr, smallArr) => {
    for(let i = 0; i < bigArr.length; i++) {
        for(let j = 0; j < bigArr.length; j++) {
            if(bigArr[i][j] === smallArr[0][0]) {
                if(innerSearch(bigArr, smallArr, i, j) === true) {
                    return true;
                }
            }
        }
    }
    return false;
}

let big = [
    [67,34,45,56],
    [98,87,76,65],
    [56,67,78,89],
    [54,43,32,21],
]
let small = [
    [67,78,89],
    [43,32],
]
let small2 = [
    [67,78,88],
    [43,32],
]
console.log(matrixSearch(big,small))       // true
console.log(matrixSearch(big, small2))      // false