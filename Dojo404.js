// matrix search

var big = [
    [67, 34, 45, 56],
    [98, 87, 76, 65],
    [56, 67, 78, 89],
    [54, 43, 32, 21],
]

var small = [
    [67, 78],
    [43, 32],
]

var anotherSmall = [
    [67, 7],
    [43, 32],
]

const matrixSearch = (arr1, arr2) => {

    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr1[i].length; j++) {
            if(arr1[i][j] == arr2[0][0]) {
                for(let x = 0; x < arr2.length; x++) {
                    for(let y = 0; y < arr2[x]; y++) {
                        if(arr2[x][y] !== arr2[i+x][j+y]) {
                            return false;
                        }
                    }
                }
            }

        }
    }
}

console.log(matrixSearch(big, small));          // true;
console.log(matrixSearch(big, anotherSmall));   // false;
