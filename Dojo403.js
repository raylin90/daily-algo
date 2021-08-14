// remove duplicate num in array
// ex: [4,7,8,8,4,2,3] --> [4,7,8,2,3]
// remove from origin array without creating a new one
// Hint: use array splice method

const removeDuplicates = arr => {

    let obj = {};

    for(let i = 0; i < arr.length; i++) {
        if(!obj[arr[i]]) {
            obj[arr[i]] = 1;
        } else {
            arr.splice(i,1);
            i--;
        }
    }

    return arr;
}

console.log(removeDuplicates([4,7,8,8,4,2,3]));