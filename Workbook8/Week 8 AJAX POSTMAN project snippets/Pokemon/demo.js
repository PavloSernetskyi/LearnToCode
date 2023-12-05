// Step 2: Make an API Request
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json()) // Step 3: Parse the JSON response
  .then(data => {
    // Step 4: Display Data in the Console
    console.log('API Response:', data);

    // You can access specific properties of the data and display them
    console.log('Title:', data.title);
    console.log('Completed:', data.completed);
  })
  .catch(error => console.error('Error:', error));
