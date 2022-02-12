const removeElement = (nums, k) => {

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === k) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums;
}
console.log(removeElement([3,2,2,3],2));