"use strict"; // Enables strict mode, which helps catch common coding mistakes and enforces better coding practices.

// Wait for the HTML document to be fully loaded before executing JavaScript code.
document.addEventListener("DOMContentLoaded", init);

// Initialize the application when the DOM is ready.
function init() {
  // Get a reference to the "showImageBTN" button element.
  const showImageButton = document.getElementById("showImageBTN");
  
  // Attach a click event listener to the button, so it calls the "displayInspirationalPeople" function when clicked.
  showImageButton.addEventListener("click", displayInspirationalPeople);
}

// Get a reference to the "InspirationalPeopleList" element, which is the container for displaying inspirational people.
const peopleList = document.getElementById("InspirationalPeopleList");

// Function to display inspirational people.
function displayInspirationalPeople() {
  // Loop through each person in the "inspirationalPeople" array (assuming it's defined elsewhere in your code).
  inspirationalPeople.forEach((person) => {
    // Create an HTML card for each person using the "createCard" function.
    const cardHTML = createCard(person);
    
    // Insert the card HTML at the end of the "peopleList" container.
    peopleList.insertAdjacentHTML("beforeend", cardHTML);
  });
}

// Function to create an HTML card for a given person.
function createCard(person) {
  // Generate an HTML card using a template string, incorporating the person's information.
  return `
    <div class="card" style="width: 18rem;">
      <img src="${person.imageUrl}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${person.name}</h5>
        <p class="card-text">${person.inspirationalQuote}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  `;
}
