function flippingBits(n) {
    return ~n >>> 0;
}
console.log(flippingBits(1101010101010))


function flippingBits(n) {
    const base2 = n.toString(2);
    console.log(base2)
    // function flip(i){
    //     if(i == '0') return '1'
    //     return '0'
    // }
    // const flipped = base2.padStart(32,'0').split('').map(flip).join('')
    // return parseInt(flipped,2)
}
console.log(flippingBits(1101010101010))



function flippingBits(n) {
    // convert n to binary, and split it into array
    let binArray = n.toString(2).split('')

    // add 0 index to the front of the binArray, to make it 32 bits
    while(binArray.length !== 32) {
            binArray.unshift('0')
    }
    // flip the 1 with 0
    for(let i = 0; i < binArray.length; i++) {
        // replace the value, 0 to 1, 1 to 0
        if(binArray[i] === '0') {
            binArray.splice(i, 1, '1') 
        } else {
            binArray.splice(i, 1, '0')
        }
    }
    // console.log(binArray)
    // join the binArray into a string, converte to int, and change to decimal
    let flippedBinNumToConvInt = parseInt(binArray.join(''), 2)
    return flippedBinNumToConvInt
}
console.log(flippingBits(1));