"use strict"

function getSocTax(_grossPay) {
    let socialSecTax = _grossPay * 6.2 / 100;
    return socialSecTax;
}

let tax = getSocTax(200);
console.log("The tax is $" + tax);

//Medicare tax
function getMedicareTax(_grossPay) {
    let medicareTax = _grossPay * 1.45 / 100;
    return medicareTax;
}

let medicareT = getMedicareTax(200);
console.log("The tax is $" + medicareT);

//Federal tax.
function getFederalTax(_grossPay, withholdingCode) {
    let federalTax = 0;
    if (withholdingCode == 0) {
        federalTax = _grossPay * 23 / 100;
    }
    if (withholdingCode == 1) {
        federalTax = _grossPay * 21 / 100;
    }
    if (withholdingCode == 2) {
        federalTax = _grossPay * 19.5 / 100;
    }
    if (withholdingCode == 3) {
        federalTax = _grossPay * 18.5 / 100;
    }
    else {
        
    }

    return federalTax;
}
let person1 = getFederalTax(750, 0);
console.log(person1);
let person2 = getFederalTax(1550, 2);
console.log(person2);
let person3 = getFederalTax(200, 3);
console.log(person3);