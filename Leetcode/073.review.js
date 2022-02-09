class MyLog {
    
    // name;
    // time;

    constructor(name, time) {
        this.name = name;
        this.time = time;
    }
}


const isWithinOneHr = (time1, time2) => {
    let t1h = parseInt(time1.split(":")[0]);
    let t1m = parseInt(time1.split(":")[1]);
    let t2h = parseInt(time2.split(":")[0]);
    let t2m = parseInt(time2.split(":")[1]);

    if(t2h - t1h > 1) {
        return false;
    } else if(t2h - t1h == 1) {
        let min = 60 - t1m + t2m;
        // console.log(min)
        return min <= 60;
    } else {
        return true;
    }
}
// console.log(isWithinOneHr("10:10","11:11"));

var alertNames = function(keyName, keyTime) {

    let myLogArray = [];
    
    for(let i = 0; i < keyName.length; i++) {
        // let temp = new MyLog(keyName[i],keyTime[i]);
        let key = keyName[i];
        let time = keyTime[i];
        let temp = {key, time}
        myLogArray.push(temp);
    }

    // console.log(myLogArray);

    myLogArray.sort((a,b)=>{
        return ('' + a.time).localeCompare(b.time);
    })

    // console.log(myLogArray);

    let map = new Map();

    for(let i = 0; i < myLogArray.length; i++) {
        let name = myLogArray[i].key;
        let time = myLogArray[i].time;
        if(!map.has(name)) {
            map.set(name, [time]);
        } else{
            map.set(name, [...map.get(name), time])
        }
    }
    // console.log(map);

    let result = [];
    for(const [key, value] of map) {
        // console.log(key,  value)

        let i = 0;
        let j = 0;
        while(j < value.length) {
            if(isWithinOneHr(value[i], value[j])) {
                j++;
                if(j - i >= 2) {
                    result.push(key);
                    break;
                } 
            } else {
                i++;
            }
        }
    }
    // console.log(result);
    return result.sort();
};
console.log(alertNames(["daniel","daniel","daniel","luis","luis","luis","luis"], ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]));



