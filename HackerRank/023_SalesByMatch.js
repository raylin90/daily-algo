function sockMerchant(n, ar) {
    // Write your code here
    let obj = {};
    ar.forEach(num => {
        if(!obj[num]) {
            obj[num] = 1;
        } else {
            obj[num] ++;
        }
    })
    let pair = 0;
    // console.log(obj)
    for(const key in obj) {
        let temp = Math.floor(obj[key] / 2);
        // console.log(Math.floor(obj[key] / 2));
        pair += temp;
    }
    return pair;
}
console.log(sockMerchant(7,[1,2,1,2,1,3,2]));
console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]));




function sockMerchant(n, ar) {
    // Write your code here
    let obj = {};
    let pair = 0;

    ar.forEach(num => {
        if(!obj[num]) {
            obj[num] = 1;
        } else if(obj[num] === 0) {
            obj[num] = 1;
        } else {
            obj[num] = 0;
            pair++;
        }
    })
    return pair;
}
console.log(sockMerchant(7,[1,2,1,2,1,3,2]));
console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]));