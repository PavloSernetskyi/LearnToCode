"use strict"

//The Future Value Formula helps you figure out how much money you'll have in the future if you invest a certain amount at a given interest rate. In your example, you're depositing $1,000 into a Certificate of Deposit (CD) that earns 1.75% interest annually and matures in 5 years. The formula will help you calculate that your ending balance will be $1,092.62.

// P = Principal amount ($1,000 in your example)
// r = Annual interest rate in decimal form (1.75% becomes 0.0175)
// n = Number of times interest is compounded per year (365 for daily compounding)
// t = Time the money is invested for, in years (5 years in your example)


// Step 1: Define the Principal amount - the initial deposit
let principalAmount = 1000; 

// Step 2: Define the Annual Interest Rate in decimal form (1.75% becomes 0.0175)
let annualInterestRateDecimal = 0.0175;

// Step 3: Define the number of times interest is compounded per year (daily compounding means 365 times)
let timesCompoundedPerYear = 365;

// Step 4: Define the time the money is invested for, in years
let timeInvestedYears = 5;

// Step 5: Calculate Future Value using the formula
// Future Value = Principal * (1 + Rate / Times Compounded) ^ (Times Compounded * Time)

let futureValue = principalAmount * Math.pow((1 + annualInterestRateDecimal / timesCompoundedPerYear), (timesCompoundedPerYear * timeInvestedYears));

//A = P(1+r/n)^(nt)
// example A = 10,000 (1+0.025 / 365) ^ (365*5).

console.log(`The ending balance will be $${futureValue.toFixed(2)}`);

