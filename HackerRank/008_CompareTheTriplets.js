function compareTriplets(a, b) {
    // array to hold the score for Alice and Bob
    let score = [0, 0]
    // compare two array by it's first index first (while loopm, if length exist)
    while(a.length && b.length) {
        // if Alice[0] > Bob[0]
        if(a[0] > b[0]) {
            // score.Alice ++;
            score[0]++;
            // remove first index
            a.shift();
            b.shift();
        // if Alice[0] < Bob[0]
        } else if(a[0] < b[0]) {
            // score.Bob ++;
            score[1]++;
            // remove first index
            a.shift();
            b.shift();
        } else {
            // if equal, remove both
            a.shift();
            b.shift();
        }
    }
    // return Alice then Bob's score
    return score;
}
console.log(compareTriplets([1, 2, 3], [3, 2, 1]));





function compareTriplets(a, b) {
    // array to hold the score for Alice and Bob
    let score = [0, 0]
    // compare two array by it's first index first (while loopm, if length exist)
    let i = 0;
    let j = 0;
    while(i < a.length && j < b.length) {
        // if Alice[0] > Bob[0]
        if(a[i] > b[j]) {
            // score.Alice ++;
            score[0]++;
            // remove first index
            i++;
            j++;
        // if Alice[0] < Bob[0]
        } else if(a[i] < b[j]) {
            // score.Bob ++;
            score[1]++;
            // remove first index
            i++;
            j++;
        } else {
            // if equal, remove both
            i++;
            j++;
        }
    }
    // return Alice then Bob's score
    return score;
}
console.log(compareTriplets([1, 2, 3], [3, 2, 1]));