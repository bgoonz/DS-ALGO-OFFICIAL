function checkCashRegister(price, cash, cid) {
// set up vars
var currency = {
    "PENNY":0.01,
    "NICKEL":0.05,
    "DIME": 0.10,
    "QUARTER" : 0.25,
    "ONE":1.00,
    "FIVE":5.00,
    "TEN":10.00,
    "TWENTY" :20.00,
    "ONE HUNDRED":100.00
    };
var change = [];
var difference = cash-price;

// if difference === cid, denoms don't matter
var cidVal = [];
cid.forEach(n => cidVal.push(n[1]));
var cidSum = cidVal.reduce((a,b) => a+b);
if (difference === cidSum) {
    return "Closed";
} else {

// loop backwards through cid highest to lowest
for (var i = cid.length-1; i >= 0; i--) {
    var acc = 0;
    var cash = cid[i][1]; // amount of cash
    var name = cid[i][0]; // name of currency
    var denom = currency[name]; // will access value
    // while denomination of this type exists and difference is greater than one unit, add this denomination
    while (cash/denom >= 1 && difference >= denom) {
        acc += denom;
        cash = cash-denom;
        difference = (difference - denom).toFixed(2);
    }
    // on loop break, will add accumulated denom, if any of that type
    if (acc > 0) {
        change.push([name, acc]);
    }
    // continues through remainder of cid
}

// if all difference is accounted for and there was enough cid
if (difference == 0) {
    return change;
} else
// if not all difference was accounted for
if (difference > 0) {
    return "Insufficient Funds";
}
}

}

console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));

