"use strict"
 // mortgate M. calculator.
let principal = 53000; // loan?
let interestRate = 0.07625;  // %7.625. // annual interest rate.
let loanLength = 15;

let monthlyPayment = 0;
let totalNumOfPayments = 0;

//calculation for monthy interest rate.
let monthlyInterestRate = (principal * interestRate) / 12;

//n.
totalNumOfPayments = 12 * loanLength; // 15 years times 12 months.
console.log("montly interest rate  " + monthlyInterestRate);

//calculate monthly payment

let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), totalNumOfPayments);
let denumerator = Math.pow((1 + monthlyInterestRate), totalNumOfPayments) - 1;
console.log("Numberator " + numerator);
console.log("Denumerator " + denumerator);
monthlyPayment = principal * (numerator / denumerator);



console.log(`Montly payment is ${monthlyPayment} and total interest paid is:`);




// // Use the mortgage formula to calculate the monthly payment
// const monthlyPaymentUnrounded = principalLoanAmount *
//     (monthlyInterestRateDecimal * Math.pow(1 + monthlyInterestRateDecimal, totalNumberOfPayments)) /
//     (Math.pow(1 + monthlyInterestRateDecimal, totalNumberOfPayments) - 1);

//     console.log(`The monthly payment is ${monthlyPaymentUnrounded}`);
//     console.log(`The monthly payment is ${monthlyPaymentUnrounded}`);



    // Use the mortgage formula to calculate the monthly payment
//const monthlyPaymentUnrounded = principalLoanAmount * 
//(monthlyInterestRateDecimal * Math.pow(1 + monthlyInterestRateDecimal, totalNumberOfPayments)) / 
//(Math.pow(1 + monthlyInterestRateDecimal, totalNumberOfPayments) - 1);
//M is the total monthly mortgage payment.
//P is the principal loan amount.
//r is your monthly interest rate. This is your annual interest rate divided by 12 (the number of months in a year).
//n is your number of payments (the number of months you will be paying the loan).



