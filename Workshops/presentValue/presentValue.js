// create a function that calculates present value and include a display message
function calculateFunction() {
    //Input - Intitialize the variables
    const payout = parseFloat(document.getElementById('monthly-payout').value);
    const interestRateValue = parseFloat(document.getElementById('interest-rate').value)/100;
    const numberOfYears = parseFloat(document.getElementById('length').value);
    const totalPayments = numberOfYears * 12;  //number of monthly payments
    const interestMonthly = interestRateValue / 12 // monthly interest
// algoritme or calculation or transformation
    //equation for present value annuity
    //PV = MonthlyPayment*[(1-(1 + monthlyRate)^(-numberOfMonths))/monthlyRate]
    const presentValue = (payout * (1 - Math.pow(1 + interestMonthly, -totalPayments))) / interestMonthly;


    //Output Dislaying a message on HTML or in a alert
      let message =`To fund an annuity that pays $${payout} monthly for ${numberOfYears} years and earns an expected ${interestRateValue * 100}% interest, you would need to invest $${presentValue.toFixed(2)}`;
    document.getElementById('output1').innerText = message;
}