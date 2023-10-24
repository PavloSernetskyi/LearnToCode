"use strict"

function calculateMortgage() {
        const principal = parseFloat(document.getElementById('principal').value);
        const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
        const loanLength = parseInt(document.getElementById('loanLength').value);
        const monthlyRate = interestRate / 12;
        const nPayments = loanLength * 12;
        const numerator = monthlyRate * Math.pow(1 + monthlyRate, nPayments);
        const denominator = Math.pow(1 + monthlyRate, nPayments) -1;
        const monthlyPayment = principal * (numerator / denominator);
        const totalInterest = monthlyPayment * nPayments -principal;
        document.getElementById('mortgageResult').innerHTML = `Monthly Payment:$${monthlyPayment.toFixed(2)}, Total Interest: $${totalInterest.toFixed(2)}`;
    };