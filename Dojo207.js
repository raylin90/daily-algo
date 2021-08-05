// Nesting Array
var arr2d = [   [2, 5, 8],
                [3, 6, 1],
                [5, 7, 7]   ];

const isPresent2d = (arr2d, value) => {
    for(let i = 0; i < arr2d.length; i++) {
        for(let j = 0; j < arr2d[i].length; j++) {
            if(arr2d[i][j] == value) {
                return true;
            }
        }
    }
    return false;
}

console.log(isPresent2d(arr2d, 8));



// Flatten Array 1
function flatten(arr2d) {
    var flat = [];
    for(let i = 0; i < arr2d.length; i++) {
        for(let j = 0; j < arr2d[i].length; j++) {
            flat.push(arr2d[i][j]);
        }
    }
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]


// Flatten Array 1
function flatten2(arr2d) {
    var flat = [];
    flat = arr2d.flat();
    return flat;
}
    
var result = flatten2( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]