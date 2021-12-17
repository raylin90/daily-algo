function bonAppetit(bill, k, b) {
    // find the total bill amount
    let total = 0;
    for(const num of bill) {
        total += num;
    }

    // once we have the total, we calculate the total minus what Anna didn' eat
    // console.log(total)
    total -= bill[k];
    // find the amount Anna need to pay
    let annaPay = total / 2;

    if(annaPay === b) {
        console.log("Bon Appetit");
    } else {
        console.log(Math.abs(annaPay - b));
    }
}
bonAppetit([3,10,2,9],1,12);
bonAppetit([3,10,2,9],1,7);