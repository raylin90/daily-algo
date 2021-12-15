function lonelyinteger(a) {
    // obj to count the array during each iteration
    let obj = {};
    // interate the array input;
    for(const value of a) {
        // if obj does not has the value key, set the key = 1
        if(!obj[value]) {
            obj[value] = 1;
        // else increase the key:value by 1;
        } else {
            obj[value]++;
        }
    }
    // once iteration is done, we should have obj key of each occurance
    // console.log(obj)

    // for loop the obj, and if the value === 1, then the key is unique;
    for(const key in obj) {
        if(obj[key] === 1) {
            return key;
        }
    }
}


console.log(lonelyinteger([1,2,3,4,3,2,1]));