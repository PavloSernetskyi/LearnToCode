"use strict"

//Organize the organize and also the eventlisteners
// Creating eventlisteners on the page
function init() {

    //Call the first Function
    loadWindow();
    loadEventlisteners();
}
function loadWindow() {
    window.onload = (event) => {
        alert("page is fully loaded");
    };
}

function loadEventlisteners() {
    //! Todo: Create a form handler
    // Selecting elements you typically use const
    const myForm = document.getElementById("signupForm");

    //Create an eventlistener to a form.
    myForm.addEventListener('submit', formSubmitted);;


}
//The event parameter is optional and provide information about the event
function formSubmitted(event) {


    let mytimestamp = new Date();
    mytimestamp.setTime = event.timeStamp;
    let timestampsubmitted = mytimestamp.toLocaleDateString();

    // prevent fro mrefreshing page.
    event.preventDefault();

    alert(`Form has been submitted' + ${timestampsubmitted}`);
}


init();




