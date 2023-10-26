// Comment: These functions demonstrate various operations that can be performed on a shoe-selling e-commerce website, from price calculations to sorting and filtering shoes.

// FUNCTION: Calculate total price based on price and quantity
function calculateTotal(price, quantity) {
    return price * quantity;
}

// FUNCTION: Calculate discount price
function calculateDiscountPrice(originalPrice, discountPercent) {
    return originalPrice * (1 - (discountPercent / 100));
}

// ARROW FUNCTION: Filter shoes based on size availability
const filterBySize = (shoes, size) => {
    return shoes.filter(shoe => shoe.sizes.includes(size));
};

// CALLBACK FUNCTION: Execute an action after placing an order
function placeOrder(shoe, callback) {
    console.log(`Order placed for ${shoe.name}`);
    callback(shoe);
}

placeOrder({name: "Sporty Runner", price: 79.99}, (shoe) => {
    console.log(`A confirmation email has been sent for ${shoe.name}`);
});

// ...


// FUNCTION: Return a shoe's details by its name
function getShoeDetailsByName(shoeArray, shoeName) {
    return shoeArray.find(shoe => shoe.name === shoeName);
}

// FUNCTION: Update stock status of a shoe
function updateStockStatus(shoe, status) {
    shoe.inStock = status;
}

// FUNCTION: Add a new shoe to the collection
function addShoeToCollection(shoeArray, newShoe) {
    shoeArray.push(newShoe);
}

// ARROW FUNCTION: Get all shoes above a certain price point
const filterShoesAbovePrice = (shoeArray, price) => {
    return shoeArray.filter(shoe => shoe.price > price);
};

// FUNCTION: Sort shoes based on price (ascending)
function sortShoesByPrice(shoeArray) {
    return shoeArray.sort((a, b) => a.price - b.price);
}

// Comment: These functions demonstrate various operations that can be performed on a shoe-selling e-commerce website, from price calculations to sorting and filtering shoes.
