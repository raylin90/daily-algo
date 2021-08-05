// The Math Library
var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();
    
console.log(floor);
console.log(ceiling);
console.log(random);
// output: 
// 1
// 4
// random between 0 - 1 (inclusive 0, but not 1)



// Dice Roller
function d6() {
    var roll = Math.random();
    roll = Math.ceil(roll * 6);
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);



// Consult the Oracle
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

const randomAns = arr => {
    // we choose floor because we want to get down to 0 index
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];
}

console.log(randomAns(lifesAnswers))