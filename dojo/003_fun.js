// count positve number
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) {
        countPositives++;
    }
}
console.log("there are " + countPositives + " positive values");



// A palindrome is a word that is spelled the same if read forwards or backwards. Some excellent palindrome examples are: racecar => tacocat
const isPalindrome = str => {
    for(let i = 0; i < str.length/2; i++) {
        let j = str.length - 1 - i;
        if(str[i] !== str[j]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome("racecar"));



// reverse array
const revereArray = function(arr) {
    for(let i = 0; i < arr.length/2; i++) {
        let j = arr.length - 1 - i;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
console.log(revereArray(['a','b','c','d','e']));



// return random num betw. 1-6
function d6() {
    var roll = Math.random();
    roll = Math.ceil(roll * 6);
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);



// randomly return a string;
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
const getRandomAnswer = arr => {
    let randomNum = Math.ceil(Math.random() * arr.length-1);
    return arr[randomNum];
}
console.log(getRandomAnswer(lifesAnswers));



// access object
var monster = {
    id: 1,
    name: "Bulbasaur",
    types: ["poison", "grass"]
};
console.log(monster.name)
console.log(monster.types[1])



// access pokemon
var pokémon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];
// If we wanted to console.log the names of the pokémon who have an id greater than 99 we could...
for(let i = 0; i < pokémon.length; i++) {
    if(pokémon[i].id > 99) {
        console.log(pokémon[i].name)
    }
}
// console.log the pokémon objects whose id is evenly divisible by 3
for(let i = 0; i < pokémon.length; i++) {
    if(pokémon[i].id % 3 === 0) {
        console.log(pokémon[i])
    }
}
// console.log the pokémon objects that have more than one type
for(let i = 0; i < pokémon.length; i++) {
    if(pokémon[i].types.length > 1) {
        console.log(pokémon[i])
    }
}
// console.log the names of the pokémon whose only type is "poison"
for(let i = 0; i < pokémon.length; i++) {
    if(pokémon[i].types.length === 1 & pokémon[i].types[0] === "poison") {
        console.log(pokémon[i])
    }
}
// console.log the first type of all the pokémon whose second type is "flying"
for(let i = 0; i < pokémon.length; i++) {
    if(pokémon[i].types[1] === "flying") {
        console.log(pokémon[i])
    }
}
// console.log the reverse of the names of the pokémon whose only type is "poison"
for(let i = 0; i < pokémon.length; i++) {
    if(pokémon[i].types.length === 1 & pokémon[i].types[0] === "poison") {
        console.log("before rever: ", pokémon[i].name)
        let str = pokémon[i].name;
        let newStr = "";
        for(let i = str.length - 1; i >=0; i--) {
            newStr += str[i];
        }
        console.log("after reverse: ", newStr);
    }
}



// nesting arrays
var arr2d = [   [2, 5, 8],
                [3, 6, 1],
                [5, 7, 7] 
            ];
const isPresent2d = (arr2d, value) => {
    for(let i = 0; i < arr2d.length; i++) {
        for(let j = 0; j < arr2d[i].length; j++) {
            if(arr2d[i][j] === value) {
                return true;
            }
        }
    }
    return false;
}
console.log(isPresent2d(arr2d, 6));



// flatten array
function flatten(arr2d) {
    var flat = [];
    for(let i = 0; i < arr2d.length; i++) {
        for(let j = 0; j < arr2d[i].length; j++) {
            flat.push(arr2d[i][j]);
        }
    }
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

function flatten2(arr2d) {
    return arr2d.flat();
}
    
var result = flatten2( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]