// https://www.hackerrank.com/challenges/one-month-preparation-kit-zig-zag-sequence/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-two

const zigZagSequence = (arr, n) => {

    // sort the arr from incrementaly
    arr = arr.sort(function(a,b) {return a-b});
    // console.log(arr)

    // get the middle value from the array
    let mid = (n + 1) / 2;
    let temp = arr[mid];
    // console.log("mid",mid);
    // console.log(temp);

    // swap the middle value with the last value, so we can have an zig zag
    arr[mid] = arr[n - 1];
    arr[n-1] = temp;

    console.log(arr)
    
    // since our left right is sort already, no need to touch it, but the right need to sort descending
    // set st the index after middle, ed use the n-2, because n-1 should be the smallest alreay.
    let st = mid + 1;
    let ed = n - 2;
    // console.log(arr[st],arr[ed])

    // while loop keep running till st is <= ed
    while(st < ed) {
        // swap during each iteration
        [arr[st],arr[ed]] = [arr[ed],arr[st]];
        // increase st, and decrease ed
        st = st+1;
        ed = ed-1;
    }

    // the arr should be swapped, just need join the array together with space in-btw.
    return arr.join(" ");
}
console.log(zigZagSequence([7,2,3,4,5,6,1],7));







var zigZag = function(array) {

    // Let's define a swap function that will come in handy later.
    var swap = function(i, j) {
        var temp = arr[i]
        arr[i] = arr[j]; 
        arr[j] = temp; 
    }
    
    // First, sort the array. You can use whatever method you'd like. 
    // Let's say that I used a merge sort. 
    arr = array.sort(function(a,b){return a-b}); 
    // Now that the array is sorted, we swap every two elements after 
    //   the first one. 
    for (var i = 1; i < arr.length; i = i + 2) {
        // console.log(arr[i]); 
        if (i === arr.length - 1) { 
        break; 
    }
    swap(i, i+1); 
    }
    
    // Finally, we return our modified array. 
    return arr;
}
console.log(zigZag([7,6,10,12,1,0,13,14]));





var zigZag2 = function(array) {

    // sort the array inp lace
    array = array.sort(function(a,b){return a-b});
    // console.log(array);

    // for loop and swap i and i+1, increase i by 2 during each iteration
    for(let i = 1; i < array.length; i+=2) {

        // stop the iteration, otherwise we might run into unidentify value
        if(i >= array.length - 1) break;
        [array[i],array[i+1]] = [array[i+1],array[i]];
        // console.log(array);
    }

    return array;
}
console.log(zigZag2([7,6,10,12,1,0,13,14]));