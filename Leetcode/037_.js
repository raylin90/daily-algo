var findDisappearedNumbers = function(nums) {
    let counting = new Array(nums.length+1).fill(0);

    for(const num of nums) {
        counting[num]++;
    }

    console.log(counting);

    let result = [];
    for(let i = 1; i < counting.length; i++) {
        if(counting[i] === 0) {
            result.push(i);
        }
    }
    return result;
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
console.log(findDisappearedNumbers([1,1]));






var findDisappearedNumbers = function(nums) {
    let set =  new Set(nums);
    // console.log(set);
    let result = [];

    for(let i = 0; i < nums.length; i++) {
        if(!set.has(i+1)) {
            result.push(i+1);
        }
    }
    return result;
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
console.log(findDisappearedNumbers([1,1]));