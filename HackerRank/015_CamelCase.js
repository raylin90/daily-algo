function camelcase(s) {
    // alphabetic capital letter array
    let alphabetic = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    // set count as 1 because first letter is lowercase;
    let count = 1;
    // for loop the s input
    for(let i = 0; i < s.length; i++) {
        // if we encounter any letter in alphabetic array, then we increase count by 1
        if(alphabetic.includes(s[i])) {
            count++;
        }
    }
    return count;
}
console.log(camelcase("saveChangesInTheEditor"));   // 5
console.log(camelcase("oneTwoThree"));  // 3





function camelcase(s) {
    // split the word base on regex, then count the length
    // console.log(s.split(/[A-Z]/))
    return s.split(/[A-Z]/).length
}
console.log(camelcase("saveChangesInTheEditor"));   // 5
console.log(camelcase("oneTwoThree"));  // 3