"use strict"

//array of objects. steak, chips, tea.
let lunch = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
];

function sum(_lunch){
    let totalPrice = 0;
    //display array of objects.
    for (let index = 0; index < _lunch.length; index++) {
        //when looping through array of objects syntax is: arrayName, index, then .property name.
        console.log(`Item: ${_lunch[index].item}. Price is: $${_lunch[index].price}`);
        totalPrice = totalPrice + _lunch[index].price;
    
    }

    return totalPrice;
}

let result = sum(lunch);
console.log(`
The price for food is $${result}`);

//calculate tax
let tax = result * 0.08;
console.log(`The tax is 8%: $${tax.toFixed(2)}`);

let withTax = result + tax;
//tip.
let tip = withTax * 0.18;
console.log(`The tip is 18%: $${tip.toFixed(2)}`);
let withTipAndTax = withTax + tip;

let total = withTipAndTax;

//total price.
console.log("Grand total is $" + total.toFixed(2));