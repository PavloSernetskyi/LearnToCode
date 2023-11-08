"use strict"

window.onload = init;

function init(){
    initTeamDropdown();
    
    const teamList = document.getElementById("footballTeams");
    teamList.onchange = onTeamSelectionChanged;

    let select = document.getElementById("selectForm", null);
    select.onsubmit = displayTeamInfo;
}

let teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs",
    plays:"Kansas City, MO"},
];

//TODO Create the dropdown using the object array
function initTeamDropdown() {
    //Locate the dropdown menu on the html page by its ID
    const teamList = document.getElementById("footballTeams");

    //Create an option element with (text, value)
    let preSelection = new Option("Select a team", null);
    //Add it to the dropdown
    teamList.appendChild(preSelection);


    //Looping through the array of teams
    let numTeams = teams.length;
    for (let index = 0; index < numTeams; index++) {
        //Create option elements for each team in the array of teams ([team name],[code])
        let theOption = new Option(teams[index].name, teams[index].code);
        //Add these options to our dropdown menu
        teamList.appendChild(theOption);
    }
}

//TODO Display the selected team's info
function displayTeamInfo(event) {
    //Prevent page from refreshing after the form is submitted
    event.preventDefault();
    //Locate the dropdown menu on HTML by its ID
    let teamList = document.getElementById("footballTeams");
    let selectedValue = teamList.value;
    // alert(selectedValue);

    //If the team option is a valid choice it will pull information from the selected choice
    if(teamList.selectedIndex >= 0){
        //Declaring the team name from the selected option
        let text = teamList.options[teamList.selectedIndex].text;
        //Declaring the value, which in this case is the team code
        let value = teamList.value;
        //Declaring the location as empty for now
        let location = "";

        //Run a for loop to go through the list of teams until the chosen option value matches one in the list
        for (let index = 0; index < teams.length; index++){
            if(teams[index].code === value){
                //Declare the location upon matching value
                location = teams[index].plays;
            }
        }

        //Message to be displayed
        let displayInfo = `You selected the ${text} (${value}) who play in ${location}`

        //Input the message into the div on the HTML file
        document.getElementById("displayInfo").innerHTML = displayInfo;
    }
    if(selectedValue === "null") {
            alert("No state was selected");
            document.getElementById("displayInfo").innerHTML = '';
        }
    }

//TODO Remove text if another selection has been made
function onTeamSelectionChanged(){
    //Find the dropdown menu on the HTML page
    const teamList = document.getElementById("footballTeams");
    //Declare the value of chosen selection
    let selectedValue = teamList.value
    //If the select option is chosen after first selection, it alerts the user and clears the innerHTMl on the displayInfo div
        if(selectedValue === "null") {
        alert("No state was selected");
        document.getElementById("displayInfo").innerHTML = '';
    }
}
