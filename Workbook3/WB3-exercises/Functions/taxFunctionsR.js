// Function to calculate Social Security Tax based on gross pay
function getSocSecTax(grossPay) {
    // Social Security tax rate: 6.2%
    return grossPay * 0.062;
}

// Function to calculate Medicare Tax based on gross pay
function getMedicareTax(grossPay) {
    // Medicare tax rate: 1.45%
    return grossPay * 0.0145;
}

// Function to calculate Federal Tax based on gross pay and withholding code
function getFederalTax(grossPay, withholdingCode) {
    // Initial tax rate
    let taxRate = 0;
    
    // Determine tax rate based on withholding code
    switch (withholdingCode) {
        case 0:
            taxRate = 0.23; // 23%
            break;
        case 1:
            taxRate = 0.21; // 21%
            break;
        case 2:
            taxRate = 0.195; // 19.5%
            break;
        case 3:
            taxRate = 0.185; // 18.5%
            break;
        default:
            // Decrease tax rate by 0.5% for each code over 4
            taxRate = 0.185 - (0.005 * (withholdingCode - 4));
            // Ensure minimum tax rate is 17%
            if (taxRate < 0.17) taxRate = 0.17;
            break;
    }
    
    // Calculate and return the federal tax
    return grossPay * taxRate;
}

// Testing the functions with provided sample data
console.log(`Person 1 (Gross Pay: $750, Withholding Code: 0) - SocSecTax: $${getSocSecTax(750)}, MedicareTax: $${getMedicareTax(750)}, FederalTax: $${getFederalTax(750, 0)}`);
console.log(`Person 2 (Gross Pay: $1550, Withholding Code: 2) - SocSecTax: $${getSocSecTax(1550)}, MedicareTax: $${getMedicareTax(1550)}, FederalTax: $${getFederalTax(1550, 2)}`);
console.log(`Person 3 (Gross Pay: $1100, Withholding Code: 6) - SocSecTax: $${getSocSecTax(1100)}, MedicareTax: $${getMedicareTax(1100)}, FederalTax: $${getFederalTax(1100, 6)}`);