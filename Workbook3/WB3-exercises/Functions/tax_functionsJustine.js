"use strict"

//TODO Create a function that acceepts GROSS PAY and returns TAX AMOUNT with a rate of 6.2
function getSocSecTax(grossPay, socSectaxRate = 6.2) {
    const socSectaxAmount = (grossPay * (socSectaxRate / 100)).toFixed(2);
    return socSectaxAmount;
}
console.log(getSocSecTax(750));
console.log(getSocSecTax(115));
console.log(getSocSecTax(1100));

//TODO Create a function that accepts GROSS PAY and returns MEDICARE TAX with a rate of 1.45
function getMedicareTax(grossPay, medicareTaxRate = 1.45) {
    const medicareTaxAmount = (grossPay *(medicareTaxRate / 100)).toFixed(2);
    return medicareTaxAmount;
}
console.log(getMedicareTax(750));
console.log(getMedicareTax(1550));
console.log(getMedicareTax(1100));

/** //TODO Create a function that accepts GROSS PAY and WITHHOLDING CODE and returns FED TAX WHITHOLDING
 * 
 * @param {number} grossPay - how Much they make before taxes
 * @param {number} withHoldingCode - the code that represents taxes
 * @returns {number} - How much tax will be deducted
 */

function getFederalTax(grossPay, withHoldingCode) {
    
    let fedTaxRate;
    
    if(withHoldingCode == 0) {
        fedTaxRate = .23; 
    }
    else if(withHoldingCode == 1) {
        fedTaxRate = .21;
    }
    else if(withHoldingCode == 2) {
        fedTaxRate = .195;
    }
    else if(withHoldingCode == 3) {
        fedTaxRate = .185;
    }
    else {
        fedTaxRate = .18 - ((withHoldingCode - 4) * .005);
    }                       // this number represents how much above 4 you are

    const fedTaxWithholdings = (grossPay * fedTaxRate).toFixed(2);
    return fedTaxWithholdings;
}


console.log(getFederalTax(750, 0));      //172.5
console.log(getFederalTax(1550, 2));     //302.25
console.log(getFederalTax(1100, 6));     //187


// code 5 = 18% - ((1) * 0.5%)
// code 6 = 18% - ((6-4) * 0.5%)
// code 7 = 18% - ((7-4) * 0.5%)
// code 8 = 18% - ((8-4) * 0.5%)
// code 9 = 18% - ((9-4) * 0.5%)