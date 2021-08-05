// Always isSunny
var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
    whatToBring += "sunglasses, ";
}
if(temperature < 50) {
    whatToBring += "a coat, ";
}
if(isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);
// output:
// I should bring: sunglasses, a coat, and a smile!



// Prepare for downcount
for(var i=10; i>0; i--) {
    if(i != 2) {
        console.log(i);
    } else {
        console.log("ignition!");
    }
}
console.log("liftoff!");
// output:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// ignition
// 1
// liftoff



// Count positives
var countPositives = 0;
var numbers = [3, 2, -1, 5, 16, 8, -4];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] >= 0) {
        countPositives++;
    }
}

console.log("there are " + countPositives + " positive values");