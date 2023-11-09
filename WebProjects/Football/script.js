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

    //call loadStatesDropdownListIntoHTML.
    loadStatesDropdownListIntoHTML();

    //grab the submit button from html.
    const submitBtn = document.getElementById("selectForm");
    //chose what function is executed when button is clicked.
    submitBtn.onsubmit = select;

}// end of init functions.

let teams = [
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];
// load the dropdown list function.
function loadStatesDropdownListIntoHTML() {
    // load the dropdown list

    const teamsList = document.getElementById("teamsList");
    let length = teams.length;
    for (let i = 0; i < length; i++) {
        // create the option element
        let theOption = document.createElement("option");
        // set the text and value of the option you created
        theOption.textContent = teams[i].name;  //! theOption.textContent = teams[i].name;

        // TODO this is used for going through loop.
        theOption.value = teams[i].code;
        // append the option as a child of (inside) the
        // select element
        teamsList.appendChild(theOption);
    }
} // end of loadDropdownListIntoHTML function.


function select(event) {
    //    alert("On submit subiting form");
    event.preventDefault();  // needed for onsubmit even and form.

    const statesList = document.getElementById("teamsList");

   //TODO acronyms used to use in for loop to search through array of objects.
    let selectedValue = statesList.value;
    // now do something with selectedValue
    // loop through the array of objects.
    // filter on the object with the name of the selectevalue
    let message = '';
    for (let index = 0; index < teams.length; index++) {
        if (teams[index].code == selectedValue) {
            message = 
                `
                You choose ${teams[index].name}
                with a code ${teams[index].code}
                that plays for ${(teams[index].plays)}
                `
        }
    }
    document.getElementById('output').innerHTML = message;
    //   }
}

function onHelloBtnClicked() {
    alert("Hi on click!");
}



