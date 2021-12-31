var validMountainArray = function(arr) {
    
    let i = 0; 
    let j = arr.length - 1;

    while(i < j) {
        if(arr[i] < arr[i+1]) {
            i++;
        } 
        else if(arr[j] < arr[j-1]) {
            j--;
        }
        else {
            break;
        }
    }
    console.log(arr[i],arr[j])

    if(i === 0 || j === arr.length - 1) {
        return false;
    } else if(i === j) {
        return true;
    } else {
        return false;
    }
};
console.log(validMountainArray([0,3,2,1]))
console.log(validMountainArray([2,1]))
console.log(validMountainArray([3,5,5]))