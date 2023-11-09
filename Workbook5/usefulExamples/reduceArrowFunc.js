//example of using arrow operator.
let numbers = [300, 150, 25];
/*
function getSum(currentTotal, arrayValue) {
 return currentTotal + arrayValue;
}
*/
let sum = numbers.reduce((currentTotal, arrayValue) =>
    currentTotal + arrayValue
    , 0);
console.log(sum);
// sum contains 475
