"use strict"

const principal = 53000;
const annualInterestRate = 7.625;
const loanLengthInYears = 15;

const monthlyInterestRate = (annualInterestRate / 100) / 12;

// Convert loan length from years to months
const months = loanLengthInYears * 12;

// Calculate monthly payment using the compound interest formula
const monthlyPayment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) / (Math.pow(1 + monthlyInterestRate, months) - 1);

// Calculate total interest paid
const totalInterest = (monthlyPayment * months) - principal;

console.log(`Monthly payment $${monthlyPayment.toFixed(2)} and total interest is: $${totalInterest.toFixed(2)}`);