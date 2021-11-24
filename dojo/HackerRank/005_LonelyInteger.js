const lonelyInteger = a => {
    // create obj to hold unique value;
    let obj = {};
    // iterate the array;
    for(let i = 0; i < a.length; i++) {
        // if obj does not have a[i], then it's unique, add to obj
        if(!obj[a[i]]) {
            obj[a[i]] = 1;
        } else {
            // if exist already, we do ++;
            obj[a[i]]++;
        }
    }
    // iterate throught the obj
    for(const property in obj) {
        // find the unique value, which will be 1
        if(obj[property] === 1) {
            // return the obj key
            return property;
        }
    }
}
console.log(lonelyInteger([1,2,3,4,3,2,1]))