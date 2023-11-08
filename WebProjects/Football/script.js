"use strict"

//when page is loaded it will start executing init function.
window.onload = init;

function init() {
    //this message will be displayed when page is loaded.
    //alert("Hi onload!");

    //grab the button from html.
    const helloBtn = document.getElementById("helloBtn");
    //chose what function is executed when button is clicked.
    helloBtn.onclick = onHelloBtnClicked;


    //grab select element.
    
    //call a function
}


function onHelloBtnClicked() {
    alert("Hi on click!");
}



let teams = [
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];