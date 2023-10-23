// Given variables for the loan
const principalAmount = 53000; // The initial loan amount in dollars
const annualInterestRatePercentage = 7.625; // Annual interest rate as a percentage
const loanTermInYears = 15; // The length of the loan in years

// Calculate the monthly interest rate from the annual rate
const monthlyInterestRate = annualInterestRatePercentage / 100 / 12;

// Calculate the total number of monthly payments to be made
const totalNumberOfPayments = loanTermInYears * 12;

// Use the mortgage formula to calculate the monthly payment
// Mortgage formula: M = P * (r * (1 + r)^n) / ((1 + r)^n - 1)

const formulaNumerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), totalNumberOfPayments); // 
const formulaDenominator = Math.pow((1 + monthlyInterestRate), totalNumberOfPayments) - 1;

const monthlyMortgagePayment = principalAmount * (formulaNumerator / formulaDenominator);

// Round the monthly payment to two decimal places for readability
const roundedMonthlyPayment = monthlyMortgagePayment.toFixed(2);

console.log(`Your monthly payment will be $${roundedMonthlyPayment}`);