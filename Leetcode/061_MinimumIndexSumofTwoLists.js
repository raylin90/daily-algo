// https://leetcode.com/problems/minimum-index-sum-of-two-lists/


/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */

var findRestaurant = function(list1, list2) {

    // first loop to get all the restaurant and it's index, since value is unique, we can just set it
    let firstMap = new Map();
    for(let i = 0; i < list1.length; i++) {
        firstMap.set(list1[i], i);
    }
    // console.log(firstMap);

    // second loop to check if there's any matching restaurant
    let secondMap = new Map();
    for(let i = 0; i < list2.length; i++) {

        if(firstMap.has(list2[i])) {
            // once we found the match, we can get the sum of both restaurant index first;
            let count = firstMap.get(list2[i]) + i;

            // if we don't have matching count, then we set as array
            if(!secondMap.has(count)) {
                secondMap.set(count, [list2[i]]);
            } else {
                // in case we have two restaurant with same index, we can set into array
                secondMap.set(count, [...secondMap.get(count), list2[i]]);
            }
        }
    }
    
    // find the minimum index, and return it's value
    let min = Infinity;
    for(const [key, vaue] of secondMap) {
        if(key < min) {
            min = key;
        }
    }
    return secondMap.get(min);
};

console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]));
console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["KFC","Shogun","Burger King"]));