"use strict";

function init() {
  const myEvent = document.getElementById("showImageBTN");
  myEvent.addEventListener("click", displayImageOnHTML);
}
init();


const myPeopleList = document.getElementById('InspirationalPeopleList');

myPeopleList.innerHTML = inspirationalPeople[0].name;


let myPerson = displayPerson(inspirationalPeople[5]);

// Create a function to generate a Bootstrap card using template literals
function createCard(person) {
  return `
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">${person.name}</h5>
        <p class="card-text">Age: ${person.age}, Occupation: ${person.occupation}</p>
        <!-- Add other card content here -->
      </div>
    </div>
  `;
}


function displayPerson(_myPerson) {
  return _myPerson;
}





document.getElementById(
  "message"
).innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${myPerson.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${myPerson.name}</h5>
      <p class="card-text">${myPerson.inspirationalQuote}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;

// displayPerson(oprahWinfrey);

function displayImageOnHTML() {
  let myImageURL = showImage(oprahWinfrey);
  document.getElementById("profileURL").src = myImageURL;
}
