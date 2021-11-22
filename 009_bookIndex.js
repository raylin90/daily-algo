// Write a function that given a sorted array of page numbers, return a string representing a book index. Combine consecutive pages to create ranges.

// Example: [1,3,4,5,6,7,8,10] --> "1, 3-8, 10"
const bookIndex = arr => {
    let output = "";
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] + 1 === arr[i + 1]) {
            // sequential number
            let start = arr[i];
            while(arr[i] + 1 === arr[i + 1]){
                console.log("comparing ", arr[i], " and ", arr[i+1])
                i++;
            }
            let end = arr[i];
            output += start + "-" + end + ",";
        } else {
            output += arr[i] + ",";
        }
    }
    return output;
}
console.log(bookIndex([1,3,4,5,6,7,8,10]))