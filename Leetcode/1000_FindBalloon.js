function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let map = new Map();
    map.set("B", 0);
    map.set("A", 0);
    map.set("L", 0);
    map.set("O", 0);
    map.set("N", 0);

    // since we need to find how many BOLLOON has occured, we can run thought given S, and record each occurance
    for(let i = 0; i < S.length; i++) {
        if(map.has(S[i])) {
            map.set(S[i], map.get(S[i])+1)
        }
    }
    
    // set L, and O to it's half due to L and O occurs twice in given S
    map.set("L", Math.floor(map.get("L")/2));
    map.set("O", Math.floor(map.get("O")/2));
    // console.log(map)

    let min = Infinity;

    // find the smalest value map, that's how many times that BALLOON occured
    for(const[key,value] of map) {
        if(value < min) {
            min = value
        }
    }
    return min
}

console.log(solution("QAWABAWONL"))





function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let map = {
        "B": 0,
        "A": 0,
        "L": 0,
        "O": 0,
        "N": 0,
    }

    for(let i = 0; i < S.length; i++) {
        let char = S[i];
        // console.log(char)
        if(map[char] >= 0) {
            map[char]++;
        }
    }
    console.log(map)
    map["L"] = Math.floor(map["L"] / 2)
    map["O"] = Math.floor(map["O"] / 2)

    console.log(map)

}

console.log(solution("QAWABAWONL"))




/**
1) nested for loop to check each element with remaining element
    time: O(n^2)
    space: O(1)
2) one loop, run through element, second loop check temp string/array for matching char
    time: O(n^2)
    space: O(n)
3) set, one loop with set.has
    time: O(n)
    space: O(n)



1) five variable to hold BALON, for loop once
    time: O(n)
    space: O(1)
2) map to hold BALON, for loop once
    time: O(n)
    space: O(1)
 */