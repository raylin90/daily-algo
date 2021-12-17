function catAndMouse(x, y, z) {
    // find the distance betw. cat x, cat y with mouse z
    let catXDistance = Math.abs(x-z);
    let catYDistance = Math.abs(y-z);

    // console.log(catXDistance)
    // console.log(catyDistance)
    
    // if cat x and cat y distance is equal, then mouse will escape
    if(catXDistance === catYDistance) {
        return "Mouse C";
    // else the smallest number cat will return
    } else if(catXDistance < catYDistance) {
        return "Cat A";
    } else {
        return "Cat B";
    }
}
console.log(catAndMouse(1,2,3));
console.log(catAndMouse(1,3,2));