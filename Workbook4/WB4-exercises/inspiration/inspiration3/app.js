"use strict";

function init() {
  const myEvent = document.getElementById("showImageBTN");
  myEvent.addEventListener("click", displayImageOnHTML);
}
init();

// Select the People list element
const myPeopleList = document.getElementById("InspirationalPeopleList");

const _myPerson = inspirationalPeople[1];

function displayImageOnHTML() {
  for (let index = 0; index < inspirationalPeople.length; index++) {
    const _myPerson = inspirationalPeople[index];

    myPeopleList.innerHTML += `<div class="card" style="width: 18rem;">
<img src="${_myPerson.imageUrl}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${_myPerson.name}</h5>
  <p class="card-text">${_myPerson.inspirationalQuote}</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;
  }
}
displayImageOnHTML();



// Loop through the array and append Bootstrap cards using template literals
//inspirationalPeople.forEach((person, index) => {
// Create a card using the createCard function and template literals
// const cardHTML = createCard(person);

// Append the card HTML to the container
// cardContainer.innerHTML += cardHTML;
//});

//Display your own person of inspiration

// //console.log(oprahWinfrey);
// console.log(
//   `${oprahWinfrey.name} ${oprahWinfrey.accomplishments[0]} ${oprahWinfrey.imageUrl}`
// );

//Create a function that can pass on object
function displayPerson(_myPerson) {
  return _myPerson;
}

// function showImage(_myPerson) {
//   return `${_myPerson.imageUrl}`;
// }

// displayPerson(oprahWinfrey);

