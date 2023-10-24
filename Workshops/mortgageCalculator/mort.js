// "use strict"

//trying to connect this code to html index.

// function calculateMortgage() {
//      // mortgate M. calculator.
// let principal = 53000; // loan
// let interestRate = 0.07625;  // %7.625. // annual interest rate.
// let loanLength = 15;

// let monthlyPayment = 0;
// let totalNumOfPayments = 0;

// //calculation for monthly interest rate. (annual interest rate / 12 months).
// let monthlyInterestRate = interestRate / 12;

// //number of total payments.
// totalNumOfPayments = 12 * loanLength; // 15 years times 12 months.

// //calculate monthly payment using formula. M = P [ r(1 + r)^n ] / [ (1 + r)^n – 1]
// let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), totalNumOfPayments);
// let denumerator = Math.pow((1 + monthlyInterestRate), totalNumOfPayments) - 1;

// monthlyPayment = principal * (numerator / denumerator);

// console.log(`Montly payment is $${monthlyPayment.toFixed(2)} and total interest paid is:`);

// //part two calculate total interest paid.
// // using formula Total Interest = (M x n) - P
// let totalInterest = 0;

// totalInterest = (monthlyPayment * totalNumOfPayments) - principal;

// console.log(`Total interest is $${totalInterest.toFixed(2)}`);

// }