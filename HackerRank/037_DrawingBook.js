// https://www.hackerrank.com/challenges/one-month-preparation-kit-drawing-book/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-two

/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */


function pageCount(n, p) {

    // find out the total turns need to to turn entire book, since each turn will have two pages, then n / 2,
    const total_turns = Math.floor(n/2);

    // turn from the start, if 1 page, then 0 turn, 2-3, floor will be 1 turn, 4-5, gives 2 turns.
    const from_start = Math.floor(p/2);

    // console.log(total_turns)
    // console.log(from_start)

    // since we know the total turn and start turn, we can get end turn by subtract
    const from_end = total_turns - from_start;
    return Math.min(from_start,from_end)
}

console.log(pageCount(5,3));
console.log(pageCount(5,4));
console.log(pageCount(6,2));