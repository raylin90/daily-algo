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