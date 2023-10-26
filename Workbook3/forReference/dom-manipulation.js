// 1. SELECTING ELEMENTS

// Select a single element using its ID
const orderButton = document.getElementById("orderButton");
// Comment: This fetches the first element with the ID "orderButton".

// Select multiple elements using their class name
const shoeItems = document.getElementsByClassName("shoeItem");
// Comment: This fetches a live HTMLCollection of all elements with the class "shoeItem".

// Select elements using a CSS selector (returns the first match)
const firstShoe = document.querySelector(".shoeItem");
// Comment: This fetches the first element with the class "shoeItem".

// Select multiple elements using a CSS selector
const allShoes = document.querySelectorAll(".shoeItem");
// Comment: This fetches a static NodeList of all elements with the class "shoeItem".

// 2. MODIFYING ELEMENTS

// Change the text content of an element
orderButton.textContent = "Purchase Now!";
// Comment: This sets the textual content of the "orderButton" to "Purchase Now!".

// Change an attribute of an element (e.g., the source of an image)
const shoeImage = document.querySelector(".shoeImage");
shoeImage.setAttribute("src", "new-shoe-image.jpg");
// Comment: This sets the "src" attribute of the "shoeImage" element to "new-shoe-image.jpg".

// Modify the style of an element
orderButton.style.backgroundColor = "green";
// Comment: This changes the background color of the "orderButton" to green.

// 3. ADDING & REMOVING ELEMENTS

// Create a new element
const newShoeDescription = document.createElement("p");
newShoeDescription.textContent = "This is a new shoe model!";
// Comment: This creates a new paragraph element with the provided text.

// Append the new element to an existing element
const shoeContainer = document.querySelector(".shoeContainer");
shoeContainer.appendChild(newShoeDescription);
// Comment: This appends the "newShoeDescription" paragraph to the "shoeContainer".

// Remove an element
shoeContainer.removeChild(newShoeDescription);
// Comment: This removes the "newShoeDescription" paragraph from the "shoeContainer".

// 4. EVENT HANDLING & DOM MANIPULATION

// Change content based on user interaction
orderButton.addEventListener("click", function() {
    const orderStatus = document.querySelector(".orderStatus");
    orderStatus.textContent = "Thank you for your order!";
    orderStatus.style.color = "blue";
    // Comment: When the "orderButton" is clicked, the text and color of the "orderStatus" element are updated.
});

