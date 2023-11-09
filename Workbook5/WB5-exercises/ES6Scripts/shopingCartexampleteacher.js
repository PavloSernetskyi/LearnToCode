const cartItems = [
    { product: 'Book', price: 9.99, quantity: 2 },
    { product: 'Laptop', price: 799.99, quantity: 1 },
    { product: 'Pencil', price: 0.99, quantity: 10 }
  ];
  
  const cartTotal = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
  
  console.log(cartTotal); // Outputs the total price of all items in the cart