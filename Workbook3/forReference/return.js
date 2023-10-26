function addTwoNumbers(numb1, numb2) {
  let total = numb1 + numb2;
  return total; // Outputs the variable total outside of the function. To reuse.
}

let total = addTwoNumbers(2, 4);
console.log(total);

function addNumbers(a, b) {
  return a + b;
}

// Using the function
const sum = addNumbers(5, 10);

console.log("The sum is: " + sum);

function fullname(_firstname, _lastname) {
  return _firstname + " " + _lastname;
}

let myname = fullname("Remsey", "Mailjard");
console.log(myname);

function calculateAverage(num1, num2, num3) {
    const sum = num1 + num2 + num3;
    //console.log(sum);
    const average = sum / 3;
  //  console.log(average);
    return average;
  }


  function calculateAverage(num1, num2, num3) {
    const average =  (num1 + num2 + num3) / 3;
    return average;
  }
// Test your function
const avg1 = calculateAverage(10, 20, 30);
console.log("The average of 10, 20, 30 is: " + avg1);

const avg2 = calculateAverage(5, 10, 15);
console.log("The average of 5, 10, 15 is: " + avg2);