const removeDuplicate = arr => {
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
        if(obj[arr[i]]) {
            // remove
            arr.splice(i, 1);
            i--;
        } else {
            obj[arr[i]] = 1;
        }
        console.log(obj)
        console.log(i)
    }
    return arr;
}
let x = [4,7,8,8,4,2,3];
console.log(removeDuplicate(x));