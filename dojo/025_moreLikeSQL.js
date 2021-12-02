function groupTransactions(transactions) {
    // obj to count how many item in an array
    let obj = {};
    // for loop the transactions
    for(let i = 0; i < transactions.length; i++) {
        // if obj[arr[i]] not exist, then add to obj, set value as 1
        if(!obj[transactions[i]]) {
            obj[transactions[i]] = 1;
        // eles, then it exist, we increase the value
        } else {
            obj[transactions[i]]++;
        }
    }
    // after done with for loop, we have count every element in the transactions
    // console.log(obj);
    // new array to hold the output;
    let output = [];
    // loop through obj, and store everything into output;
    for(const key in obj) {
        // concat. the key, value pair
        let word = `${key} ${obj[key]}`
        // push into the output array
        output.push(word);
    }
    output.sort();
    return output
}
console.log(groupTransactions(["bin", "apple", "bin", "bin"]))





function processLogs(logs, maxSpan) {
    // output array to hold outcome;
    let output = {};
    // temp arr to hold splitted array;
    let tempArr = [];
    // logs is an array of string (with space in betw.), so we need to loop through;
    for(let i = 0; i < logs.length; i++) {
        // need to find a way to split each index;
        tempArr.push(logs[i].split(" "));
    }
    console.log(tempArr)
    // how we have temp array with splitted sub-array, we can run nested-for-loop to compare with each;
    for(let i = 0; i < tempArr.length; i++) {
        for(let j = 0; j < tempArr.length; j++) {
            // if 0 index match, then it belongs to same user;
            if(tempArr[i][0] === tempArr[j][0]) {
                // find out the total time of user spend in app (signout - signin), find the absolute amount;
                if(tempArr[i][2] === "sign-in" && tempArr[j][2] === "sign-out") {
                    // let different = Math.abs(parseInt(tempArr[i][1]) - parseInt(tempArr[j][j]))
                    let different = Math.abs(parseInt(tempArr[i][1]) - parseInt(tempArr[j][1]))
                    console.log(parseInt(tempArr[i][1]))
                    console.log(parseInt(tempArr[j][1]))
                    console.log(different)
                    if(different > maxSpan) {
                        if(!output[tempArr[i][0]]) {
                            output[tempArr[i][0]] = different;
                        } else {
                            if(different > output[tempArr[i]]) {
                                output[tempArr[i][0]] = different;
                            }
                        }
                    }
                }
                }
            }
        }
        // console.log(output);
        
        let result = [];
        for(const key in output) {
            result.push(parseInt(key));
        }
        result.sort(function(a, b) {return a-b})
        return result;
                // if total time is > 20;
                    // push into output array;

        // once loop is done, we have an array of un-sorted;
        // return SORTED output arry;
    }

let logs = ["99 1 sign-in", "100 10 sign-in", "50 20 sign-in", "100 15 sign-out", "50 26 sign-out", "99 2 sign-out"];
console.log(processLogs(logs, 1));