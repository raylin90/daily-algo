// write a function that given a sorted array of page numbers, return a string representing a book index. Combine consercutive pages to create ranges

// ex: [1,3,4,5,7,8,10,12] --> "1, 3-5, 7-8, 10, 12"

const bookIndex = arr => {
    // empty variable to hold our output
    var str = "";
    // forloop iteration
    for(let i = 0; i < arr.length; i++) {
        // compare arr[i] + 1 with arr[i + 1], and if it matches
        if(arr[i] + 1 == arr[i + 1]) {
            // we set start as arr[i]
            let start = arr[i];
            // we keep looping till the end
            while(arr[i] + 1 == arr[i + 1]) {
                i++
            }
            // once out of while loop, we set end as arr[i]
            let end = arr[i];
            // concat. into out output str
            str += start + "-" + end + ",";
        } else {
            // if arr[i] + 1 with arr[i + 1] does not match, then we just add it to our output
            str += arr[i] + ",";
        }
    }
    return str;
}

console.log(bookIndex([1,3,4,5,7,8,10,12]));