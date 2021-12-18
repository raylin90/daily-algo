function matchingStrings(strings, queries) {
    // Write your code here
    for(let i = 0; i < queries.length; i++) {
        // console.log(queries[i]);
        let filteredString = strings.filter(word => word === queries[i]);
        // console.log(filteredString);
        queries[i] = filteredString.length;
    }
    return queries;
}
console.log(matchingStrings(["ab","ab","abc"],["ab","abc","bc"]));