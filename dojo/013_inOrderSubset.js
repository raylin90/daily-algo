// given a string, return an array containing all the IN ORDER output of that string
// input: "abc"
// output: ["", "a", "b", "c", "ab", "ac", "bc", "abc"];



function inOrderSubset(nums) {
    const output = [[]]
    for (const str of nums) {
        output.forEach(list => {
            output.push([...list, str])
        })
    }
    return output
}
console.log(inOrderSubset([1,2,3]))


const inOrderSubset2 = (stringinput, sub = "", i=0) => {
    if (i == stringinput.length) {
        return sub + ","
    }
    return inOrderSubset2(stringinput, sub+stringinput[i], i+1) + inOrderSubset2(stringinput, sub, i+1)
}

console.log(inOrderSubset2([1,2,3]))