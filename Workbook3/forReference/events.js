// EVENT: Toon een bericht wanneer een knop wordt geklikt
document.getElementById("orderButton").addEventListener("click", function() {
    alert("Bedankt voor uw bestelling!");
});

// EVENT: Verander de achtergrondkleur van een schoenelement bij het bewegen van de muis erover
document.getElementById("shoeItem").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#f5f5f5";
});
document.getElementById("shoeItem").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
});

// EVENT: Voeg een product toe aan het winkelwagentje wanneer erop wordt geklikt
document.getElementById("addToCartButton").addEventListener("click", function() {
    // Simulatie: Voeg product toe aan winkelwagentje (in werkelijkheid zou je hier meer logica hebben)
    alert("Added the product to shoppingcart!");
});

// EVENT: Valideer formuliergegevens bij het indienen
document.getElementById("checkoutForm").addEventListener("submit", function(event) {
    // Voorbeeld: Valideer of de naam is ingevuld
    const name = document.getElementById("nameInput").value;
    if (!name) {
        alert("Please enter your name");
        event.preventDefault(); // Voorkomt het indienen van het formulier
    }
});

// Commentaar: Events stellen ons in staat om interactief te reageren op gebruikersacties, wat essentieel is voor een dynamische e-commerce website.
