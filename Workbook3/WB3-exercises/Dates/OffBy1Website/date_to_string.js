"use strict"

window.onload = init;

function init(){
    //grab button from HTML by ID to click on. 
    //and call other function when clicking on button.
    let button = document.getElementById('btn1');
    button.onclick = displayDate;
}

function displayDate(){
    // console.log("Hey");
    // grab input from user as a date. d = new Date(user inp).
    let dateInput = new Date(document.getElementById('userInp').value);

    // display in 2 steps.
    let message = (`The date is: ${dateInput.toString()}`);
    document.getElementById('output').innerText = message;
}

