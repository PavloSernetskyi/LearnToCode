// Comment: These variables can be used to store and display shoe information on an e-commerce website.
//Declaring variables
const single = "single-quoted";
const double = "double-quoted";
const backticks = `backticks`;
const firstName = "Remsey";
const lastName = "Mailjard";
const age = 34;
let dateOfBirth = new Date("06/02/1989");
const shoeModel = "Sporty Runner"; // STRING: Storing shoe model name
let shoePrice = 79.99; // NUMBER: Storing shoe price
let isInStock = true; // BOOLEAN: Storing availability status
let availableSizes = [6, 7, 8, 9, 10, 11]; // ARRAY: Storing shoe sizes available

// OBJECT: Storing shoe details
let shoeDetails = {
  name: "Sporty Runner",
  price: 79.99,
  inStock: true,
  sizes: availableSizes,
};
// ARRAY OF OBJECTS: Storing multiple shoe details
let shoeCollection = [
  {
    name: "Sporty Runner",
    price: 79.99,
    inStock: true,
    sizes: [6, 7, 8, 9, 10, 11],
    color: "Red",
  },
  {
    name: "Casual Walker",
    price: 69.99,
    inStock: true,
    sizes: [7, 8, 9, 10],
    color: "Blue",
  },
  {
    name: "Elegant Heel",
    price: 89.99,
    inStock: false,
    sizes: [5, 6, 7],
    color: "Black",
  },
];

// Comment: These variables can be used to store and display shoe information on an e-commerce website.
var websiteName = "ShoeStore"; // String datatype
let totalProducts = 100; // Number datatype
const TAX_RATE = 0.07; // Constant for tax rate (7%)
let isSaleActive = true; // Boolean datatype
let featuredShoe = null; // Null datatype
let customerInfo; // Undefined datatype

//Working with dates
let purchaseDate = new Date(); //Current date and time
// JavaScript Date and Time Variables for a Shoe E-commerce Website

// Date when a particular shoe model was released
let releaseDate = new Date("2024-05-01");
console.log("Shoe Release Date:", releaseDate);

// Date and time of a customer's last purchase
let lastPurchaseDate = new Date("2023-10-24T11:15:00");
console.log("Last Purchase Date and Time:", lastPurchaseDate);

// Date for an upcoming shoe sale event
let saleStartDate = new Date(2023, 9, 25); // Month is 0-indexed, so 9 is October
console.log("Sale Start Date:", saleStartDate);

// Date and time when a customer's order is expected to be delivered (5 days from purchase)
let expectedDeliveryDate = new Date(lastPurchaseDate);
expectedDeliveryDate.setDate(expectedDeliveryDate.getDate() + 5);
console.log("Expected Delivery Date:", expectedDeliveryDate);

// A method is a function that can be called on variables.

// Beginning of the day when the website had the most visits (e.g., Black Friday)
let peakTrafficDayStart = new Date("2023-11-24");
peakTrafficDayStart.setHours(0, 0, 0, 0);
console.log("Peak Traffic Day Start:", peakTrafficDayStart);

// End of the day when the website had the most visits (e.g., Black Friday)
let peakTrafficDayEnd = new Date("2023-11-24");
peakTrafficDayEnd.setHours(23, 59, 59, 999);
console.log("Peak Traffic Day End:", peakTrafficDayEnd);

// Date when a customer signed up for a monthly shoe subscription
let subscriptionStartDate = new Date();
subscriptionStartDate.setDate(1);
subscriptionStartDate.setHours(0, 0, 0, 0);
console.log("Subscription Start Date:", subscriptionStartDate);

// Date and time when a review was written for a shoe product
let reviewTimestamp = new Date(1635207800000); // This is a sample timestamp value
console.log("Review Timestamp:", reviewTimestamp);

// Date when the next shoe model in a series is expected to be released (1 month from the last release)
let nextReleaseDate = new Date(releaseDate);
nextReleaseDate.setMonth(nextReleaseDate.getMonth() + 1);
console.log("Next Release Date:", nextReleaseDate);

// Date when the return period for a purchase ends (30 days from purchase)
let returnEndDate = new Date(lastPurchaseDate);
returnEndDate.setDate(returnEndDate.getDate() + 30);
console.log("Return End Date:", returnEndDate);

// JavaScript Date Formatting for a Shoe E-commerce Website
let currentDate = new Date();

// Array of shoe products
let shoes = [
  { brand: "Adidas", model: "Ultraboost", size: 40, price: 140.0 },
  { brand: "Puma", model: "Rebel", size: 41, price: 90.0 },
  { brand: "New Balance", model: "Fresh Foam", size: 42, price: 110.0 },
];

// Array of students
let students = [
  {
    firstName: "Mia",
    lastName: "McClure",
  },
  {
    firstName: "Ravyn",
    lastName: "Rouse",
  },
  {
    firstName: "Jose",
    lastName: "Pascua",
  },
];
