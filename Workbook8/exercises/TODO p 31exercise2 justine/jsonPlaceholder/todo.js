"use strict"

window.onload = init;


function init(){
    let button = document.getElementById("enterBtn");
    button.addEventListener("click", callRESTAPI);
}

function callRESTAPI(){
    const baseURL = "https://jsonplaceholder.typicode.com/todos/";
    const userInput = document.getElementById("userInput");
    const endpointResource = userInput.value;

    fetch(baseURL + endpointResource)
        .then((response) => response.json()
        .then((data) => displayData(data))
        );
}

function displayData(_data){
    let dataInfoMessage = `
    User ID: ${_data.userId}, 
    ID: ${_data.id},
    Title: ${_data.title},
    Completed: ${_data.completed}`;

    document.getElementById("displayResults").innerHTML = dataInfoMessage;
}