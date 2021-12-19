/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {

    // result counts how much time we have matching case
    let result = 0;
    // temp Array to hold each occurance
    let tempArr = [];
    // reducer which we can sum up every element in tempArr
    const reducer = (num1,num2) => num1+num2;

    // loop through the given s array;
    for(let i = 0; i < s.length; i++) {
        // store the occurance from current index, till the i+m length
        tempArr = s.slice(i, i+m);
        // console.log(tempArr);

        // sum up every element from the tempArr, and if it === to d, we have a match
        if(tempArr.reduce(reducer) === d) {
            result++;
        }
    }
    return result;
}
console.log(birthday([2,2,1,3,2], 4, 2));