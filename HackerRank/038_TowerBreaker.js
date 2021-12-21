// https://www.hackerrank.com/challenges/one-month-preparation-kit-tower-breakers-1/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-two&h_r=next-challenge&h_v=zen

/*
 * Complete the 'towerBreakers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */

function towerBreakers(n, m) {
    

    // player can choose to reduce the height (X) to (Y), 1 <= Y < X, most optimal move is to reduce a tower down to one
    // out of move will loss


    // if m = 1 (odd), P1 remove it, P2 will be out of move
    // if m = 2 (even), P1 remove one, P2 remove one, P1 out of move
    
    // if n = 1 (odd), P1 win
    // if n = 2 (even), P2 will always win by mirroring P1

    // n2 m2 P2 win
    // n2 m1 P2 win
    // n1 m1 P1 win
    // n1 m2 P2 win

    // so if tower if even, P2 alway win, only situation P2 cannot win is m === 1;

    if(n % 2 === 0 || m === 1) return 2;
    return 1;
}
console.log(towerBreakers(2,6));
console.log(towerBreakers(2,2));
console.log(towerBreakers(1,4));