"use strict"

window.onload = init;

function init(){
    //create 4 buttons to click on. and then trigger 4 functions.
    const add = document.getElementById('addBtn');
    const substract = document.getElementById('substractBtn');
    const multiply = document.getElementById('multiplyBtn');
    const divide = document.getElementById('divideBtn');

    add.onclick = addTwoNums;
    substract.onclick = substractTwoNums;
    multiply.onclick = multiplyTwoNums;
    divide.onclick = divideTwoNums;

}

function addTwoNums(){
    // take input from user-input from html and store in num1 and num2 using their input id's.
    let num1 = document.getElementById('number1Field').value;
    let num2 = document.getElementById('number2Field').value;

    // calculation.
    let result = Number(num1) + Number(num2);

    // display output two steps.
    let message = (num1 + " + " + num2 + " = " + result);
    document.getElementById('output').innerText = message;

}

function substractTwoNums(){
    // take input from user-input from html and store in num1 and num2 using their input id's.
    let num1 = document.getElementById('number1Field').value;
    let num2 = document.getElementById('number2Field').value;

    // calculation.
    let result = Number(num1) - Number(num2);

    // display output two steps.
    let message = (num1 + " - " + num2 + " = " + result);
    document.getElementById('output').innerText = message;

}

function multiplyTwoNums(){
    // take input from user-input from html and store in num1 and num2 using their input id's.
    let num1 = document.getElementById('number1Field').value;
    let num2 = document.getElementById('number2Field').value;

    // calculation.
    let result = Number(num1) * Number(num2);

    // display output two steps.
    let message = (num1 + " * " + num2 + " = " + result);
    document.getElementById('output').innerText = message;

}


function divideTwoNums(){
    // take input from user-input from html and store in num1 and num2 using their input id's.
    let num1 = document.getElementById('number1Field').value;
    let num2 = document.getElementById('number2Field').value;

    // calculation.
    let result = Number(num1) / Number(num2);

    // display output two steps.
    let message = (num1 + " / " + num2 + " = " + result);
    document.getElementById('output').innerText = message;

}