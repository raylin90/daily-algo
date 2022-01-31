function solution(A, B) {
    if((A + B) < 4) {
        return 0;
    }

    if(A===B) {
        return ((A+B)/4);
    }

    // find the longest C that can cut
    let C = Math.floor((A+B) / 4);
    // console.log("longest", C)

    // if any A or B < C, then we can cut the other part
    if(A < C) {
        return B/4;
    } else if(B < C) {
        return A/4;
    } else {

        // find out how many cut we can perform on A and B
        let cutA = Math.round(A/C);
        let cutB = Math.round(B/C);
        // console.log(cutA, cutB)

        // if ===, then we get the smallest number / 2
        if(cutA === cutB) {
            return Math.floor(Math.min(A, B)/ 2);
            // other wise, we get the largest cut part, and divide by it's cut
        } else if(cutA > cutB) {
            return A / cutA;
        } else {
            return B / cutB;
        }
    }

}
console.log(solution(10,21));
console.log(solution(13,11));

/**
1. two edge case, if A+B < 4 and === 4
2. 4-0, 1-3, 2-2, 3-1, 0-4

3. C is the average longer INT stick we can get
5.25 => 5

4. 4-0 and 0-4 first shorter than C, then we take the other number / 4,
 */