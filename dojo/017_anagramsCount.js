// define aa group of anagrams as aa list of wors, where for each pair of words w1 and w2, w1 is an anagram of w2;


function anagrams(words){
    newList = [];
    // iterate the array;
    for(let i = 0; i < words.length; i++) {
        // re-arrange the word alphabetically
        let alpha = words[i].split("").sort().join("");
        // once re-arranged, we re-store into the newList;
        // console.log(alpha)
        newList.push(alpha);
    }
    // sort the new array alphabetically
    newList = newList.sort();
    console.log(newList)
    // set count to count
    let count = 0;
    // iterate the newList, and check if j and j+1 is same or not, if yes, then we increase the j till no match, and increase the count same time, so it's unique;
    for(let j = 0; j < newList.length; j++) {
        if(newList[j] !== newList[j+1]) {
            count++;
        }
    }
    return count;
}
console.log(anagrams(["tea", "eat", "apple", "ate", "vaja", "cut", "java", "utc"])) // 4
// tea, eat, ate, utc
// apple,
// vaja, java,
// cut