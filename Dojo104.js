// Always Hungry
// Create a function that accepts an array, and print "yummy" each time one of the values is equal to "food". If no array value are "food", then print "I'm hungry" once.

// Ex: Give array [1, 4, "food", "hello", true, "food"]
// output:
// yummy
// yummy

// Ex: Give array [2, true, 5, "hello", 8, "four"]
// output:
// I'm hungry

const alwaysHungry = arr => {

    let counter = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy");
            counter++;
        }

    }

    if(counter == 0) {
        console.log("I'm hungry");
    }
}

alwaysHungry([1, 4, "food", "hello", true, "food"]);
alwaysHungry([2, true, 5, "hello", 8, "four"]);




// REDO:
const hungry = arr => {

    let output = false;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == "food"){
            console.log("yummy");
            output = true;
        }
    }

    if(output == false) {
        console.log("I'm hungy")
    }
}

hungry([1, 4, "food", "hello", true, "food"]);
hungry([2, true, 5, "hello", 8, "four"]);