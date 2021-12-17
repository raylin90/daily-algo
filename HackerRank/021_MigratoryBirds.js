function migratoryBirds(arr) {
    // Write your code here
    let birdList = {};
    
    // count the array, and store each occurance
    arr.forEach(id => {
        if(!birdList[id]) {
            birdList[id] = 1;
        } else {
            birdList[id] ++;
        }
    })

    // console.log(birdList);

    let maxAmount = 0;
    let id;

    // iterate the obj and find the largest number
    for(const key in birdList) {
        if(birdList[key] > maxAmount) {
            maxAmount = birdList[key]
            id = key;
        }
    }
    return id;
}
console.log(migratoryBirds([1,4,4,4,5,3]));
console.log(migratoryBirds([1,1,2,2,3]));