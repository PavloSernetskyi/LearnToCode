"use strict"

function calculateMortgage() {
    // mortgate M. calculator.

    // input fileds from user.
    const principal = parseFloat(document.getElementById('principal').value); // loan
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;  // %7.625. // annual interest rate.
    const loanLength = parseFloat(document.getElementById('loanLength').value);
    //calculations.
    let monthlyPayment = 0;
    let totalNumOfPayments = 0;
    //calculation for monthly interest rate. (annual interest rate / 12 months).
    let monthlyInterestRate = interestRate / 12;
    //number of total payments.
    totalNumOfPayments = 12 * loanLength; // 15 years times 12 months.
    //calculate monthly payment using formula. M = P [ r(1 + r)^n ] / [ (1 + r)^n – 1]
    const numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), totalNumOfPayments);
    const denumerator = Math.pow((1 + monthlyInterestRate), totalNumOfPayments) - 1;
    monthlyPayment = principal * (numerator / denumerator);
    // part two calculate total interest paid.
    // using formula: Total Interest = (M x n) - P
    let totalInterest = 0;

    totalInterest = (monthlyPayment * totalNumOfPayments) - principal;

    let message = `Monthly payment is: $${monthlyPayment.toFixed(2)}, the total interest is $${totalInterest.toFixed(2)}.`;
    //, principal is: ${principal}, interest rate is: ${interestRate}, and loan length is ${loanLength} years.

    // display output in html.
    if(!isNaN(principal) && !isNaN(interestRate) && !isNaN(loanLength))
    {
        document.getElementById('output').innerHTML = message;
    }
    // else if(loanLength > 20){
    //     document.getElementById('output').innerHTML = `You can not go more than 20 years. Try again.`;
    // }

    else
    {
        document.getElementById('output').innerHTML = message;
    }
    
};
