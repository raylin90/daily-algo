

const binarySearch = (arr, value) => {

    // let start = 0;
    // let end = arr.length - 1;

    // while(start < end) {

    //     let midPoint = Math.floor((start+end) / 2);

    //     if(arr[midPoint] == value) {
    //         return true;
    //     } else if(arr[midPoint] > value) {
    //         // look at left
    //         end = midPoint - 1;
    //     } else if(arr[midPoint] < value) {
    //         // look at right
    //         start = midPoint + 1; 
    //     } 

    //     if(arr[start] == value) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    let start = 0;
    let end = arr.length - 1;

    // find the midpoint of the array
    while(start < end) {
        let midPoint = Math.floor((start + end) / 2);

        if(arr[midPoint] == value) {
            return true;
        } else if (value > arr[midPoint]) {
            // look at the right side of the array
            start = midPoint + 1;
        } else {
            // if not, then look at the left side of the array
            end = midPoint - 1;
        }
    }

    if(arr[end] == value) {
        return true;
    } else {
        return false; 
    }
}


console.log(binarySearch([5,8,9,15,17,23,24,34,77], 5));