"use strict"

const menu = {
    drinks: ["Water", "Tea", "Sweet Tea", "Coke", "Dr. Pepper", "Sprite"],
    entrees: [
        "Hamburger w/ Fries",
        "Grilled Cheese w/ Tater Tots",
        "Grilled Chicken w/ Veggies",
        "Chicken Fried Steak w/ Mashed Potatoes",
        "Fried Shrimp w/ Coleslaw",
        "Veggie Plate",
    ],
    desserts: ["Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"],
};


// Get references to the HTML elements
const sectionSelect = document.getElementById("menu-section");

//for output in html.
const menuItemsContainer = document.getElementById("menu-items");

// Add the onchange event listener to the dropdown menu
sectionSelect.addEventListener("change", displayItems);

// Initialize the page by displaying items for the default selection
displayItems();

// Function to display menu items
function displayItems() {
    // Get a reference to the dropdown menu element
    const selectedSection = sectionSelect.value; // Get the selected value (e.g., "drinks", "entrees", or "desserts")

    // Get the container where we will display the menu items
    const menuItems = menu[selectedSection]; // Get the array of menu items for the selected section
    menuItemsContainer.innerHTML = ""; // Clear the previous content in the container

    if (menuItems) {
        // If menuItems is not null (i.e., a valid section was selected)
        for (let i = 0; i < menuItems.length; i++) {
            // Loop through the menu items in the selected section
            const itemElement = document.createElement("p"); // Create a new paragraph element
            itemElement.textContent = menuItems[i]; // Set the text content of the paragraph to the current menu item
            menuItemsContainer.appendChild(itemElement); // Add the paragraph element to the container
        }
    }
}

