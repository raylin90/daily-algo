function twoArrays(k, A, B) {

    // sort the array a-b, and b-a
    A = A.sort(function(a,b) {return a-b})
    B = B.sort(function(a,b) {return b-a})
    // console.log(A, B)

    // a while loop keep running till end of the length;
    let i = 0;
    let j = 0;
    while(i < A.length && j < B.length) {
        // during each iteration, add up it's index i and j element, and see if it's >= k
        // if not true, then return NO
        let total = A[i] + B[j];
        if(total >= k) {
            // increase the i and j index, for next iteration
            i++;
            j++;
        } else {
            return "NO";
        }
    }
    // return "Yes" at the end;
    return "YES";
}
console.log(twoArrays(10,[1,2,3],[9,8,7]));
console.log(twoArrays(5,[1,2,2,1],[3,3,3,4]));